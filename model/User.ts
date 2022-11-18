export interface User {
    name?:string,
    type?:string,
    avatar_url?:string,
    location?:string,
    bio?:string,
    blog?:string,
    twitter_username?:string,
    login?:string,
    html_url?:string,
    followers?:number,
    following?: number,
    public_repos?: number,
    public_gists?: number,
    hireable?: boolean,
  }