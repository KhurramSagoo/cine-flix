import React from "react";
import Navbar from "./NavBar";
import "./home.scss";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="navbar"></div>
      <h1 className="heading">
        Welcome to <span className="cine">CINC FLIX</span> Streaming Site
      </h1>
      <p className="slide-wave">
        Welcome to "My Movie Collection" - your ultimate destination for TV
        shows and movies! Our website is designed to provide you with an
        immersive and user-friendly experience, allowing you to explore and
        organize your personal collection with ease. Here's what you can expect
        from our platform: Extensive Database: We boast an extensive database of
        TV shows and movies, covering a wide range of genres, languages, and
        eras. From classic Hollywood films to the latest blockbuster releases,
        from binge-worthy TV series to hidden gems, we've got it all. Our
        collection is regularly updated to ensure you never miss out on the
        latest releases. Watchlist Integration: With our seamless integration
        with popular streaming platforms, you can easily add titles from your
        watchlist to your preferred streaming services. Whether it's Netflix,
        Amazon Prime Video, Hulu, or any other platform, we provide direct links
        to make the transition from browsing to streaming as smooth as possible.
        Happy watching!
      </p>

      <Footer />
    </div>
  );
};

export default Home;
