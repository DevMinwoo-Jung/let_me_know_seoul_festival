'use client'
import { useGetFestivalPerPageQuery } from '@/app/API/festival';
import { setCodeCategory, setCodeName, setTotalCount } from '@/lib/festivalSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function CategoryBox() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const { startNumber, endNumber, codeName, codeCategory, title, date } = useSelector((state: any) => state.festivals);

  const toggleCategoreis = () => {
    setToggle((toggle) => !toggle)
  }

  const [queryParams, setQueryParams] = useState<{ start: string; end: string; title?: string; codeName?: string; date?: string }>({
    start: '1',
    end: '25',
  });

  const { data, error, isLoading } = useGetFestivalPerPageQuery({
    start: queryParams.start,
    end: queryParams.end,
    title: queryParams.title,
    codeName: queryParams.codeName,
    date: queryParams.date
  });

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

    toggleCategoreis()
  }

  useEffect(()=>{
    setQueryParams({ start: startNumber.toString(), end: endNumber.toString(), codeName, title, date });
    if (data && data.culturalEventInfo) {
      console.log('여기 안온다고?')
      dispatch(setTotalCount({
        totalCount: data.culturalEventInfo.list_total_count,
      }));
    }

  }, [data, codeName, dispatch, endNumber, startNumber, title, date])


  return (
    <>
      <div className='w-36 border-l-2 text-center'>
      <p className='cursor-pointer m-1' onClick={toggleCategoreis}>
        {
          codeName === " " ? "전체" : codeName
        }
      </p>
      
      {
        toggle == true ?
        <>
          <div className='z-20 rounded-xl bg-white border-cyan-950 p-2 absolute'>
            {
              codeCategory.map((ele:string) => (
                  <p onClick={(e:any) => doSetCodeName(e.target.outerText)} className='cursor-pointer' key={ele}>{ele}</p>
                ))
            }
          </div>
        </>  
        : null
      }
      </div>
    </>
  )
}
