export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  fork: boolean;
  forks: number;
  open_issues: number;
  license: any;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  html_url: string;
  languages_url: string;
}
