import React from 'react'
import Button from '../layout/Button'
import Section from '../layout/section'
import TitleSection from '../layout/section/title'

const Contact = () => {
  return (
    <Section charKey={'contact'} className=''>
      <form
        method='POST'
        action='https://getform.io/f/be51338c-b526-44b0-9a54-131fea7b9c13'
        className='flex flex-col max-w-[1000px] w-full'
      >
        <TitleSection title="Contact" desc="Submit the form to send me an email" />
        <input
          className='bg-[#f1f1f1] p-2'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <input
          className='bg-[#f1f1f1] my-4 p-2'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <textarea
          className='bg-[#f1f1f1]'
          name='message'
          id='message'
          rows={10}
          placeholder='Message'
        ></textarea>
        <Button title={'Let´s Work Together'} />

      </form>
    </Section>
  )
}

export default Contact
