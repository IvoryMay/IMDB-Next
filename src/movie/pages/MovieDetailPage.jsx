import MovieDetailSection from "@/movie/components/MovieDetailSection";
import React from "react";

const MovieDetailPage = ({ data }) => {
  return (
    <div>
      <MovieDetailSection data={data} />
    </div>
  );
};

export default MovieDetailPage;
