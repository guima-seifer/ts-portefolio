import { NextPage } from 'next';
import Link from 'next/link';
import { fetchUsers } from '../../api/github'
import { User } from '../../model/User'


interface Props {
users: User[];
}

const Repos: NextPage<Props> = ({users}) => (
  <div>
    <p>Hello Next.js</p>
    <Link href="/user-info">Navigate to user info page
    </Link>
  </div>
);

/* getInitialProps enables server-side rendering in a page and 
allows you to do initial data population, it means sending the 
page with the data already populated from the server. 
This is especially useful for SEO. */
Repos.getInitialProps = async () => {
const users = await fetchUsers("guima-seifer");
//console.log(users);
  
return {
users,
  }
}

export default Repos