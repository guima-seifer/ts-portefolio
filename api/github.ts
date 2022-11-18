import { User } from '../model/User'
import fetch from 'isomorphic-unfetch'



export const fetchUsers = async (login : string): Promise<User[]> => {
  const baseRoot = `https://api.github.com/users/${login}`;
const userCollectionURL = `${baseRoot}/repos`
  const res = await fetch(userCollectionURL)
  const data = await res.json();

  const res2 = await fetch(baseRoot)
  const data2 = await res2.json();
  console.log(data2)

  return data.map(
    ({ ...User } : User) => ({ ...User } as User)
  );
}