import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {festivalEndPoint} from './festivalEndPoint'

const SERVICE_KEY = '48504d46446d696e373365494c7848';

export const fetchExample = async () => {

  const res = await fetch(
    `http://openapi.seoul.go.kr:8088/${SERVICE_KEY}/json/culturalEventInfo/1/25/`);
    
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }


  const data = await res.json();

  // Props를 사용해 페이지로 데이터를 전달한다.
  return data;
};

interface getFestivalPerPageI {
  start: string;
  end: string;
  title?: string;
  codeName?: string;
  date?: string;
}


export const festivalAPI = createApi({
  reducerPath: 'festivalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${festivalEndPoint}/${SERVICE_KEY}/json/culturalEventInfo` }),
  tagTypes: [],
  endpoints: (builder) => ({
    getFestivalPerPage: builder.query({
      query: ({start, end, codeName, title, date }:getFestivalPerPageI) => `/${start}/${end}/${codeName}/${title}/${date}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetFestivalPerPageQuery } = festivalAPI;
