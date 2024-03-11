import React from 'react';

const MovieContext =  React.createContext({});

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = React.useState([]);


    function addMovie(title) {
        const movieItem = {
            id: Date.now(),
            title
        }
        setMovies([...movies, movieItem]);
    }

    return (
        <MovieContext.Provider 
            value={{
                // states
                movies,
                // actions
                addMovie
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

// function get the context
export const useMovieContext = () => React.useContext(MovieContext);