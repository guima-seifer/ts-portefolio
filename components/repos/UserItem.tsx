import Link from 'next/link'
import { User } from '../../model/User'
import Section from '../layout/section'
import Image from 'next/image'
import TitleSection from '../layout/section/title'
import Button from '../layout/Button'

function UserItem({ avatar_url, login }: User) {
  return (
    <>
      <TitleSection title='Repos' desc='My github repositories.' />
      <div className='flex'>
        <div className='shadow-md'>
          <Image src={avatar_url} alt='Profile' height={100} width={100} />
          <h2 className='font-bold'>{login}</h2>
          <Link
            className='mx-auto'
            target='_blank'
            href={`https://github.com/${login}`}
          >
            <Button title='Visit Profile' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default UserItem
