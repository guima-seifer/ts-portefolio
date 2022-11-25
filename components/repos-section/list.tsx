import { Repo } from '../../interfaces/Repo'
import RepoItem from './item'

interface Props {
  repos: Repo[]
}

function RepoList({ repos }: Props) {
  return (
      <div className='pt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {repos.map((repo, index) => (
          <RepoItem key={index} {...repo} />
        ))}
      </div>
  )
}

export default RepoList
