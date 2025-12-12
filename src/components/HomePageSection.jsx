"use client";

import useMoviesStore from '@/stores/useMoviesStore';
import React from 'react'
import MoviesSection from './MoviesSection';

const HomePageSection = () => {
  const {data,isLoading, error} = useMoviesStore(); 
  return (
    <>
    <MoviesSection data={data} isLoading={isLoading} error={error}/>
    </>
  )
}

export default HomePageSection