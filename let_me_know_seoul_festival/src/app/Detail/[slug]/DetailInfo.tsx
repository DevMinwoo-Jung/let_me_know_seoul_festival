import React from 'react';

type detailInfo = {
  title: string;
  desc?: string
}

export default function DetailInfo({title, desc}:detailInfo) {  
  console.log(desc)
  return (
    <>
      {
        desc?.length !== 0 ?
        <div className="min-w-96 flex my-3">
          <div className="w-1/3">
            <span className='text-xl'>{title}</span>
          </div>
          <div className="text-left">
            <span>{desc}</span>
          </div>
        </div>
       : ''
      }      
    </>
  )
}
