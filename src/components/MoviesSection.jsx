"use client"

import useMoviesStore from "@/stores/useMoviesStore";
import MovieCard from "./MovieCard"



const MoviesSection = () => {
    // console.log(data.results[0].original_title );
const {data,isLoading, error} = useMoviesStore(); 
  return (
    <section className="mt-10">
        
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto'>
        {data && data.results.map((movie) => (<MovieCard key={movie.id} movie={movie}/>))}
        </div>
    </section>
  )
}

export default MoviesSection