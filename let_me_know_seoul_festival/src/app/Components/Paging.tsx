import React from 'react'
import PageMode from './Page/PageMode'
import { useSelector } from 'react-redux';
import ScrollMode from './Page/ScrollMode';
import { Reaction } from '@/lib/reactionSlice';
import { RootState } from '@/lib/store';

export default function Paging() {

  const { isInfiniteMode } = useSelector(
    (state:RootState) => state.reaction
  );

  return isInfiniteMode === 'page' ? <PageMode/> : <ScrollMode/>

}
