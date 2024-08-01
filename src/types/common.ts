export type ISocialPlatform = 'linkedin' | 'x' | 'github' | 'instagram';

export interface ISocialLink {
  platform: ISocialPlatform;
  url: string;
}

export interface ITeamMember {
  src: string;
  name: string;
  description: string;
  socials?: ISocialLink[];
}

export type ShapeType = 'circle' | 'square';