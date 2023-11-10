import Link from 'next/link'
import { User } from '../../interfaces/User'
import Image from 'next/image'
import TitleSection from '../layout/section/title'
import Button from '../layout/Button'
import { FaGithubAlt } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar'

function UserItem({ avatar_url, login }: User) {
  return (
    <div className='mt-5'>
      <div className='mx-auto'>
        <div className='mx-3'>
          <Link
            className='mx-auto'
            target='_blank'
            href={`https://github.com/${login}`}
          >
            <div className='flex'>
              <Avatar>
                <AvatarImage
                  src={avatar_url as string}
                  alt='@guima-seifer'
                  height={100}
                  width={100}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className='font-bold mt-2 ml-2'>
                <FaGithubAlt className='inline mr-2' />
                {login}
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserItem
