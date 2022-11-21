import { NextPage } from 'next'
import { fetchRepos, fetchUsers } from '../../api/github'
import Section from '../../components/layout/section'
import RepoList from '../../components/repos/RepoList'
import UserItem from '../../components/repos/UserItem'
import { Repo } from '../../model/Repo'
import { User } from '../../model/User'


interface Props {
  user: User
  repos: Repo[]
}

const Repos: NextPage<Props> = ({ user, repos }: Props) => (
    <Section>
    <UserItem {...user} />
    <RepoList repos={repos} />
    </Section>
)

/* getInitialProps enables server-side rendering in a page and 
allows you to do initial data population, it means sending the 
page with the data already populated from the server. 
This is especially useful for SEO. */
Repos.getInitialProps = async () => {
  const user = await fetchUsers('guima-seifer')
  const repos = await fetchRepos('guima-seifer')
  return {
    user,
    repos,
  }
}

export default Repos
