import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface getFestivalPerPageI {
  start: string;
  end: string;
  title?: string;
  codeName?: string;
  date?: string;
}



export const festivalAPI = createApi({
  reducerPath: 'festivalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/proxy' }), // 프록시 API 경로로 설정
  tagTypes: [],
  endpoints: (builder) => ({
    getFestivalPerPage: builder.query({
      query: ({ start, end, codeName = '', title = '', date = '' }: getFestivalPerPageI) =>
        `?start=${start}&end=${end}&codeName=${codeName}&title=${title}&date=${date}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetFestivalPerPageQuery } = festivalAPI; 