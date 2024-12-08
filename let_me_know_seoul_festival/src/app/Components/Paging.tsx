import React from 'react'
import PageMode from './Page/PageMode'
import { useSelector } from 'react-redux';
import ScrollMode from './Page/ScrollMode';

export default function Paging() {

  const { isInfiniteMode } = useSelector(
    (state: any) => state.reaction
  );

  return(
    <>
      {
        isInfiniteMode === 'page' ? <PageMode/> : <ScrollMode/>
      }
    </>
  )

}
