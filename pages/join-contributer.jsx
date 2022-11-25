import Head from 'next/head'
import React from 'react'
import Header2 from '../components/Header2'
import Join from '../components/Join'
const join = () => {
  return (
    <div className='w-full h-screen overflow-y-hidden'>
      <Head>
        <title>Free stock photos - Pexels</title>
      </Head>
      <Header2 />
      <Join />
    </div>
  )
}

export default join