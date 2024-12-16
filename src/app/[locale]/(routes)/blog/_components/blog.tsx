"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { useBlogPosts } from "@/app/[locale]/(routes)/blog/_hooks/use-blog-posts";
import BlogPosts from "./blog-posts";
import SearchBar from "./search-bar";
import Loading from "@/components/loading";
import TagFilter from "./tags-filter";

export default function BlogContent() {
  const {
    filteredPosts,
    isLoading,
    errorCode,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
  } = useBlogPosts();
  const tErrors = useTranslations("errors");
  const common = useTranslations("common");

  if (isLoading) return <Loading />;

  if (errorCode) {
    return (
      <div className="flex w-full items-center justify-center py-32">
        <p className="text-destructive">{tErrors(errorCode)}</p>
      </div>
    );
  }

  return (
    <main className="bg-white px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center font-bold capitalize">{common("blog")}</h2>
        <div className="mb-8 flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        </div>
        <BlogPosts posts={filteredPosts} />
      </div>
    </main>
  );
}
