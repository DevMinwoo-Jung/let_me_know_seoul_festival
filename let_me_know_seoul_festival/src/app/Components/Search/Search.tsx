'use client';

import { setFestivals, setIsEmpty, setPageNumber, setTitle, setTotalCount } from '@/lib/festivalSlice';
import React, { useCallback, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import CategoryBox from './CategoryBox';
import Loading from '../FestivalItems/Loading';
import { setborderHighlight, setshowSearchIcon } from '@/lib/reactionSlice';
import { useGetFestivalPerPageQuery } from '@/app/api/festival';
import { RootState } from '@/lib/store';
import { getKeyCodeByUserAgnet } from '@/app/Utils/common';




export default function Search() {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const [cancelBtn, setCancelBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const { startNumber, endNumber, codeName, title, date } = useSelector(
    (state: RootState) => state.festivals
  );

  const { data, error, isLoading } = 
  useGetFestivalPerPageQuery({start:startNumber.toString(),end:endNumber.toString(), codeName, title, date})

  const clearInput = () => {
    setKeyword(" ");
    setCancelBtn(false);
  }

  const keywordDispatch = (param:string) => {

      setKeyword(param);
      
      if(param.length >= 1){
        setCancelBtn(true);
      } else {
        setCancelBtn(false);
      }
  }

  
  const { borderHighlight, showSearchIcon } = useSelector((state: RootState) => state.reaction);


  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {

    let enterKeyCode = getKeyCodeByUserAgnet();
    alert((e.target as HTMLInputElement).value)
    alert(enterKeyCode)
    if (Number(e.code) === enterKeyCode || e.code === 'Enter') {
      setIsSubmit(true);
      dispatch(setTitle({
        title: (e.target as HTMLInputElement).value, 
      }));
      dispatch(setPageNumber({currentPage:1}));       
    }
  };


  const setHighlight = useCallback(() => {
    dispatch(setborderHighlight({
      borderHighlight: true, 
    }));
    dispatch(setshowSearchIcon({
      showSearchIcon: false, 
    }));
  }, [borderHighlight, showSearchIcon])

  const removeHighlight = useCallback(() => {
    dispatch(setborderHighlight({
      borderHighlight: false,
    }));
    dispatch(setshowSearchIcon({
      showSearchIcon: true, 
    }));
  }, [borderHighlight, showSearchIcon])

 useEffect(() => {
  if(isSubmit){
    if (data && data.culturalEventInfo && data.culturalEventInfo.row) {
      dispatch(setFestivals({
        festivals: data.culturalEventInfo.row, // API에서 받아온 데이터에 맞게 수정
      }));
      dispatch(setTotalCount({
        totalCount: data.culturalEventInfo.list_total_count,
      }));
      dispatch(setIsEmpty({
        isEmpty: false,
      }));    
    } else {
        dispatch(setFestivals({
          festivals: [], 
        }));
        dispatch(setTotalCount({
          totalCount: 0,
        }));
        dispatch(setIsEmpty({
          isEmpty: true,
        }));       
    }
  }

}, [isSubmit]); 

if(isLoading){
  return <Loading/>
}

  return (
    <div
        className="w-screen flex justify-center leading-9"
        onClick={setHighlight}
        onMouseEnter={setHighlight}
        onMouseLeave={removeHighlight}
      > 
      <div className={`w-search h-14 flex -mt-8 rounded-xl bg-white z-10 p-2 dark:bg-slate-700 
      ${borderHighlight ? 'border-2 border-indigo-500/50' : ''}`}>
        <div className='w-full focus:border-2 flex'>
          <div className='w-1/6'>
            {
              showSearchIcon ? <IoIosSearch className='w-6 h-8'/> : ''
            }
          </div>
          <input type="text" value={keyword} name="" id="" className='w-4/6 rounded-xl h-full focus:outline-none focus:border-none focus:shadow-none dark:bg-slate-700'
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
