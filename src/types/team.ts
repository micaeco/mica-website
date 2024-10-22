export interface ISocialLink {
  platform: string;
  url: string;
}

export interface ITeamMember {
  src: string;
  name: string;
  role: string;
  studies: string;
  socials?: ISocialLink[];
}