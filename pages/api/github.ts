import { User } from '@interfaces/User'
import fetch from 'isomorphic-unfetch'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const options = {
  method: 'POST',
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
    'Accept': 'application/json',
    'Authorization': `token ${GITHUB_TOKEN}`

  }
}
export const fetchUsers = async (login: string): Promise<User> => {

  const baseRoot = `${GITHUB_URL}/users/${login}`
  const userReposURL = `${baseRoot}/repos`
  const res = await fetch(userReposURL, options)

  const resRepos = await res.json();

  const resUser = await fetch(baseRoot)
  const user = await resUser.json();
/*   console.log(user)
 */
return user
}

//Get user and repos
export const fetchRepos = async (login: string) => {
  const baseRoot = `${GITHUB_URL}/users/${login}`
  const userReposURL = `${baseRoot}/repos`
  const resUser = await fetch(userReposURL)
  const repos = await resUser.json();
  console.log(repos)

  return repos
}