'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Example({DataType}:any) {

  const router = useRouter();
  console.log(DataType)
  console.log(JSON.parse(DataType.value).culturalEventInfo)

  const test = JSON.parse(DataType.value).culturalEventInfo.row;

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
            ETC_DESC
           } = ele;
          
          return (
            <div className='m-4 cursor-pointer' onClick={() =>  router.push(`/Detail/test`)}>
              <span>{CODENAME}</span>
              <span>{GUNAME}</span>
              <span>{TITLE}</span>
              <span>{DATE}</span>
              <Image src={MAIN_IMG} alt={MAIN_IMG} width={300} height={300}/>
            </div>
          )
        })
      }
    </div>
  )
}