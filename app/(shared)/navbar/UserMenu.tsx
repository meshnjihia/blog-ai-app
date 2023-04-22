'use client'
import React from 'react'
import MenuItem from './MenuItem'

interface UserMenuProps{

}

const UserMenu = () => {
  return (
    <div className='flex justify-between items-center gap-10'>
      <MenuItem label='Home' onClick={() =>{}}/>
      <MenuItem label='Trending' onClick={() =>{}}/>
      <MenuItem label='About' onClick={() =>{}}/>
    </div>
  )
}

export default UserMenu