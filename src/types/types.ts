type SocialLink = {
  platform: 'linkedin' | 'x' | 'github' | 'instagram';
  url: string;
};

type TeamMember = {
  src: string;
  name: string;
  description: string;
  socials?: SocialLink[];
};

type Shape = {
  shape: 'circle' | 'square';
}

type DocsCategory = 'FAQs' | 'Guía' | 'Article' | 'Altres';

type Document = {
  title: string;
  summary: string;
  date?: string;
  author?: string;
  category?: DocsCategory;
  content?: string;
  slug: string;
}

export type { SocialLink, TeamMember, Shape, DocsCategory, Document };