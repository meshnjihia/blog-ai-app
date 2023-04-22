'use client'
import React from 'react'


import SocialMedia from './SocialMedia'
import UserMenu from './UserMenu'
import MenuItem from './MenuItem'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="mb-5">
      <nav className="flex flex-row items-center justify-between w-full bg-wh-900 text-wh-10 px-10 py-4">
        <SocialMedia />
        <UserMenu />
        <div>
          <MenuItem label='Sign In' onClick={() =>{}}/>
        </div>
      </nav>
      <div className='flex flex-row justify-between gap-8 mt-5 mb-4 mx-10'>
        <div className='basis-2/3 md:mt-3'>
          <h1 className='font-bold text-3xl md:text-5xl'>BLOG OF THE FUTURE </h1>
          <p className='mt-3 text-base text-neutral-600'>
            Oh, great. Another day, another blog post. Because the internet really needs more AI-generated content, right? eye roll
          </p>
        </div>
        <div className='basis-full relative w-auto h-32 bg-wh-500'>
          {/* <Image
            src={''}
            alt='Ai'
          /> */}
          Image should be here
        </div>
      </div>
      <hr className='border-1 mx-10'/>
    </header>
  )
}

export default Navbar
