import React from 'react'

interface Props  {
  children?: React.ReactNode
  charKey: string
}

const Section = ({ ...Props }) => {
  return (
    <div
      id={Props.charKey}
      className='w-full h-screen bg-white dark:bg-[#0a192f] text-gray-900 dark:text-gray-300 py-8'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {Props.children}
      </div>
    </div>
  )
}

export default Section
