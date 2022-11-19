export interface Repo {
    name?: string,
    description?: string,
    html_url?: string,
    forks?: number,
    open_issues?: number,
    watchers_count?: number,
    stargazers_count?: number,
    created_at: string,
    language: string,
    topics: string[],
    visibility: 'private' | 'public'
    id: number,
  }