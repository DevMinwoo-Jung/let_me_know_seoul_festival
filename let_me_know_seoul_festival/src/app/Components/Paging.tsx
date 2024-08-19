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
  const [pageNumber, setpageNumber] = useState<any>([]);
  const [currentPage, setCurrnetPage] = useState(1);
  const pageItemCount = pagingNum * pagePerSize;
  const totalPageCount = Math.ceil(totalCount / pageItemCount);

  useEffect(() => {
    if (totalCount !== null) {
      if (pagingNum < totalPageCount) {
        const emptyArray = new Array(pagingNum).fill(null).map((_, index) => index + 1);
        setpageNumber(emptyArray);
      } else {
        const emptyArray = new Array(totalPageCount).fill(null).map((_, index) => index + 1);
        setpageNumber(emptyArray);
      }
    }
  }, [totalCount, totalPageCount]);

  const setLastPage = () => {
    setpageNumber(totalPageCount)
  }

  const setFirstPage = (event:any) => {
    setCurrnetPage(event.current.value);
  }

  const setPrevPage = () => {
    if(currentPage - pagingNum > 0){
      setCurrnetPage(currentPage - pagingNum);
    }
  }

  const setNextPage = () => {
    if(currentPage + pagingNum < totalPageCount){
      setCurrnetPage(currentPage + pagingNum);
    }
  }

  const setCurrnetPageNumber = (event:any) => {
    setCurrnetPage(() => Number(event.target.innerHTML));
    console.log(currentPage);
  }


  return (
    <>
      <div className='flex leading-4 justify-center mt-12'>
        <BiFirstPage className='cursor-pointer' onClick={setFirstPage}/>
        <MdArrowBackIos className='cursor-pointer' onClick={setPrevPage}/>
        {
          pageNumber.map((ele: any, index: number) => (
              currentPage === (index + 1) 
              ? <><span key={index} className='mx-2 font-extrabold cursor-pointer' onClick={setCurrnetPageNumber}>{(index+1)}</span></> 
              : <><span key={index} className='mx-2 cursor-pointer' onClick={setCurrnetPageNumber}>{(index+1)}</span></>
          )
        )}
        <MdArrowForwardIos className='cursor-pointer' onClick={setNextPage}/>
        <BiLastPage className='cursor-pointer' onClick={setLastPage}/>
      </div>
    </>
  )
}
