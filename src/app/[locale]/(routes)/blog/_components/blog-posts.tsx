"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPost } from "@/types/blog";

type Props = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: Props) {
  const common = useTranslations("common");
  const tTags = useTranslations("blog.tags");

  if (!posts.length) {
    return (
      <div className="py-16 text-center">
        <p className="first-letter:capitalize">{common("no-entries-found")}</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="group shadow-sm transition-shadow hover:shadow-lg">
          <Link href={`/blog/${post.slug}`}>
            {post.cover ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-80"
                  priority={false}
                />
              </div>
            ) : (
              <div className="aspect-video"></div>
            )}
            <CardHeader>
              <CardDescription className="first-letter:capitalize">
                {tTags(post.tag)}
              </CardDescription>
              <CardTitle className="line-clamp-2 font-semibold">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.summary}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={post.author?.profilePicture}
                    alt={post.author?.name || common("unknown-author")}
                  />
                  <AvatarFallback>
                    {post.author?.name.slice(0, 2) || common("unknown-author").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs">{post.author?.name || common("unknown-author")}</span>
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </section>
  );
}
