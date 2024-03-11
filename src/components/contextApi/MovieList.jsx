import React from 'react'
import { useMovieContext } from '../../contexts/MovieContext'


import MovieItem from './MovieItem';

function MovieList() {
  const { movies } = useMovieContext();

  return (
    <div>
      {movies.map(movie => <MovieItem movie={movie} />)}
    </div>
  )
}

export default MovieList