import React from 'react'
import Section from '../layout/Section'

const Contact = () => {
  return (
    <Section charKey={'contact'} className=''>
      <form
        method='POST'
        action='https://getform.io/f/be51338c-b526-44b0-9a54-131fea7b9c13'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Contact
          </p>
          <p className='py-4'>
            Submit the form to send me an email
          </p>
        </div>
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
