import React from 'react'
import Button from '../layout/Button'
import Section from '../layout/section'

const Contact = () => {
  return (
    <div className='mb-3'>
      <form
        method='POST'
        action='https://getform.io/f/be51338c-b526-44b0-9a54-131fea7b9c13'
        className='flex flex-col max-w-[1000px] w-full'
      >
        <input
          className='bg-[#f1f1f1] p-3'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <input
          className='bg-[#f1f1f1] my-4 p-3'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <textarea
          className='bg-[#f1f1f1] p-3'
          name='message'
          id='message'
          rows={10}
          placeholder='Message'
        ></textarea>
        <Button title={'Send'} />

      </form>
    </div>
  )
}

export default Contact
