import HomePageSection from '@/components/HomePageSection'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <HomePageSection/>  
    </div>
  )
}

export default HomePage