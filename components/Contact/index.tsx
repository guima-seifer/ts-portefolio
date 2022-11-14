import React from 'react'
import Section from '../Section'
import TitleSection from '../Section/title'

const Contact = () => {
  return (
    <Section charKey={'contact'} >
      <form
        method='POST'
        action='https://getform.io/f/be51338c-b526-44b0-9a54-131fea7b9c13'
        className='flex flex-col max-w-[1000px] w-full'
      >
        <TitleSection title="Contact" desc="Submit the form to send me an email" />
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <input
          className='bg-[#ccd6f6] my-4 p-2'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <textarea
          className='bg-[#ccd6f6]'
          name='message'
          id='message'
          rows={10}
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let´s Collaborate
        </button>
      </form>
    </Section>
  )
}

export default Contact
