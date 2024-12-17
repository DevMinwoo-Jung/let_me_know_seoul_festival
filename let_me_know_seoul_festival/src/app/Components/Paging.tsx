'use client'
import React, { useEffect } from 'react'
import PageMode from './Page/PageMode'
import { useDispatch, useSelector } from 'react-redux';
import ScrollMode from './Page/ScrollMode';
import { RootState } from '@/lib/store';
import { getScrollType, setIsInfiniteMode } from '@/lib/reactionSlice';

export default function Paging() {

  const { isInfiniteMode } = useSelector(
    (state:RootState) => state.reaction
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsInfiniteMode({
      isInfiniteMode: getScrollType(), 
    }))
  }, [])

  return isInfiniteMode === 'page' ? <PageMode/> : <ScrollMode/>

}
