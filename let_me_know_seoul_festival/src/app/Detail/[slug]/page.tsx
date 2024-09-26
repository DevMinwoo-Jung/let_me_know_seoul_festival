'use client'
import { PerformanceI } from "@/app/Utils/dataType";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";


export default function DetailPage() {
    const { slug } = useParams();

    console.log(slug)

    const { festivals } = useSelector(
      (state: any) => state.festivals
    );

    const festivalDetail = festivals.filter((festival:PerformanceI) => festival.HMPG_ADDR.slice(festival.HMPG_ADDR.lastIndexOf('cultcode') + 9, festival.HMPG_ADDR.indexOf('&')) === slug)[0]
    
    const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG, ORG_LINK, IS_FREE, THEMECODE, TICKET, RGSTDATE, 
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
              <div className="text-lg flex">
                <div>
                  <p>기간</p>
                  <p>{DATE}</p>
                </div>
              </div>
              <div className="text-lg flex">
                  <p>장소</p>
                  <p>{GUNAME}</p>
                  <p></p>
                  <p>{CODENAME}</p>
                </div>
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