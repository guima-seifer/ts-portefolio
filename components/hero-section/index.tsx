import Image from "next/image"
import Link from "next/link"
import Contact from '@components/contact-section'
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
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
                &ldquo;I'm a portuguese technology <i>aficionado</i> and entrepeneur with a degree in Telecomunications and Computer Science. I love <b>computer engineering</b> and <b>software developer</b>, currently I'm looking forward to become a <b>cloud engineer</b>.&ldquo;</p>
              <footer className="text-sm">2023</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">

          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Let's Work Together
              </h1>
              <div className='my-5'>
              <Contact/>
              </div>
              <p className="text-sm text-muted-foreground">
               Or directly to fernado[@]affectiveturtle[.]pt
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
    </>
  )
}
export default Hero
