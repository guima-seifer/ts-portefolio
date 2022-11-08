import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200'>
      <div>
        <img src='' alt='' style={{ width: '50px' }} />
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      {/* Hamburguer */}
      <div className='md:hidden z-10'>
        <FaBars />
      </div>

      {/* Mobile menu */}
      <ul
        className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}
      >
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Contact</li>
        <li className='py-6 text-4xl'>Home</li>
      </ul>
      {/* Social Icons */}
    </div>
  )
}

export default Navbar
