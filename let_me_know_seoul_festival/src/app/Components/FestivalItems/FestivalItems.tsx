'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function FestivalItems({DataType}:any) {


  const test = DataType?.value 
  ? JSON.parse(DataType.value)?.culturalEventInfo?.row 
  : null;

  return (
    <div className='max-w-screen-2xl m-auto grid grid-rows-5 grid-flow-col gap-4'>
      {
        test && test.map((ele: any) => {
          
          const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG } = ele;
          
          return (
          <>   
              <div className='w-96 h-96 m-4'>
                <Link  className='w-64 h-72' href={`/Detail/${TITLE}`} key={MAIN_IMG}>
                <Image className='cursor-pointer' src={MAIN_IMG} alt={MAIN_IMG} width={256} height={288}/>
                </Link>
                <span>{CODENAME}</span>
                <span>{GUNAME}</span>
                <span>{TITLE}</span>
                <span>{DATE}</span>
              </div>
          </>
          )
        })
      }
    </div>
  )
}