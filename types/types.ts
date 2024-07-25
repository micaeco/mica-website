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

export type { SocialLink, TeamMember, Shape };