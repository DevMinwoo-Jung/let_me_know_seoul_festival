'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function FestivalHover(props:any) {

  const { CODENAME, GUNAME, TITLE, DATE, HMPG_ADDR } = props.info;
  const festivalCode = HMPG_ADDR.slice((HMPG_ADDR.lastIndexOf('cultcode') + 9), HMPG_ADDR.indexOf('&'));
  const [detailToggle, setDetailToggle] = useState(false);

  const setToggle = (bool:boolean) => {
    setTimeout(() => {
      setDetailToggle(bool)
    }, 500)
  }

  return (
    <>
    {
      detailToggle === false ? null : 
      <>
        <div onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className='bg-slate-500 opacity-70 m-auto w-80 h-72 absolute text-white font-bold text-center leading-imgLineHeight'>
          <div>
            <p>{CODENAME}</p>
            <p>{GUNAME}</p>
          </div>
          <div>
            <p className='leading-8'>{TITLE}</p>
            <p>{DATE}</p>
            <Link className='min-w-80 min-h-72' href={`/Detail/${festivalCode}`}>
            <p>자세히 보기</p>
            </Link>
          </div>
        </div>
      </>
    }
    </>
  )
}
