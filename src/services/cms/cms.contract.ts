import { BlogComment, BlogPost } from "@/types/blog";
import { Faq } from "@/types/faqs";
import { LegalDisclaimer } from "@/types/legal-disclaimer";
import { PrivacyPolicy } from "@/types/privacy-policy";

export interface CmsService {
  getBlogPosts(locale?: string): Promise<BlogPost[]>;
  getBlogPost(slug: string, locale?: string): Promise<BlogPost>;
  getBlogPostTitle(postId: string, locale: string): Promise<string>;
  getFaqs(locale?: string): Promise<Faq[]>;
  getComments(postId: string): Promise<BlogComment[]>;
  getPrivacyPolicy(locale: string): Promise<PrivacyPolicy>;
  getLegalDisclaimer(locale: string): Promise<LegalDisclaimer>;
  storeComment(
    postId: string,
    name: string,
    email: string,
    comment: string,
    parentId?: string
  ): Promise<void>;
}
