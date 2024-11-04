import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVICEKEY,festivalEndPoint } from './festivalEndPoint'


interface getFestivalPerPageI {
  start: string;
  end: string;
  title?: string;
  codeName?: string;
  date?: string;
}


export const festivalAPI = createApi({
  reducerPath: 'festivalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${festivalEndPoint}/${SERVICEKEY}/json/culturalEventInfo` }),
  tagTypes: [],
  endpoints: (builder) => ({
    getFestivalPerPage: builder.query({
      query: ({start, end, codeName, title, date }:getFestivalPerPageI) => `/${start}/${end}/${codeName}/${title}/${date}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetFestivalPerPageQuery } = festivalAPI;