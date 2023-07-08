import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import Navbar from './NavBar';
import './movies.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const maxDescriptionLength = 20; // Specify the maximum number of words in the description

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    fetchData();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > maxDescriptionLength) {
      return words.slice(0, maxDescriptionLength).join(' ') + '...';
    }
    return description;
  };

  return (
    <div>
      <Navbar />
      <h2 className="movie-heading">Popular Movies</h2>
      <div className="movie-container">
        {currentMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{truncateDescription(movie.overview)}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Movies;
