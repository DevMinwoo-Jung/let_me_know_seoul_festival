'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";



export default function FestivalItem(props:any) {

  const { CODENAME, GUNAME, TITLE, DATE, HMPG_ADDR, MAIN_IMG } = props.info;
  const festivalCode = HMPG_ADDR.slice((HMPG_ADDR.lastIndexOf('cultcode') + 9), HMPG_ADDR.indexOf('&'));
  const [detailToggle, setDetailToggle] = useState(false);

  const setToggle = (bool:boolean) => {
    setTimeout(() => {
      setDetailToggle(bool)
    }, 100)
  }

  return (
    <>   
      <div className='relative'>
        <div className='transition-all duration-500 hover:bg-slate-500 m-auto rounded-xl w-80 h-72 relative' key={MAIN_IMG} onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
            <Image className='rounded-xl m-auto' src={MAIN_IMG} alt={MAIN_IMG} fill={true} sizes='(max-width: 768px)' priority/>                          
            {
              detailToggle === false ? null : 
              <>
                <div className='rounded-xl bg-slate-500 opacity-70 m-auto w-80 h-72 absolute text-white font-bold text-center leading-imgLineHeight'>
                  <div>
                    <p>{CODENAME}</p>
                    <p>{GUNAME}</p>
                  </div>
                  <div>
                    <p className='leading-8'>{TITLE}</p>
                    <p>{DATE}</p>
                    <Link className='min-w-80 min-h-72' href={`/Detail/${festivalCode}`}>
                      <p>자세히 보기</p>
                      <FaArrowUp className="animate-bounce w-6 h-6 m-auto"/>
                    </Link>
                  </div>
                </div>
              </>
            }
        </div>
      </div>    
    </>
  )
}
