'use client'
import Image from "next/image";
import Link from "next/link";
import DetailInfo from "./DetailInfo";
import { FaHome } from "react-icons/fa";

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

import kakaoIcon from '@/asset/kakaomap_basic.png'
import naverIcon from '@/asset/Map_Service_Icon.png'

export default function DetailPage() {

  let { festivals } = useSelector((state: any) => state.festivals);

  if(festivals.length === 0){
    festivals = JSON.parse(localStorage.getItem('festivals')!);
  }

  const router = useParams();
  const { slug } = router;


  const festivalDetail = festivals.filter((ele:any) => ele.HMPG_ADDR.slice((ele.HMPG_ADDR.lastIndexOf('cultcode') + 9), ele.HMPG_ADDR.indexOf('&')) === slug)[0];

  
    const {  GUNAME, TITLE, DATE, MAIN_IMG, ORG_LINK, IS_FREE, RGSTDATE, 
        PLACE, ORG_NAME, USE_TRGT, USE_FEE, PLAYER, PROGRAM, ETC_DESC, LAT, LOT
    	} = festivalDetail;

    return (
        <div className="w-screen h-detailPage">
          <div className="mobile:w-4/5 w-3/4 laptop:flex m-auto mobile:block">
            <Image className='m-auto' src={MAIN_IMG} alt={MAIN_IMG} width={450} height={500}/>                
            <div className='mobile:w-full laptop:w-1/2 h-full mobile:mx-1 laptop:mx-4 mt-0' key={MAIN_IMG}>
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
              <div className="flex w-full pb-6">
                <span className="w-1/3">홈페이지 가기</span>
                <Link href={ORG_LINK} target='new'>
                  <FaHome className="w-[35px] h-[35px] text-2xl m-auto cursor-pointer"/>    
                </Link>
              </div>
              <div className="flex w-full pb-6">
                <span className="w-1/3">카카오 지도로 길 찾기</span>
                <Link href={`https://map.kakao.com/link/map/${PLACE},${LAT},${LOT}`} target='new'>
                <Image className="m-auto cursor-pointer" src={kakaoIcon} alt={"kakao"} width={35} height={35}/>
                </Link>
              </div>
              <div className="flex w-full pb-6">
                <span className="w-1/3">네이버 지도로 길 찾기</span>
                <Link href={`https://map.naver.com?lng=${LOT}&lat=${LAT}&title=${PLACE}`} target='new'>
                  <Image className="m-auto cursor-pointer" src={naverIcon} alt={"naver"} width={35} height={35}/>    
                </Link>
              </div>
            </div>
          </div>
        </div>  
    );
}