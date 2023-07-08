import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import TVShows from './components/TVShows';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
      </Routes>
    </Router>
  );
};

export default App;
