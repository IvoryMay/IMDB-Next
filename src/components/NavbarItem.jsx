"use client";

import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React from 'react'



const NavbarItem = ({title, param}) => {

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  //remove genre and make changes for href like href = {`${BASE_URL}/movie/${param}`};
  // place a default navbar item for trending in the navbar
  return (
    <Link href={`/?genre=${param}`} className={`hover:text-amber-400 ${param === genre && 'text-amber-400 underline underline-offset-5 decoration-amber-500 rounded-lg  '}`}>
      {title}
      </Link>
  )
}

export default NavbarItem