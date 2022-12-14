import Section from '@components/layout/section'
import { Repo } from '../../interfaces/Repo'
import RepoItem from './item'

interface Props {
  repos: Repo[]
}

function RepoList({ repos }: Props) {
  return (
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {repos.map((repo, index) => (
          <RepoItem key={index} {...repo} />
        ))}
      </div>
        )
}

export default RepoList
