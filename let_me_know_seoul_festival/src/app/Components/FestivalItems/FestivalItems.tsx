import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export function FestivalItems() {
  
  // Access the Redux state
  const { festivals } = useSelector((state: any) => state.festivalSlice);



  return (
    <div className='grid grid-rows-4 grid-flow-col gap-5 p-4'>
      {
        festivals && festivals.map((ele: any) => {
          
          const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG, HMPG_ADDR } = ele;
          
          const festivalCode = HMPG_ADDR.slice((HMPG_ADDR.lastIndexOf('cultcode') + 9), HMPG_ADDR.indexOf('&'))

          

          return (
          <>   
              <div className='w-96 h-96 mt-6 mb-6' key={MAIN_IMG}>
                <Link  className='w-52 h-60' href={`/Detail/${festivalCode}`}>
                <Image className='m-auto cursor-pointer' src={MAIN_IMG} alt={MAIN_IMG} width={208} height={240}/>                
                <div>
                  <span>{CODENAME}</span>
                  <span>{GUNAME}</span>
                </div>
                <div>
                  <span>{TITLE}</span>
                  <span>{DATE}</span>
                </div>
                </Link>
              </div>
          </>
          )
        })
      }
    </div>
  )
}