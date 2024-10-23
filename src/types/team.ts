export interface ISocialLink {
  platform: string;
  url: string;
}

export interface ITeamMember {
  name: string;
  src?: string;
  role: string;
  studies: string;
  socials?: ISocialLink[];
}