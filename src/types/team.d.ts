interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'instagram';
  url: string;
}

export interface TeamMember {
  name: string;
  src?: string;
  role: string;
  studies: string;
  socials?: SocialLink[];
}