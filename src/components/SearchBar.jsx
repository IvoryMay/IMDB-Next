"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
const onChangeHandler = (e) => {
  setSearch(e.target.value)};
  // console.log(search);

// const onChangeHandler = debounce((e) => {
//   setSearch(e.target.value);
// }, 500);
// console.log(search);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(search);
    setSearch('');
    router.push(`/search/${search}`);

  }
  return (
    <form onSubmit={onSubmitHandler} className='mt-8 flex justify-between gap-4 '>
      <input type="text"
      value={search}
       onChange={onChangeHandler}
       placeholder='Enter Search Keywords here...'
       className='flex-1 h-10 p-4 outline-none bg-gray-200 rounded
       placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-gray-700' />
      <button type="submit" className='bg-amber-400 px-4 h-10
      dark:text-gray-700 hover:bg-amber-500 rounded'>Search</button>
    </form>
  )
}

export default SearchBar