import React from 'react'
import { useMovieContext } from '../../contexts/MovieContext'

function MovieForm() {
  const [title, setTitle] = React.useState('');
  const { addMovie } = useMovieContext();

  return (
    <div>
      <h3>Movie Form</h3>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a movie title" />
        <button type="button" onClick={() => addMovie(title) }>Add Movie</button>
    </div>
  )
}

export default MovieForm