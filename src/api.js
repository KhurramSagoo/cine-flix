const API_KEY = '5a11ac3601afbb24961b8ee0d7c1dc11';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchTVShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};
