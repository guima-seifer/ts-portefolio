import React from 'react'

interface Props  {
    title: string
    desc?: string    
}

const TitleSection = ({ ...Props }) => {
  return (
    <div>
    <p
      className='text-4xl font-bold 
      inline border-b-4
       border-pink-600'
       
    >
      {Props.title}
    </p>
    <p className='py-4'>{Props.desc}</p>
  </div>
  )
}

export default TitleSection
