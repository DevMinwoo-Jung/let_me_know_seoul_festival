'use client'
import React, { useEffect, useState } from 'react';
import { BiFirstPage } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setEndNumber, setFestivals, setPageNumber, setStartNumber, setTotalCount } from '@/lib/festivalSlice';
import { useGetFestivalPerPageQuery } from '@/app/api/festival';
import Loading from '../FestivalItems/Loading';
import { RootState } from '@/lib/store';

export default function PageMode() {

  const pagingNum = 5;

  const { startNumber, endNumber, codeName, title, date, totalCount, currentPage } = useSelector(
    (state: RootState) => state.festivals
  );
  
  const [pageArray, setPageArray] = useState<any>([]);
  const totalPageCount = Math.ceil(totalCount / 25);

  const dispatch = useDispatch();
  
  const { data, error, isLoading } = 
  useGetFestivalPerPageQuery({start:startNumber.toString(),end:endNumber.toString(), codeName, title, date})
  
  useEffect(() => {
    if (data && data.culturalEventInfo && data.culturalEventInfo.row) {
      dispatch(setFestivals({
        festivals: data.culturalEventInfo.row, // API에서 받아온 데이터에 맞게 수정
      }));
      dispatch(setTotalCount({
        totalCount: data.culturalEventInfo.list_total_count,
      }));
      if(localStorage.getItem('festivals')){
        localStorage.removeItem('festivals');
        localStorage.setItem('festivals', JSON.stringify(data.culturalEventInfo.row))
      } else {
        localStorage.setItem('festivals', JSON.stringify(data.culturalEventInfo.row))
      }
    }
  }, [data, error]);
    
  useEffect(() => {

    const newStart = (currentPage - 1) * 25 + 1; // Assuming 25 items per page
    const newEnd = currentPage * 25;
      
    if (totalCount > 0) {
      if(totalPageCount < 5){
        setPageArray([...[], ... Array.from({ length: totalPageCount }, (_, i) => 1 + i)]);
      } else {
        if(!pageArray.includes(currentPage))
          if(currentPage >= totalPageCount - 4){
            setPageArray([...[], ... Array.from({ length: pagingNum }, (_, i) => (totalPageCount - 4) + i)]);
          } else {
            setPageArray([...[], ... Array.from({ length: pagingNum }, (_, i) => currentPage + i)]);
          }
      }  
    }
    dispatch(setPageNumber({ currentPage }));
    dispatch(setStartNumber({ startNumber: newStart }));
    dispatch(setEndNumber({ endNumber: newEnd }));
    
  }, [currentPage, totalCount, totalPageCount, dispatch]);

  const setLastPage = () => {
    dispatch(setPageNumber({currentPage: totalPageCount}));
  }

  const setFirstPage = () => {
    dispatch(setPageNumber({currentPage:1}));
  }

  const setPrevPage = () => {
    if(pageArray[4] - pagingNum > 0){
      if(currentPage - pagingNum < 0) {
        dispatch(setPageNumber({currentPage:1}));
      } else {
        dispatch(setPageNumber({currentPage:currentPage - pagingNum}));
      }
    } else {
      dispatch(setPageNumber({currentPage:1}));
    }
  }

  const setNextPage = () => {
    if(pageArray[0] + pagingNum < totalPageCount){
      dispatch(setPageNumber({currentPage:pageArray[0] + pagingNum}));
    }
    
  }

  const setCurrnetPageNumber = (event:any) => {
    dispatch(setPageNumber({currentPage: Number(event.target.innerHTML)}));
  }


  if(error) {
    return <><p>Error occurred..</p></>;
  }

  if(isLoading){
    return <Loading/>;
  }


  return (
    <div className='relative min-w-full h-14'> 
        <div className='m-auto max-w-80 min-w-60 flex leading-3 justify-evenly top-1/3 left-1/2'>
          <BiFirstPage className='cursor-pointer' onClick={setFirstPage}/>
          <MdArrowBackIos className='cursor-pointer' onClick={setPrevPage}/>
          {
            pageArray.map((ele: number, index: number) => (
              currentPage === ele 
                ? <span key={index} className='mx-2 font-extrabold cursor-pointer' onClick={setCurrnetPageNumber}>{ele}</span>
                : <span key={index} className='mx-2 cursor-pointer' onClick={setCurrnetPageNumber}>{ele}</span>
            ))
          }
          <MdArrowForwardIos className='cursor-pointer' onClick={setNextPage}/>
          <BiLastPage className='cursor-pointer' onClick={setLastPage}/>
        </div>
    </div>
  )
}

