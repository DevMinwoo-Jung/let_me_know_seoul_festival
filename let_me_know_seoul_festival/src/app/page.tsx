'use client'
import { useEffect, useState } from "react";
import { useGetFestivalPerPageQuery } from "./API/festival";

import Paging from "./Components/Paging";
import { FestivalItems } from "./Components/FestivalItems/FestivalItems";
import {  setCodeCategory, setFestivals, setGuCategory, setTotalCount } from "@/lib/festivalSlice";
import { useDispatch, useSelector } from "react-redux";
import { PerformanceI } from "./Utils/dataType";

export default function Home() {
  
  const dispatch = useDispatch();
  // Access startNumber, endNumber, and current page from Redux state
  const { startNumber, endNumber, currentPage, festivals, totalCount } = useSelector(
    (state: any) => state.festivalSlice
  );

  const { data, error, isLoading } = useGetFestivalPerPageQuery({start:startNumber.toString(),end:endNumber.toString()})
  

 useEffect(() => {
  if (data && data.culturalEventInfo && data.culturalEventInfo.row) {
    dispatch(setFestivals({
      festivals: data.culturalEventInfo.row, // API에서 받아온 데이터에 맞게 수정
    }));
    dispatch(setTotalCount({
      totalCount: data.culturalEventInfo.list_total_count,
    }));

    const gufilter = new Set();
    const codeFilter = new Set();



    dispatch(setGuCategory({
      guCategory: data.culturalEventInfo.row.forEach((ele:PerformanceI) => gufilter.add(ele.GUNAME)),
    }));

    dispatch(setCodeCategory({
      codeCategory: data.culturalEventInfo.row.forEach((ele:PerformanceI) => codeFilter.add(ele.CODENAME)),
    }));

    console.log(gufilter)
    console.log(codeFilter)
  }
}, [data,error, dispatch]); // Dependency array ensures this only runs when `data` changes

if(error) {
  console.log(error);
  return <p>Error occurred..</p>
}

if(isLoading){
  return <p>Loading...</p>
}

  return (
    <>
      <main className="block min-h-screen">
        <FestivalItems />
        <Paging/>
      </main>
    </>
  );
}

