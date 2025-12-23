import HomePageSection from "@/movie/components/HomePageSection";
import Navbar from "@/movie/components/Navbar";
import SearchBar from "@/movie/components/SearchBar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <HomePageSection />
    </div>
  );
};

export default HomePage;
