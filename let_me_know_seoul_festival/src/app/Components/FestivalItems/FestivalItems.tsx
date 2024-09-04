import { fetchExample } from '@/app/API/festival';
import { RootState } from '@reduxjs/toolkit/query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export function FestivalItems() {
  
  const dispatch = useDispatch();

  // Access the Redux state
  const { festivals, totalCount } = useSelector((state: any) => state.festival);

  return (
    <div className='grid grid-rows-4 grid-flow-col gap-5 p-4'>
      {
        festivals && festivals.map((ele: any) => {
          
          const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG, HMPG_ADDR } = ele;
          
          return (
          <>   
              <div className='w-96 h-96 mt-6 mb-6' key={MAIN_IMG}>
                <Link  className='w-52 h-60' href={`/Detail/${HMPG_ADDR}`}>
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