'use client'
import Image from 'next/image';
import React from 'react'

export default function Example({DataType}:any) {

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
            PLACE,
            ORG_NAME,
            USE_TRGT,
            USE_FEE,
            PLAYER,
            PROGRAM,
            ETC_DESC,
            ORG_LINK,
            MAIN_IMG,
            RGSTDATE,
            TICKET,
            STRTDATE,
            END_DATE,
            THEMECODE,
            LOT,
            LAT,
            IS_FREE,
            HMPG_ADDR,
           } = ele;
          
          return (
            <div className='m-4'>
              <span>{ORG_NAME}</span>
              <span>{CODENAME}</span>
              <span>{GUNAME}</span>
              <span>{TITLE}</span>
              <span>{DATE}</span>
              <span>{USE_TRGT}</span>
              <span>{USE_FEE}</span>
              <span>{PLAYER}</span>
              <span>{PROGRAM}</span>
              <span>{ETC_DESC}</span>
              <span>{ORG_LINK}</span>
              <span>{RGSTDATE}</span>
              <span>{TICKET}</span>
              <span>{STRTDATE}</span>
              <span>{END_DATE}</span>
              <span>{THEMECODE}</span>
              <span>{PLACE}</span>
              <span>{HMPG_ADDR}</span>
              <span>{LOT}</span>
              <span>{LAT}</span>
              <span>{IS_FREE}</span>
              <Image src={MAIN_IMG} alt={MAIN_IMG} width={300} height={300}/>
            </div>
          )
        })
      }
    </div>
  )
}