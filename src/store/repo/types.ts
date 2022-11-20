export interface Repo {
  id: string;
  created_at: string;
  description: string;
  fork: boolean;
  git_url: string;
  name: string;
  language: string;
  languages_url: string;
  stargazers_count: number;
  watchers_count: number;
  owner: {
    login: string;
  };
}

export interface Language {
  [key: string]: number;
}

export interface RepoState {
  loading: boolean;
  repos: Repo[];
  readme: string;
  languages: Language[];
}

export interface RepoQuery {
  owner: string;
  repo: string;
}
