import { useState, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import Fuse from "fuse.js";

import type { BlogPost, BlogPostTag } from "@/types/blog";
import { getBlogPosts } from "../actions";
import { ErrorKey } from "@/types/errors";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractTextFromPortableText(blocks: any[]): string {
  return blocks
    .reduce((text, block) => {
      if (block._type === "block") {
        const blockText = block.children
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((child: { text: any }) => child.text || "")
          .join(" ");
        return text + " " + blockText;
      }

      if (block._type === "image" && block.alt) {
        return text + " " + block.alt;
      }
      return text;
    }, "")
    .toLowerCase();
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorCode, setErrorCode] = useState<ErrorKey | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<BlogPostTag | "all">("all");

  const locale = useLocale();

  useEffect(() => {
    const fetchPosts = async () => {
      const { success, code, blogPosts } = await getBlogPosts(locale);

      if (!success) {
        setErrorCode(code as ErrorKey);
        setIsLoading(false);
        return;
      }

      setPosts(blogPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, [locale]);

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: [
        "title",
        "summary",
        "author.name",
        {
          name: "content",
          getFn: (post) =>
            extractTextFromPortableText(
              Array.isArray(post.content) ? post.content : [post.content]
            ),
        },
      ],
      threshold: 0.3,
      ignoreLocation: true,
      useExtendedSearch: true,
      includeScore: true,
      shouldSort: true,
    });
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!searchTerm) {
      return selectedTag === "all" ? posts : posts.filter((post) => post.tag === selectedTag);
    }

    const searchResults = fuse.search(searchTerm);
    const matchedPosts = searchResults.map((result) => result.item);

    return selectedTag === "all"
      ? matchedPosts
      : matchedPosts.filter((post) => post.tag === selectedTag);
  }, [searchTerm, selectedTag, posts, fuse]);

  return {
    posts,
    filteredPosts,
    isLoading,
    errorCode,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
  };
}
