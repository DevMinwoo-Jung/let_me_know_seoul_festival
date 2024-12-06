import React from 'react'
import PageMode from './Page/PageMode'
import { useSelector } from 'react-redux';
import ScrollMode from './Page/ScrollMode';

export default function Paging() {

  const { isInfiniteMode } = useSelector(
    (state: any) => state.reaction
  );

  if(isInfiniteMode === 'page'){
    return <PageMode/>
  } else if (isInfiniteMode === 'scroll') {
    return <ScrollMode/>
  }

}
