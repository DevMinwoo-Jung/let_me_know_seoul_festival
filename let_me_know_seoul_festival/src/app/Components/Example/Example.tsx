'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Example({DataType}:any) {

  // console.log(DataType)
  // console.log(JSON.parse(DataType.value).culturalEventInfo)

  const test = DataType?.value 
  ? JSON.parse(DataType.value)?.culturalEventInfo?.row 
  : null;

  return (
    <div>
      {
        test && test.map((ele: any) => {
          
          const { 
            CODENAME,
            GUNAME,
            TITLE,
            DATE,
            MAIN_IMG,
           } = ele;
          
          return (
          <>   
            <Link href={`/Detail/${TITLE}`} key={MAIN_IMG}>
              <div className='m-4 cursor-pointer'>
                <span>{CODENAME}</span>
                <span>{GUNAME}</span>
                <span>{TITLE}</span>
                <span>{DATE}</span>
                <Image src={MAIN_IMG} alt={MAIN_IMG} width={300} height={300}/>
              </div>
            </Link>
          </>
          )
        })
      }
    </div>
  )
}