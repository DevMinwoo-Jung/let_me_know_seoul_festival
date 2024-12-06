'use client'

import { setCodeName, setFestivals, setPageNumber, setTotalCount } from '@/lib/festivalSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../FestivalItems/Loading';
import { useGetFestivalPerPageQuery } from '@/app/api/festival';



export default function CategoryBox() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const { startNumber, endNumber, codeName, codeCategory, title, date } = useSelector((state: any) => state.festivals);

  const toggleCategoreis = () => {
    setToggle((toggle) => !toggle)
  }

  const { data, error, isLoading } = 
  useGetFestivalPerPageQuery({start:startNumber.toString(),end:endNumber.toString(), codeName, title, date})
  

  const doSetCodeName = (param:string) => {

    if(param === '전체'){
      dispatch(setCodeName({
        codeName: " "
      }))
    } else {
      dispatch(setCodeName({
        codeName: param
      }))
    }
    dispatch(setPageNumber({currentPage:1}));
    dispatch(setFestivals({
      festivals: [],
    }));
    toggleCategoreis();
  }

  useEffect(()=>{
    if (data && data.culturalEventInfo) {
      dispatch(setTotalCount({
        totalCount: data.culturalEventInfo.list_total_count,
      }));
      dispatch(setFestivals({
        festivals: data.culturalEventInfo.row, 
      }));
    }

  }, [data, codeName, dispatch, endNumber, startNumber, title, date])

  if(isLoading){
    return <Loading/>
  }


  return (
      <div className='w-36 border-l-2 text-center font-NotoSansKR font-normal'>
      <p className='cursor-pointer m-1' onClick={toggleCategoreis}>
        {
          codeName === " " ? "전체" : codeName
        }
      </p>
      {
        toggle == true ?
          <div className='z-20 rounded-xl bg-white border-cyan-950 p-2 absolute'>
            {
              codeCategory.map((ele:string) => (
                  <p onClick={(e:any) => doSetCodeName(e.target.outerText)} className='cursor-pointer' key={ele}>{ele}</p>
                ))
            }
          </div>
        : null
      }
      </div>
  )
}
