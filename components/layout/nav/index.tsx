"use client"
import React, { useState, MouseEvent } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import styles from './navbar.module.css'
import { ModeToggle } from './toggle_button'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav);

  return (  
    <div className='fixed w-full z-50 h-[80px] items-center px-4 grid text-dark bg-transparent dark:text-white'>

      {/* Menu */}
      <div className='flex justify-end'>
      <ul className='hidden md:flex mt-5'>
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
          <Link to='repos' smooth={true} duration={500}>
            Repositories
          </Link>
        </li>
        <li className={styles.navigation}>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li><ModeToggle /></li>
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
      <div className='hidden md:flex fixed flex-col top-[35%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-zinc-900 mr-[-100px] hover:ml-[100px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/fernandoguima/'
                        rel="noreferrer" target="_blank">
               <FaLinkedin size={30} /> Linkedin
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 mr-[-100px] hover:ml-[100px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/guima-seifer'
            rel="noreferrer" target="_blank">
               <FaGithub size={30} />Github
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 mr-[-100px] hover:ml-[100px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:fernandobvguimaraes@gmail.com'
            rel="noreferrer">
               <HiOutlineMail size={30} />Email
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 mr-[-100px] hover:ml-[100px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/CV_FernandoGuimaraes_EN.pdf'
            >
               <BsFillPersonLinesFill size={30} />Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Navbar