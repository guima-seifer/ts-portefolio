import { NextPage } from 'next'
import { fetchRepos, fetchUsers } from '../api/github'
import Section from '@components/layout/section'
import RepoList from '@components/repos-section/list'
import UserItem from '@components/repos-section/user-info'
import { Repo } from '@interfaces/Repo'
import { User } from '@interfaces/User'

interface Props {
  user: User
  repos: Repo[]
}

const Repos: NextPage<Props> = ({ user, repos }: Props) => (
  <article>
    <Section>
      <UserItem {...user} />
      <RepoList repos={repos} />
    </Section>
  </article>
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
