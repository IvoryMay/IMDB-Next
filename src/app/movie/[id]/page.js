"use client";

import MovieDetailPage from '@/pages/MovieDetailPage'
import { useParams } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';

const page = () => {

  const { id } = useParams();
  console.log(id);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data,isLoading,error} = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,fetcher);
  console.log(data);

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>Error: {error}</div>;
  
  return (
    
    
    <div><MovieDetailPage data={data} /></div>
  )
}

export default page