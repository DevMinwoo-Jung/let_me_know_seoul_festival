'use client';

import { setFestivals, setIsEmpty, setPageNumber, setTitle, setTotalCount } from '@/lib/festivalSlice';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import CategoryBox from './CategoryBox';
import Loading from '../FestivalItems/Loading';
import { setborderHighlight, setshowSearchIcon } from '@/lib/reactionSlice';
import { useGetFestivalPerPageQuery } from '@/app/api/festival';


export default function Search() {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const [cancelBtn, setCancelBtn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const { startNumber, endNumber, codeName, title, date } = useSelector(
    (state: any) => state.festivals
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

  
  const { borderHighlight, showSearchIcon } = useSelector((state: any) => state.reaction);


  const activeEnter = (e: any) => {
    if (e.key === 'Enter') {
      setIsSubmit(true);
      dispatch(setTitle({
        title: e.target.value, 
      }));
      dispatch(setPageNumber({currentPage:1}));       
    }
  };


  const setHighlight = (e:any) => {
    dispatch(setborderHighlight({
      borderHighlight: true, 
    }));
    dispatch(setshowSearchIcon({
      showSearchIcon: false, 
    }));
  }

  const removeHighlight = (e:any) => {
    dispatch(setborderHighlight({
      borderHighlight: false,
    }));
    dispatch(setshowSearchIcon({
      showSearchIcon: true, 
    }));
  }

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

}, [data, dispatch, isSubmit]); // Dependency array ensures this only runs when `data` changes

if(isLoading){
  return <Loading/>
}

  return (
    <div
        className="w-screen flex justify-center leading-9"
        onClick={(e) => setHighlight(e)}
        onMouseEnter={(e) => setHighlight(e)}
        onMouseLeave={(e) => removeHighlight(e)}
      > 
      <div className={`w-search h-14 flex -mt-8 rounded-xl bg-white z-10 p-2  ${
          borderHighlight ? 'border-2 border-indigo-500/50' : ''
        }`}>
        <div className='w-full focus:border-2 flex'>
          <div className='w-1/6'>
            {
              showSearchIcon ? <IoIosSearch className='w-6 h-8'/> : ''
            }
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
