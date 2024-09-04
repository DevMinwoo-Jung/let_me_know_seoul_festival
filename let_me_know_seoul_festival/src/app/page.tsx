'use client'
import { useEffect, useState } from "react";
import { useGetFestivalPerPageQuery } from "./API/festival";

import Paging from "./Components/Paging";
import { FestivalItems } from "./Components/FestivalItems/FestivalItems";
import { setFestivals } from "@/lib/festivalSlice";
import { useDispatch } from "react-redux";

export default function Home() {

  
  const { data, error, isLoading } = useGetFestivalPerPageQuery({start:"1",end:"25"})
  
  const dispatch = useDispatch();

 useEffect(() => {
  if (data && data.culturalEventInfo && data.culturalEventInfo.row) {
    dispatch(setFestivals({
      festivals: data.culturalEventInfo.row, // API에서 받아온 데이터에 맞게 수정
      totalCount: data.culturalEventInfo.list_total_count,
    }));
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
        {/* <Paging DataType={test} /> */}
      </main>
    </>
  );
}

