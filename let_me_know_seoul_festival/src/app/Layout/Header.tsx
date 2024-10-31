import Image from 'next/image';
import React from 'react'

export default function Header() {
  return (
    <div>
      <div className='w-screen h-28 m-auto items-center flex'>
        <div className='flex'>
          {/* <span className='font-extrabold text-xl ml-7'>About</span> */}
        </div>
        <div className='mx-auto laptop:w-80 mobile:w-72'>
          <Image
          src="/horizontal-logo.png"
          width={300}
          height={150}
          alt="Logo"
          priority={false}
          style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
      <div className="w-full h-20 opacity-35 bg-[linear-gradient(90deg,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)]"></div>
    </div>
  )
}
