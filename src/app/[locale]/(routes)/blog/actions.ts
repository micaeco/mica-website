"use server";

import { SanityCmsService } from "@/services/cms.sanity";
import { BlogPost } from "@/types/blog";
import { ErrorKey, SuccessKey } from "@/types/errors";

export async function getBlogPosts(
  locale: string
): Promise<{ success: boolean; code: ErrorKey | SuccessKey; blogPosts: BlogPost[] }> {
  try {
    const cms = new SanityCmsService();
    const blogPosts = await cms.getBlogPosts(locale);

    if (!blogPosts) {
      return { success: false, code: "NOT_FOUND", blogPosts: [] };
    }

    return { success: true, code: "DEFAULT", blogPosts: blogPosts };
  } catch (error) {
    console.error("Error fetching blog posts", error);
    return { success: false, code: "SERVER_ERROR", blogPosts: [] };
  }
}
