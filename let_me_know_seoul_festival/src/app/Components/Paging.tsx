'use client'
import React, { useEffect, useState } from 'react';
import { BiFirstPage } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";

interface PaginProps {
  totalNumber: number;
}

export default function Paging({DataType}:any) {
  
  const totalCount = DataType?.value 
  ? JSON.parse(DataType.value)?.culturalEventInfo?.list_total_count
  : null;
  
  const pagingNum = 5;
  const [pageNumber, setpageNumber] = useState<any>([]);
  const [currentPage, setCurrnetPage] = useState();
  
  useEffect(() => {
    if (totalCount !== null) {
      const pageItemCount = pagingNum * 25;
      const totalPageCount = Math.ceil(totalCount / pageItemCount);

      if (pagingNum < totalPageCount) {
        const emptyArray = new Array(pagingNum).fill(null).map((_, index) => index + 1);
        setpageNumber(emptyArray);
      } else {
        const emptyArray = new Array(totalPageCount).fill(null).map((_, index) => index + 1);
        setpageNumber(emptyArray);
      }
    }
  }, [totalCount, pagingNum]);

  const setLastPage = () => {
    setpageNumber(totalCount)
  }

  const setFirstPage = () => {
    setpageNumber(1);
  }

  const setPrevPage = () => {
    setpageNumber(1);
  }

  const setNextPage = () => {
    setpageNumber(2);
  }


  return (
    <div className='flex leading-4 justify-center mt-12'>
      <BiFirstPage onClick={setFirstPage}/>
      <MdArrowBackIos/>
      {
        pageNumber.map((ele: any, index: number) => (
            <span key={index} className='mx-2'>{(index+1)}</span>
        )
      )}
      <MdArrowForwardIos/>
      <BiLastPage onClick={setLastPage}/>
    </div>
  )
}
