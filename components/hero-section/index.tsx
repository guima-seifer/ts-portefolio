import { HiArrowNarrowRight } from 'react-icons/hi'
import Logo from '../../assets/logo192.png'

import Image from "next/image"
import Link from "next/link"
export type HeroProps = {
  children?: React.ReactNode
}

const Hero = () => {
  return (
    <>
    <div className="md:hidden">

        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Fernando Guimarães
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;I´m developer from Portugal. My academic background is Telecommunications and Computer Sciences at the University of Minho. I´ve also experience in business management, namely in tourism and short-term rentals, and bitcoin atm operation.&rdquo;
              </p>
              <footer className="text-sm">2023</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">

          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Have you checked my other businesses?
              <br/>
              <Link
                href="https://houseandpeople.pt"
                className="underline underline-offset-4 hover:text-primary"
              >
                House and People
              </Link>{" "}
              and{" "}
              <Link
                href="https://mindthecoin.com"
                className="underline underline-offset-4 hover:text-primary"
              >
                Mind the Coin
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    {/* 
    <Section charKey='home'>
      <p className='dark:text-white text-teal-900'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold dark:text-pink-600 text-teal-900'>
        Fernando Guimarães
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
        I´m a web developer.
      </h2>
      <p className='text-gray-500 py-4 max-w-[700px]'>
        Specializing in building applications with React.
      </p>
      <div>
        <button
          className='dark:bg-pink-600 bg-teal-900 text-white  group px-6 py-3 
            my-2 flex 
            items-center hover:bg-gray-500'
        >
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
        </button>
      </div>
    </Section> */}
    </>
  )
}
export default Hero
