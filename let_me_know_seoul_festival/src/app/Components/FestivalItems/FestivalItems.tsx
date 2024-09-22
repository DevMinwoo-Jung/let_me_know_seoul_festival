import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import FestivalItem from './FestivalItem';
import { InfoI } from '@/app/Utils/dataType';
import Loading from './Loading';

export function FestivalItems() {
  
  const { festivals } = useSelector((state: any) => state.festivals);

  return (
    <div className='grid laptop:grid-cols-3 desktop:grid-cols-4 bigDesktop:grid-cols-5 gap-5 p-4' key={Math.random()}>
      {
        festivals && festivals.map((ele: InfoI) => {
      
          return (
            <>
              <Suspense fallback={<Loading/>}>
                <FestivalItem key={ele.MAIN_IMG} info={ele}/>
              </Suspense>
            </>
          )
        })
      }
    </div>
  )
}