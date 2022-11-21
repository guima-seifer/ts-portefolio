import Link from 'next/link'
import { User } from '../../model/User'
import Section from '../layout/section'
import Image from 'next/image'
import TitleSection from '../layout/section/title'
import Button from '../layout/Button'
import { FaGithubAlt } from 'react-icons/fa'

function UserItem({ avatar_url, login }: User) {
  return (
    <>
      <TitleSection title='Repos' desc='My github repositories.' />
      <div className='mt-8 flex flex-row'>
        <div className='shadow-md'>
          <div className='mx-auto'>
          <Image className='mx-auto' src={avatar_url} alt='Profile' height={100} width={100} />
          <h2 className='text-center font-bold'><FaGithubAlt className='inline mr-2' />{login}</h2>
          </div>
          
          <div className='mx-3'>
          <Link
            className='mx-auto'
            target='_blank'
            href={`https://github.com/${login}`}
          >
            <Button title='Visit Profile' />
          </Link>
          </div>
          </div>
      </div>
    </>
  )
}

export default UserItem
