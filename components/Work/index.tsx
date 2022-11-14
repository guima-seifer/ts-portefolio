import React from 'react'
import Section from '../layout/Section'
import { works } from '../../data/work'
import SectionTitle from '../layout/SectionTitle'
/* eslint-disable react/jsx-no-comment-textnodes */

const Work = () => {
  return (
    <Section charKey='work'>
      <div className='my-8'>
      <SectionTitle title='Work'/>
        <p className='py-6'>Check out some of my recent work.</p>
      </div>
      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Grid Item */}
        {works.map((item, index) => (
 
          <div
            key={index}
            style={{ backgroundImage: `url(${item.image.src})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-nd flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                {item.name}
              </span>
              <div className='pt-8 text-center'>
                {/* eslint-disable-next-line */}
                <a href={item.github} target='_blank'></a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font´bold text-lg'>
                  Demo
                </button>
                {/* eslint-disable-next-line */}
                <a href={item.live} target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font´bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Work
