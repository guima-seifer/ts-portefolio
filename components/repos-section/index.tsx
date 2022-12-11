import { fetchRepos, fetchUsers } from '../../pages/api/github'
import Section from '@components/layout/section'
import RepoList from '@components/repos-section/list'
import UserItem from '@components/repos-section/user-info'
import { Repo } from '@interfaces/Repo'
import { User } from '@interfaces/User'
import TitleSection from '@components/layout/section/title'

interface Props {
  user: User
  repos: Repo[]
}

const Repos = ({ user, repos }: Props) => {
  return (
    <Section charKey='repos'>
      <div className='max-w-[1000px] w-full mt-[5rem]'>
      <TitleSection title='Repos' desc='My github repositories.' />
      <UserItem {...user} />
        <RepoList repos={repos} />
        </div>
    </Section>
  )
}

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
