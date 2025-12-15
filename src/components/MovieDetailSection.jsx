// "use client"

import Image from 'next/image'
import React  from 'react'
import { HiThumbUp } from 'react-icons/hi'

const MovieDetailSection = ({data}) => {
  
  
  return (
    <section className='mt-10'>
      <div className=' sm:p-4 rounded-lg flex flex-col md:flex-row gap-5 md:justify-center md:items-center md:gap-10'>
      
      <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} width={400} height={150} className='rounded-lg  mb-2'/>
      <div>
        <h1 className=' font-bold mb-2'>{data.title}</h1>
        <p className='mb-2 font-semibold'>Genre : {data.genres && data.genres.map((genre) => genre.name).join(', ')}</p>
      <p className=' text-md mb-2'>{data.overview}</p>
      <div className='flex items-center'>
        <p className='text-sm text-gray-400'>{data.release_date}</p>
        <span><HiThumbUp className='text-amber-400 mr-2 ml-5'/></span>
        <span>{data.vote_count}</span>
      </div>
      </div>
      
    </div>
    </section>
  )
}

export default MovieDetailSection