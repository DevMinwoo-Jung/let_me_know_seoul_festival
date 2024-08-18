'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function FestivalItems({DataType}:any) {


  const test = DataType?.value 
  ? JSON.parse(DataType.value)?.culturalEventInfo?.row 
  : null;

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-5 p-4'>
      {
        test && test.map((ele: any) => {
          
          const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG } = ele;
          
          return (
          <>   
              <div className='w-96 h-96 mt-6 mb-6'>
                <Link  className='w-52 h-60' href={`/Detail/${TITLE}`} key={MAIN_IMG}>
                <Image className='m-auto cursor-pointer' src={MAIN_IMG} alt={MAIN_IMG} width={208} height={240}/>
                </Link>
                <div>
                  <span>{CODENAME}</span>
                  <span>{GUNAME}</span>
                </div>
                <div>
                  <span>{TITLE}</span>
                  <span>{DATE}</span>
                </div>
              </div>
          </>
          )
        })
      }
    </div>
  )
}