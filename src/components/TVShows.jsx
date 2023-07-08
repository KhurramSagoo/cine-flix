import React, { useEffect, useState } from "react";
import { fetchTVShows } from "../crashap";
import Navbar from "./NavBar";
import "./tvshows.scss";

const TVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tvShowsPerPage = 10;
  const maxDescriptionLength = 20; // Specify the maximum number of words in the description
  // console.log(tvShows)
  useEffect(() => {
    const fetchData = async () => {
      const tvShowsData = await fetchTVShows();
      setTVShows(tvShowsData);
    };

    fetchData();
  }, []);

  const indexOfLastTVShow = currentPage * tvShowsPerPage;
  const indexOfFirstTVShow = indexOfLastTVShow - tvShowsPerPage;
  const currentTVShows = tvShows.slice(indexOfFirstTVShow, indexOfLastTVShow);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > maxDescriptionLength) {
      return words.slice(0, maxDescriptionLength).join(" ") + "...";
    }
    return description;
  };

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <h2 className="tvshow-heading">Popular TV Shows</h2>
      <div className="tvshow-container">
        {currentTVShows.map((tvShow) => (
          <div key={tvShow.id} className="tvshow-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
              alt={tvShow.title}
            />
            <div className="tvshow-info">
              <h3>{tvShow.title}</h3>

              <p>{truncateDescription(tvShow.overview)}</p>
              <p className="rating">Rating: {tvShow.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(tvShows.length / tvShowsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TVShows;
