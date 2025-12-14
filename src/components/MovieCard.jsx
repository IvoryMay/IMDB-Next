import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiThumbUp } from 'react-icons/hi';

const MovieCard = ({movie}) => {
    console.log(movie);

  return (
    <section >
    <div className='group cursor-pointer sm:border sm:border-gray-400 sm:p-4 rounded-lg sm:shadow-md sm:hover:shadow-gray-400 transition-shadow duration-200'>
      <Link href={`/movie/${movie.id}`} className=' '>
      <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={300} height={150} className='rounded-lg group-hover:opacity-75 transition-opacity duration-300 mb-2'/>
      <p className='line-clamp-2 text-md mb-2'>{movie.overview}</p>
      <h1 className=' font-semibold truncate'>{movie.title}</h1>
      <div className='flex items-center'>
        <p className='text-sm text-gray-400'>{movie.release_date}</p>
        <span><HiThumbUp className='text-amber-400 mr-2 ml-5'/></span>
        <span>{movie.vote_count}</span>
      </div>
      </Link>
    </div>
    </section>
  )
}

export default MovieCard