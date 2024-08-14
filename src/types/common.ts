export type ISocialPlatform = 'linkedin' | 'x' | 'github' | 'instagram';

export interface ISocialLink {
  platform: ISocialPlatform;
  url: string;
}

export interface ITeamMember {
  src: string;
  name: string;
  role: string;
  studies: string;
  socials?: ISocialLink[];
}

export type TShapeType = 'circle' | 'square';
