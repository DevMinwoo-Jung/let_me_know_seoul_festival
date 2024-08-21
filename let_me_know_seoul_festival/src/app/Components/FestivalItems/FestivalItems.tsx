import { fetchExample } from '@/app/API/festival';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function FestivalItems() {

  const test = await fetchExample();

  console.log(test)

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-5 p-4'>
      {/* {
        test && test.map((ele: any) => {
          
          const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG } = ele;
          
          return (
          <>   
              <div className='w-96 h-96 mt-6 mb-6' key={MAIN_IMG}>
                <Link  className='w-52 h-60' href={`/Detail/${TITLE}`}></Link>
                <Image className='m-auto cursor-pointer' src={MAIN_IMG} alt={MAIN_IMG} width={208} height={240}/>                
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
      } */}
    </div>
  )
}