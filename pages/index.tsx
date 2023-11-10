import Hero from '@components/hero-section'
import Navbar from '@components/layout/nav'
import Skills from '@components/skills-section'
import Work from '@components/work-section'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { User } from '@interfaces/User'
import { Repo } from '@interfaces/Repo'
import { fetchRepos, fetchUsers } from 'pages/api/github'
import Repos from '../components/repos-section'
import { Separator } from '../components/ui/separator'


interface Props {
  user: User
  repos: Repo[]
}

const Home : NextPage<Props> = ({user, repos}) => { 

  useEffect(() => {
      }, [])

  return (
    <div>
      <Head>
        <title>Fernando Guimarães</title>
        <meta name='description' content='Freelance computer engineer - software, cloud and administration' />
        <link rel='icon' href='/logo192.png' />
      </Head>
      <main>
        <Navbar />
        <Hero/>
        <Separator />
        <Repos user={user} repos={repos} />
        <Skills />
        <Work />
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