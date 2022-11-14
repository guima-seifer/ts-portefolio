import React from 'react'

interface Props  {
  charKey: string
}

const SectionTitle = ({ ...Props }) => {
  return (
      <div className='grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            {Props.children}
          </p>
        </div>
      </div>
  )
}

export default SectionTitle
