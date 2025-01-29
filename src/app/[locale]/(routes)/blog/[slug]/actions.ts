"use server";

import { SanityCmsService } from "@/services/cms/cms.sanity";
import { SlackNotificationService } from "@/services/notification/notifications.slack";
import { BlogComment, BlogPost } from "@/types/blog";
import { ErrorKey, SuccessKey } from "@/types/errors";

export async function getBlogPost(
  slug: string,
  locale: string
): Promise<{ success: boolean; code: ErrorKey | SuccessKey; post?: BlogPost }> {
  try {
    const cms = new SanityCmsService();
    const post = await cms.getBlogPost(slug, locale);

    return { success: true, code: "DEFAULT", post };
  } catch (error) {
    console.error("Error fetching blog post", error);
    return { success: false, code: "SERVER_ERROR" };
  }
}

export async function getComments(
  postId: string
): Promise<{ success: boolean; code: ErrorKey | SuccessKey; comments: BlogComment[] }> {
  try {
    const cms = new SanityCmsService();
    const comments = await cms.getComments(postId);

    return { success: true, code: "DEFAULT", comments };
  } catch (error) {
    console.error("Error fetching comments", error);
    return { success: false, code: "SERVER_ERROR", comments: [] };
  }
}

export async function postComment(
  postId: string,
  name: string,
  email: string,
  comment: string,
  parentId?: string
): Promise<{ success: boolean; code: ErrorKey | SuccessKey }> {
  try {
    const cms = new SanityCmsService();
    const notificationService = new SlackNotificationService();

    await cms.storeComment(postId, name, email, comment, parentId);
    await notificationService.notifyWebsiteTeam({
      title: ":black_nib: New comment posted on blog post",
      body: `*Name:* ${name}\n*Email:* ${email}\n*Comment:* ${comment}`,
    });

    return { success: true, code: "DEFAULT" };
  } catch (error) {
    console.error("Error posting comment", error);
    return { success: false, code: "SERVER_ERROR" };
  }
}
