import React from 'react';

type detailInfo = {
  title: string;
  desc?: string
}

export default function DetailInfo({title, desc}:detailInfo) {  
  return (
    <>
      {
        desc?.length !== 0 ?
        <div className="mobile:min-w-72 laptop:min-w-96 flex my-3">
          <div className="w-1/3">
            <span className='text-xl'>{title}</span>
          </div>
          <div className="w-2/3 text-left">
            <span className='mobile:h-80 laptop:h-96'>{desc}</span>
          </div>
        </div>
       : ''
      }      
    </>
  )
}
