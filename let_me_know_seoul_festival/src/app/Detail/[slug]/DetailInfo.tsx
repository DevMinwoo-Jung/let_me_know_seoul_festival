import React from 'react'

type detailInfo = {
  title: string;
  desc: string
}

export default function DetailInfo({title, desc}:detailInfo) {  

  return (
    <div className="flex">
    <div className="w-1/3">
      <span className='text-2xl'>{title}</span>
    </div>
    <div className="text-left">
      <span>{desc}</span>
    </div>
  </div>
  )
}
