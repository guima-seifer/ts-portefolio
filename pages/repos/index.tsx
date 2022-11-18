import { NextPage } from 'next'
import Link from 'next/link'
import { fetchUsers } from '../../api/github'
import UserItem from '../../components/repos/UserItem'
import { User } from '../../model/User'

interface Props {
  user: User
}

const Repos: NextPage<Props> = ({user} : Props) => (
  <>
   <div>
    <UserItem {...user} />
  </div>
</>
 
  
)

/* getInitialProps enables server-side rendering in a page and 
allows you to do initial data population, it means sending the 
page with the data already populated from the server. 
This is especially useful for SEO. */
Repos.getInitialProps = async () => {
  const user = await fetchUsers('guima-seifer')
  return {
    user,
  }
}

export default Repos
