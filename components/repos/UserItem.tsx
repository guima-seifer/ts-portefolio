import PropTypes from 'prop-types'
import Link from 'next/link'
import { User } from '../../model/User'

function UserItem(props : User) {
  return (
    <>
      <div className='card shadow-md compact side bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={props.avatar_url} alt='Profile' />
            </div>
          </div>
          <div>
            <h2 className='card-title'>{props.login}</h2>
            <Link
              className='text-base-content text-opacity-40'
              href={`/user/${props.login}`}
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default UserItem
