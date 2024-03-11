import React from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'

import { MovieProvider } from '../../contexts/MovieContext'

export default function Movie() {
  
  return (
    <MovieProvider>
  
      <h2>React Context </h2>

      <MovieForm />

      <MovieList />

    </MovieProvider>
  )
}
