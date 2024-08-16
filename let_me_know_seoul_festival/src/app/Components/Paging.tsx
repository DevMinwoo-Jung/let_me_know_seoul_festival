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
  
  const pagingTest = DataType?.value 
  ? JSON.parse(DataType.value)?.culturalEventInfo?.list_total_count
  : null;
  
  const pagingNum = 5;
  const [pageNumber, setpageNumber] = useState<any>([1,2,3,4,5]);
  const [currentPage, setCurrnetPage] = useState();
  
  useEffect(()=>{
    if(pagingNum < pagingTest) {
 
    }

  }, [pageNumber])

  const setLastPage = () => {
    setpageNumber(pagingTest)
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
    <div className='flex leading-4'>
      <BiFirstPage onClick={setFirstPage}/>
      <MdArrowBackIos/>
      {
        pageNumber && pageNumber.map((ele: any, index: number)=> {
          return (
            <span key={index} className='mx-2'>{(index+1)}</span>
          )
        })
      }
      <MdArrowForwardIos/>
      <BiLastPage onClick={setLastPage}/>
    </div>
  )
}
