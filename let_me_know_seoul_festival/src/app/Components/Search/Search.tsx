'use client';
import { useGetFestivalPerPageQuery } from '@/app/API/festival';
import { setFestivals, setTitle, setTotalCount } from '@/lib/festivalSlice';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import CategoryBox from './CategoryBox';


export default function Search() {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const [cancelBtn, setCancelBtn] = useState(false);
  
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

  const clearInput = () => {
    setKeyword("");
    setCancelBtn(false);
    activeButton();
  }

  const keywordDispatch = (param:string) => {

      setKeyword(param);

      dispatch(setTitle({
        title: param, // API에서 받아온 데이터에 맞게 수정
      }));

      if(param.length >= 1){
        setCancelBtn(true);
      } else {
        setCancelBtn(false);
      }
  }

  const { startNumber, endNumber, codeName } = useSelector((state: any) => state.festivals);

  // Function to update the query parameters and trigger the query
  const activeButton = () => {
    setQueryParams({ start: startNumber.toString(), end: endNumber.toString(),  codeName, title: keyword });
  };

  const activeEnter = (e: any) => {
    if (e.key === 'Enter') {
      activeButton();
    }
  };
  

 useEffect(() => {
  if (data && data.culturalEventInfo && data.culturalEventInfo.row) {
    dispatch(setFestivals({
      festivals: data.culturalEventInfo.row, // API에서 받아온 데이터에 맞게 수정
    }));
    dispatch(setTotalCount({
      totalCount: data.culturalEventInfo.list_total_count,
    }));
  }
}, [data,error, dispatch]); // Dependency array ensures this only runs when `data` changes

  return (
    <div className='w-screen flex justify-center leading-9'>
      <div className='w-search h-14 flex -mt-8 rounded-xl bg-white z-10 p-2'>
        <div className='w-full focus:border-2 flex'>
          <div className='w-1/6'>
            <IoIosSearch className='w-6 h-8'/>
          </div>
          <input type="text" value={keyword} name="" id="" className='w-4/6 rounded-xl h-full focus:outline-none focus:border-none focus:shadow-none'
              onChange={(e) => keywordDispatch(e.target.value)}
              onKeyDown={(e) => activeEnter(e)}
          />
          <div className='w-6'>
            {
              cancelBtn === true ? <p className='cursor-pointer' onClick={clearInput}>X</p> : null
            }
          </div>
        </div>
        <CategoryBox/>
      </div>
    </div>
  )
}
