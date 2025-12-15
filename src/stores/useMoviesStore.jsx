"use client";

import { getMovies,  } from '@/services/movies';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';


const useMoviesStore = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "trending";

  const url = getMovies(genre); // create URL only, no fetch here

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, isLoading, error };
};


export default useMoviesStore;