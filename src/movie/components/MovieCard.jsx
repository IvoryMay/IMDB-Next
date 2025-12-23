import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiThumbUp } from 'react-icons/hi';

const MovieCard = ({movie}) => {
    // console.log(movie?);

  return (
    <section >
    <div className='group cursor-pointer sm:border sm:border-gray-400 sm:p-4 rounded-lg sm:shadow-md sm:hover:shadow-gray-400 transition-shadow duration-200'>
      <Link href={`/movie/${movie.id}`} className=' '>
      {movie?.poster_path ?<Image src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} 
      loading="eager"
      width={300} height={150}
      style={{width: '100%', height: 'auto'}}
       className='w-[300px] h-[150px] rounded-lg group-hover:opacity-75 transition-opacity duration-300 mb-2'/>
       :<div className="w-[200px] h-[150px] rounded-lg group-hover:opacity-75 transition-opacity duration-300 mb-2 dark:bg-gray-500  bg-gray-300 flex items-center justify-center"
       >
    No Image
  </div>}
      <p className='line-clamp-2 text-md mb-2'>{movie?.overview}</p>
      <h1 className=' font-semibold truncate'>{movie?.title}</h1>
      <div className='flex items-center'>
        <p className='text-sm text-gray-400'>{movie?.release_date}</p>
        <span><HiThumbUp className='text-amber-400 mr-2 ml-5'/></span>
        <span>{movie?.vote_count}</span>
      </div>
      </Link>
    </div>
    </section>
  )
}

export default MovieCard