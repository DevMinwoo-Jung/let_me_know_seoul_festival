'use client';
import { useGetFestivalPerPageQuery } from '@/app/API/festival';
import { setFestivals, setTitle, setTotalCount } from '@/lib/festivalSlice';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';


export default function Search() {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
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

  const keywordDispatch = (param:string) => {
      dispatch(setTitle({
        title: param, // API에서 받아온 데이터에 맞게 수정
      }));
  }

  const { startNumber, endNumber, codeName, title, date } = useSelector((state: any) => state.festivals);

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
    <div className='w-screen flex justify-center'>
      <div className='w-search h-14 flex -mt-8 rounded-xl bg-white z-10 border-2 border-cyan-950'>
        <div className='w-1/5'>
          <IoIosSearch/>
        </div>
        <div className='w-3/4 rounded-xl hover:border-y-cyan-70'>         
          <input type="text" name="" id="" className='rounded-xl w-3/4 h-full'
            onChange={(e) => keywordDispatch(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
          />
        </div>
        <div className='w-1/4'>
          이거는 버튼이여
        </div>
      </div>
    </div>
  )
}
