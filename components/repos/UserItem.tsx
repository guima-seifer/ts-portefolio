import Link from 'next/link'
import { User } from '../../model/User'
import Section from '../layout/section'
import Image from 'next/image'
import TitleSection from '../layout/section/title'

function UserItem({ avatar_url, login }: User) {
  return (
    <>
      <Section charKey='repos'>
        <TitleSection title='Repos' desc='My github repositories.' />
        <div className='shadow-md'>
          <div className='flex'>
            <div className='mx-auto'>
              <Image src={avatar_url} alt='Profile' height={100} width={100} />
              <h2 className=''>{login}</h2>
              <Link
                className='mx-auto'
                target='_blank'
                href={`https://github.com/${login}`}
              >
                Visit Profile
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default UserItem
