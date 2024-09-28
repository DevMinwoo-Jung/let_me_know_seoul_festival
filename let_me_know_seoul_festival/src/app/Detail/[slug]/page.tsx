'use client'
import { PerformanceI } from "@/app/Utils/dataType";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import DetailInfo from "./detailInfo";


export default function DetailPage() {
    const { slug } = useParams();

    console.log(slug)

    const { festivals } = useSelector(
      (state: any) => state.festivals
    );

    const festivalDetail = festivals.filter((festival:PerformanceI) => festival.HMPG_ADDR.slice(festival.HMPG_ADDR.lastIndexOf('cultcode') + 9, festival.HMPG_ADDR.indexOf('&')) === slug)[0]
    
    const { GUNAME, TITLE, DATE, MAIN_IMG, ORG_LINK, IS_FREE, THEMECODE, TICKET, RGSTDATE, 
      HMPG_ADDR, PLACE, ORG_NAME, USE_TRGT, USE_FEE, PLAYER, PROGRAM, ETC_DESC, 
    	 } = festivalDetail;

    return (
      <> 
        <div className="w-screen h-screen">
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
              <DetailInfo title={"티멧"} desc={TICKET}/>
              <DetailInfo title={"등록일"} desc={RGSTDATE}/>
              <DetailInfo title={"기관명"} desc={ORG_NAME}/>
              <DetailInfo title={"연령층"} desc={USE_TRGT}/>
              <DetailInfo title={"유/무료"} desc={PLAYER}/>
              <DetailInfo title={"프로그램"} desc={PROGRAM}/>
              <DetailInfo title={"설명"} desc={ETC_DESC}/>
              <div>
                <Link href={ORG_LINK} target='new'>
                  홈페이지 가기
                </Link>
              </div>
            </div>
          </div>
        </div>  
      </>
    );
}