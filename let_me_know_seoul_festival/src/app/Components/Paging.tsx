'use client'
import React, { useEffect, useState } from 'react';
import { BiFirstPage } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { BiLastPage } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setEndNumber, setPageNumber, setStartNumber } from '@/lib/festivalSlice';

export default function Paging({DataType}:any) {
  
  const { totalCount, startNumber, endNumber, currentPage  } = useSelector((state: any) => state.festivalSlice);
  
  const pagingNum = 5;
  const pagePerSize = 25;
  const [pageArray, setPageArray] = useState<any>([]);
  const pageItemCount = pagingNum * pagePerSize;
  const totalPageCount = Math.ceil(totalCount / pageItemCount);


  const dispatch = useDispatch();
  
  useEffect(() => {
    const newStart = (currentPage - 1) * 25 + 1; // Assuming 25 items per page
    const newEnd = currentPage * 25;
  
    dispatch(setPageNumber({ currentPage }));
    dispatch(setStartNumber({ startNumber: newStart }));
    dispatch(setEndNumber({ endNumber: newEnd }));

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
  }, [currentPage, totalCount, totalPageCount, pageArray, dispatch]);

  const setLastPage = () => {
    dispatch(setPageNumber({currentPage: totalPageCount - 4}));
  }

  const setFirstPage = () => {
    dispatch(setPageNumber({currentPage:1}));
  }

  const setPrevPage = () => {
    if(currentPage - pagingNum > 0){
      dispatch(setPageNumber({currentPage:pageArray[0] - pagingNum}));
    }
  }

  const setNextPage = () => {
    if(currentPage + pagingNum < totalPageCount){
      dispatch(setPageNumber({currentPage:pageArray[0] + pagingNum}));
    }
  }

  const setCurrnetPageNumber = (event:any) => {
    dispatch(setPageNumber({currentPage: Number(event.target.innerHTML)}));
  }


  return (
      <div className='w-60 flex leading-4 justify-evenly mx-auto mt-12'>
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
  )
}
