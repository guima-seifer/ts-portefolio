import { Repo } from '../../model/Repo'
import Section from '../layout/section'
import RepoItem from './RepoItem'

interface Props {
  repos: Repo[]
}

function RepoList({ repos }: Props) {
  return (
    <Section>
      <div className='pt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {repos.map((repo, index) => (
          <RepoItem key={index} {...repo} />
        ))}
      </div>
    </Section>
  )
}

export default RepoList
