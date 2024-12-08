'use client';

import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFestivalPerPageQuery } from '@/app/api/festival';
import {
  setEndNumber,
  setFestivals,
  setPageNumber,
  setStartNumber,
  setTotalCount,
} from '@/lib/festivalSlice';

export default function InfiniteScrollLogic() {
  const dispatch = useDispatch();
  const { 
    festivals, 
    startNumber, 
    endNumber, 
    codeName, 
    currentPage, 
    title, 
    date, 
    totalCount 
  } = useSelector((state: any) => state.festivals);
  
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  
  const queryParams = useMemo(
    () => ({
      start: startNumber.toString(),
      end: endNumber.toString(),
      codeName,
      title,
      date,
    }),
    [startNumber, endNumber, codeName, title, date]
  );
  
  const { data, isLoading, isFetching } = useGetFestivalPerPageQuery(queryParams, {
    skip: festivals.length >= totalCount // Prevent unnecessary fetches
  });
  
  useEffect(() => {
    if (data && data.culturalEventInfo && !isLoading) {
      const newFestivals = data.culturalEventInfo.row || [];
  
      if (currentPage === 1) {
        dispatch(
          setTotalCount({
            totalCount: data.culturalEventInfo.list_total_count,
          })
        );
      }
  
      if (newFestivals.length > 0) {
        const mergedFestivals = [...festivals, ...newFestivals];
        
        // Remove duplicates based on ORG_LINK
        const uniqueFestivals = mergedFestivals.filter(
          (festival, index, self) =>
            index === self.findIndex((f) => f.ORG_LINK === festival.ORG_LINK)
        );
  
        dispatch(setFestivals({ festivals: uniqueFestivals }));

        if(localStorage.getItem('festivals')){
          localStorage.removeItem('festivals');
          localStorage.setItem('festivals', JSON.stringify(uniqueFestivals))
        } else {
          localStorage.setItem('festivals', JSON.stringify(uniqueFestivals))
        }

      }
    }
  }, [data, currentPage, dispatch, isLoading]);
  
  const loadMoreFestivals = useCallback(() => {
    if (!isLoading && !isFetching && festivals.length < totalCount) {
      const newStart = (currentPage - 1) * 25 + 1;
      const newEnd = currentPage * 25;

      dispatch(setStartNumber({ startNumber: newStart }));
      dispatch(setEndNumber({ endNumber: newEnd }));
      dispatch(setPageNumber({ currentPage: currentPage + 1 }));
    }
  }, [isLoading, isFetching, currentPage, festivals.length, totalCount, dispatch]);

  useEffect(() => {
    if (!sentinelRef.current) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMoreFestivals();
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0,
      }
    );
  
    observer.observe(sentinelRef.current);
  
    return () => {
      observer.disconnect();
    };
  }, [loadMoreFestivals]);
  
  return (
    <div ref={sentinelRef} style={{ height: '10px' }} />
  )
}