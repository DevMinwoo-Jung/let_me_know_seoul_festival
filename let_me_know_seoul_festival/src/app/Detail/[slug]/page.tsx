import { PerformanceI } from "@/app/Utils/dataType";
import Image from "next/image";
import Link from "next/link";
import DetailInfo from "./DetailInfo";
import { FaHome } from "react-icons/fa";
import { SERVICEKEY } from "@/app/API/festivalEndPoint";

export async function generateStaticParams() {
 
  try {
    const festivals = await fetch(`http://openapi.seoul.go.kr:8088/${SERVICEKEY}/json/culturalEventInfo/1/25`)
      .then((res) => res.json());

    if (!festivals || !festivals.culturalEventInfo || festivals.culturalEventInfo.length === 0) {
      return [{ slug: 'not-found' }];
    }

    return festivals.culturalEventInfo.row.map((festival: PerformanceI) => ({
      slug: festival.TITLE,
    }));
  } catch (error) {
    console.error("Failed to fetch festival data:", error);
    return [{ slug: 'not-found' }];
  }

}


export default async function DetailPage({params}:any) {
  
  const festivalsFetch = await fetch(`http://openapi.seoul.go.kr:8088/48504d46446d696e373365494c7848/json/culturalEventInfo/1/25/ /${(params.slug)}`)
  .then((res) => res.json());

  console.log(festivalsFetch)
  
  if(festivalsFetch.culturalEventInfo.list_total_count !== 1){
    return '없음'
  }
  

  // const festivalDetail = festivalsFetch.culturalEventInfo.row.find(
  //   (festival: PerformanceI) => festival.TITLE === decodeURI(params.slug)
  // );

  const festivalDetail = festivalsFetch.culturalEventInfo.row[0];
  
    
    const {  GUNAME, TITLE, DATE, MAIN_IMG, ORG_LINK, IS_FREE, RGSTDATE, 
        PLACE, ORG_NAME, USE_TRGT, USE_FEE, PLAYER, PROGRAM, ETC_DESC, 
    	} = festivalDetail;

    return (
      <> 
        <div className="w-screen h-detailPage">
          <div className="w-3/4 flex m-auto">
            <Image className='m-auto' src={MAIN_IMG} alt={MAIN_IMG} width={450} height={500}/>                
            <div className='w-1/2 h-full mx-4 mt-0' key={MAIN_IMG}>
              <div className="mt-8 mb-8 text-3xl font-bold">
                <span>{TITLE}</span>
              </div>
              <DetailInfo title={"기간"} desc={DATE}/>
              <DetailInfo title={"구"} desc={GUNAME}/>
              <DetailInfo title={"장소"} desc={PLACE}/>
              <DetailInfo title={"유/무료"} desc={IS_FREE}/>
              <DetailInfo title={"가격"} desc={USE_FEE}/>
              <DetailInfo title={"등록일"} desc={RGSTDATE}/>
              <DetailInfo title={"기관명"} desc={ORG_NAME}/>
              <DetailInfo title={"연령층"} desc={USE_TRGT}/>
              <DetailInfo title={"유/무료"} desc={PLAYER}/>
              <DetailInfo title={"프로그램"} desc={PROGRAM}/>
              <DetailInfo title={"설명"} desc={ETC_DESC}/>
              <div className="flex">
                <Link href={ORG_LINK} target='new'>
                  홈페이지 가기
                </Link>
                <FaHome className="ml-3 text-2xl"/>
              </div>
            </div>
          </div>
        </div>  
      </>
    );
}