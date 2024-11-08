import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import FestivalItem from './FestivalItem';
import { InfoI } from '@/app/Utils/dataType';
import NoResult from '../NoResult';

export function FestivalItems() {
  
  const { festivals, isEmpty } = useSelector((state: any) => state.festivals);

  if(isEmpty){
    return  <NoResult/>
  }

  return (
      <div className='grid  mx-auto mobile:grid-cols-1 tablet:w-tablet tablet:grid-cols-2 laptop:w-laptop laptop:grid-cols-3 desktop:w-desktop desktop:grid-cols-4 bigDesktop:w-bigDesktop bigDesktop:grid-cols-5 gap-5 p-4' key='festivalContainer'>
        {
          festivals && festivals.map((ele: InfoI, index:number) => {

            const eleKey = ele.ORG_LINK + index.toString()

            return (
                <FestivalItem key={eleKey} info={ele}/>
            )
          })
        }
      </div>
  )
}