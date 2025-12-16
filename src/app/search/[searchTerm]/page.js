"use client";

import MovieCard from '@/components/MovieCard';
import { useParams } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';

const page = () => {
  const {searchTerm} = useParams();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data,isLoading,error} = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&query=${searchTerm}`,fetcher);
  console.log(data);
  return (
    <section>
        <h1 className='text-2xl text-amber-400 mb-6'>Movies</h1>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto'>
        {data && data.results.map((movie) => (<MovieCard key={movie.id} movie={movie}/>))}
        </div>
    </section>
  )
}

export default page