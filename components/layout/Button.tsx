import React from 'react'

interface Props {
    title: string
    children?: React.ReactNode
}

const Button = (props : Props) => {
  return (
    <button
      className='bg-pink-600 text-white  group border-2 px-6 py-3 
      my-2 flex 
      items-center dark:hover:border-pink-600 hover:border-pink-600'
    >
      {props.title}
    </button>
  )
}

export default Button
