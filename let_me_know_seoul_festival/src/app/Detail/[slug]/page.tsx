'use client'
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";


export default function DetailPage() {
    const { slug } = useParams();

    console.log(slug)

    const { festivals } = useSelector(
      (state: any) => state.festivalSlice
    );

    const festivalDetail = festivals.filter((festival:any) => festival.HMPG_ADDR.slice(festival.HMPG_ADDR.lastIndexOf('cultcode') + 9, festival.HMPG_ADDR.indexOf('&')) === slug)[0]
    console.log(festivalDetail);
    const { CODENAME, GUNAME, TITLE, DATE, MAIN_IMG, ORG_LINK } = festivalDetail;

    return (
      <>   
        <div className='w-96 h-96 mt-6 mb-6' key={MAIN_IMG}>
          <Image className='m-auto' src={MAIN_IMG} alt={MAIN_IMG} width={208} height={240}/>                
          <div>
            <span>{CODENAME}</span>
            <span>{GUNAME}</span>
          </div>
          <div>
            <span>{TITLE}</span>
            <span>{DATE}</span>
          </div>
          <div>
            <Link href={ORG_LINK} target='new'>
              홈페이지 가기
            </Link>
          </div>
        </div>
      </>
    );
}