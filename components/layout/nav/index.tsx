import React, { useState, MouseEvent } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Logo from '../../../assets/logo192.png'
import styles from './navbar.module.css'

export type NavBarProps = {
  updateDarkMode: (arg: boolean) => void
}

const Navbar = ({updateDarkMode} : NavBarProps) => {

  const [nav, setNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => setNav(!nav);

  const changeTheme = (event: MouseEvent<SVGAElement>) => {
    setDarkMode(!darkMode)
    updateDarkMode(!darkMode)
  }

  return (  
    <div className='fixed w-full h-[80px] items-center px-4 grid text-teal-900 dark:text-white'>

      {/* Menu */}
      <div className='flex justify-center'>
      <div className=''>
                <Image src={Logo} alt='' style={{ width: '50px' }} />
      </div>
      <ul className='hidden md:flex mt-5'>
       
        <li className={styles.navigation}>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={styles.navigation}>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className={styles.navigation}>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className={styles.navigation}>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className={styles.navigation}>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <BsFillMoonStarsFill onClick={changeTheme} className='mr-2 inline first-letter:cursor-pointer' /></li>
      </ul>
      </div>

      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={!nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}
      >
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/fernandoguima/'
                        rel="noreferrer" target="_blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/guima-seifer'
            rel="noreferrer" target="_blank">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:fernandobvguimaraes@gmail.com'
            rel="noreferrer">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/CV_FernandoGuimaraes_EN.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Navbar