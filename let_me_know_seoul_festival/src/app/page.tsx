'use client'
import { useEffect } from "react";
import Paging from "./Components/Paging";
import { FestivalItems } from "./Components/FestivalItems/FestivalItems";
import { useDispatch, useSelector } from "react-redux";
import { setFestivals, setTotalCount } from "@/lib/festivalSlice";
import Search from "./Components/Search/Search";
import Loading from "./Components/FestivalItems/Loading";
import { useGetFestivalPerPageQuery } from "@/app/api/festival";

export default function Home() {
  
  const dispatch = useDispatch();
  const { startNumber, endNumber, codeName, title, date } = useSelector(
    (state: any) => state.festivals
  );

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
}, [data,error, dispatch]);

if(error) {
  return <><p>Error occurred..</p></>;
}

if(isLoading){
  return <Loading/>;
}

  return (
      <div className="block h-maingPage">
        <Search/>
        <FestivalItems />
        <Paging/>
      </div>
  );
}

