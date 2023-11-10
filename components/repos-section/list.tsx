import Section from '@components/layout/section'
import { Repo } from '../../interfaces/Repo'
import RepoItem from './item'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
interface Props {
  repos: Repo[]
}

function RepoList({ repos }: Props) {
  return (
    <div className='gap-5'>
      <Table>
        <TableCaption>List of recent repos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repos.map((repo, index) => (
            <TableRow>
              <RepoItem key={index} {...repo} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RepoList
