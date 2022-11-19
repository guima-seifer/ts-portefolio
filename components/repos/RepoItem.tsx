import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { Repo } from '../../model/Repo'
import Button from '../layout/Button'

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
    className='shadow-lg shadow-[#040c16] group container rounded-nd flex  items-center content-div mt-3'
  >
    {/* Hover Effects */}
    <div className='px-3'>
      <span className='text-xl font-bold justify-center text-black tracking-wider'>
        {name}
      </span>
      <p className='text-black tracking-wider'>
        {description}
      </p>
      <div className=' flex justify-between mt-3 mx-4'>
        <FaEye  />
        <FaInfo />
        <FaLink  />
        <FaStar />
        </div>
      <div className='flex justify-center pt-3'>
        {/* eslint-disable-next-line */}
            <Button title={"Repo"} />
      </div>
    </div>
  </div>

    
   
  )
}

export default RepoItem
