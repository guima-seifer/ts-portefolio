import About from '../components/about-section'
import Contact from '../components/contact-section'
import { Hero } from '../components/hero-section'
import { Navbar } from '../components/layout/navbar'
import Skills from '../components/skills-section'
import Work from '../components/work-section'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { User } from '../model/User'
import { Repo } from '../model/Repo'
import { fetchRepos, fetchUsers } from '../api/github'
import Repos from './repos'


interface Props {
  user: User
  repos: Repo[]
}

const Home : NextPage<Props> = ({user, repos}) => { 
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const updateDarkMode = (dark: boolean):void => {
    setDarkMode(dark)
}

  useEffect(() => {
      }, [])
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portefolio - Fernando Guimarães</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo192.png' />
      </Head>
      <main>
        <Navbar updateDarkMode={updateDarkMode} />
        <Hero/>
        <About />
        <Skills />
        <Work />
        <Repos user={user} repos={repos} />
        <Contact />
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  const user = await fetchUsers('guima-seifer')
  const repos = await fetchRepos('guima-seifer')
  return {
    user,
    repos,
  }
}

export default Home