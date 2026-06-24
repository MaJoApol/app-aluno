export interface Project {
  id: number | string;
  language: string | null;
  name: string;
  updated_at: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url?: string;
  };
}
