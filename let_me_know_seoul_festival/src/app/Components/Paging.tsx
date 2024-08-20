'use client'
import React, { useEffect, useState } from 'react';
import { BiFirstPage } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";

export default function Paging({DataType}:any) {
  
  const totalCount = DataType?.value 
  ? JSON.parse(DataType.value)?.culturalEventInfo?.list_total_count
  : null;
  
  const pagingNum = 5;
  const pagePerSize = 25;
  const [pageArray, setPageArray] = useState<any>([]);
  const [currentPage, setCurrnetPage] = useState(1);
  const pageItemCount = pagingNum * pagePerSize;
  const totalPageCount = Math.ceil(totalCount / pageItemCount);
  
  useEffect(() => {
    if(pageArray.includes(currentPage)){
      return;
    }

    if (totalCount > 0) {
      if(totalPageCount <= 5){
        setPageArray([...[], ... Array.from({ length: totalPageCount }, (_, i) => currentPage + i)]);
      } else {
        setPageArray([...[], ... Array.from({ length: pagingNum }, (_, i) => currentPage + i)]);
      }
    }
  }, [currentPage, totalCount, totalPageCount,pageArray]);

  const setLastPage = () => {
    setCurrnetPage(totalPageCount - 4);
  }

  const setFirstPage = () => {
    setCurrnetPage(1);
  }

  const setPrevPage = () => {
    if(currentPage - pagingNum > 0){
      setCurrnetPage(pageArray[0]   - pagingNum);
    }
  }

  const setNextPage = () => {
    if(currentPage + pagingNum < totalPageCount){
      setCurrnetPage(pageArray[0] + pagingNum);
    }
  }

  const setCurrnetPageNumber = (event:any) => {
    setCurrnetPage(() => Number(event.target.innerHTML));
  }


  return (
    <>
      <div className='flex leading-4 justify-center mt-12'>
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
    </>
  )
}
