import { useState } from 'react'
import { FaBars, FaTimes, FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo192.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200'>
      <div className='mx-8'>
        <img src={logo} alt='' style={{ width: '50px' }} />
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
      <div onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars /> : <FaTimes/> } 
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
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a  className='flex justify-between items-center w-full text-gray-300'
            href="">Linkedin < FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a  className='flex justify-between items-center w-full text-gray-300'
            href="">Github < FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a  className='flex justify-between items-center w-full text-gray-300'
            href="">Email < HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a  className='flex justify-between items-center w-full text-gray-300'
            href="">Resume < BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
