'use client'
import React from 'react'
import Image from 'next/image'
import {
  Discord,
  Facebook,
  Google,
  Instagram,
  Pinterest,
  Twitter,
} from '@/public/assets'

type Props = {
  isBlack?: boolean
}

const SocialLink = ({ isBlack = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isBlack ? 'brightness-0' : ''} hover:opacity-50`}
          src={Google}
          alt="google"
          width={20}
          height={20}
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isBlack ? 'brightness-0' : ''} hover:opacity-50`}
          src={Twitter}
          alt="twitter"
          width={20}
          height={20}
        />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isBlack ? 'brightness-0' : ''} hover:opacity-50`}
          src={Facebook}
          alt="facebook"
          width={20}
          height={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isBlack ? 'brightness-0' : ''} hover:opacity-50`}
          src={Instagram}
          alt="instagram"
          width={20}
          height={20}
        />
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isBlack ? 'brightness-0' : ''} hover:opacity-50`}
          src={Pinterest}
          alt="pinterest"
          width={20}
          height={20}
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isBlack ? 'brightness-0' : ''} hover:opacity-50`}
          src={Discord}
          alt="discord"
          width={20}
          height={20}
        />
      </a>
    </div>
  )
}

export default SocialLink
