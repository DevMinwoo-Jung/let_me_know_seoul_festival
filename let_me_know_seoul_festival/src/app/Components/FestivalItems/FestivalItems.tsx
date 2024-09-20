import React from 'react'
import { useSelector } from 'react-redux';
import FestivalItem from './FestivalItem';
import { InfoI } from '@/app/Utils/dataType';

export function FestivalItems() {
  
  const { festivals } = useSelector((state: any) => state.festivals);

  return (
    <div className='grid lg:grid-cols-3 max-xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-4'>
      {
        festivals && festivals.map((ele: InfoI) => {
      
          return (
            <>
              <FestivalItem key={ele.MAIN_IMG} info={ele}/>
            </>
          )
        })
      }
    </div>
  )
}