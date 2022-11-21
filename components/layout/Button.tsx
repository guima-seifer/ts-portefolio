import React from 'react'

interface Props {
  title?: string
}

const Button = ({
  title} : Props) => {
  return (
    <button
      className='bg-white text-pink-600 dark:text-white dark:bg-pink-600 dark:hover:bg-white dark:hover:text-pink-600
      group border-2 px-6 py-3
       border-pink-600
      my-2 flex 
      items-center hover:bg-pink-600 hover:text-white mx-auto'
    >
      {title}
    </button> 
  )
}

export default Button
