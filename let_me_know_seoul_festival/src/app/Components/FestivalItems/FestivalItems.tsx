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
    <>
      <div className='grid laptop:grid-cols-3 desktop:grid-cols-4 bigDesktop:grid-cols-5 gap-5 p-4' key={Math.random()}>
        {
          festivals && festivals.map((ele: InfoI) => {
            return (
                <FestivalItem key={ele.ORG_LINK} info={ele}/>
            )
          })
        }
      </div>
    </>
  )
}