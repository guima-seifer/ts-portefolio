import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { Repo } from '../../model/Repo'
import Button from '../layout/Button'
import Link from 'next/link'

function RepoItem({
  name,
  id,
  description,
  html_url,
  forks,
  open_issues,
  watchers_count,
  stargazers_count,
}: Repo) {
  return (
    <div
      key={id}
      className='shadow-lg shadow-[#040c16] group container flex content-div mt-3'
    >
      {/* Hover Effects */}
      <div className='my-4 mx-4'>
        <span className='text-xl font-bold justify-center text-black tracking-wider dark:text-white'>
          {name}
        </span>
        <p className='text-black tracking-wider dark:text-gray-300'>
          {description}
        </p>
        <div className=' grid content-center grid-cols-4 justify-items-stretch gap-4 mt-3 mx-4 '>
          <div className='px-3 '>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='px-3 '>
            <FaStar className='mr -2' /> {stargazers_count}
          </div>
          <div className='px-3 '>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='px-3 '>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
        <div className='flex justify-center pt-3'>
          {/* eslint-disable-next-line */}
          <Link className='mx-auto' target='_blank' href={`${html_url}`}>
            <Button title={'Repo'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
