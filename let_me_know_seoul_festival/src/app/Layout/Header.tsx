import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='w-screen h-28 m-auto items-center flex'>
      <div className='flex'>
        <span className='font-extrabold text-xl ml-7'>About</span>
      </div>
      <div className='mx-auto'>
        <Image
        src="/horizontal-logo.png"
        width={300}
        height={150}
        alt="Logo"
        />
      </div>
    </div>
  )
}
