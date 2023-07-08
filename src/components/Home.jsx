import React from 'react';
import Navbar from './NavBar';
import './home.scss'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="navbar">
      </div>
      <h1>Welcome to <span className='cine'>CINC FLIX</span> Streaming Site</h1>
      <p className='slide-wave'>Welcome to "My Movie Collection" - your ultimate destination for TV shows and movies! Our website is designed to provide you with an immersive and user-friendly experience, allowing you to explore and organize your personal collection with ease. Here's what you can expect from our platform:

Extensive Database: We boast an extensive database of TV shows and movies, covering a wide range of genres, languages, and eras. From classic Hollywood films to the latest blockbuster releases, from binge-worthy TV series to hidden gems, we've got it all. Our collection is regularly updated to ensure you never miss out on the latest releases.

Search and Discovery: Our powerful search and discovery features make it effortless for you to find the content you love. You can search by title, genre, actor/actress, director, or even keywords related to the storyline. Our advanced algorithms recommend personalized suggestions based on your viewing history and preferences, helping you discover new shows and movies that match your taste.
Collection Management: Organizing your collection has never been easier. With "My Movie Collection," you can create custom lists, such as "Favorites," "Watchlist," or "Seen," to keep track of your viewing progress and plan your future watchlist. You can also rate and review titles, add personal notes, and mark episodes or movies as watched to maintain an organized library.
User Profiles and Community: Join our vibrant community of movie and TV show enthusiasts! Create your personalized user profile, customize it with a profile picture and bio, and connect with fellow users who share your interests. Discuss your favorite shows and movies, exchange recommendations, and participate in engaging discussions. You can also follow other users to stay updated on their activities and discover new content.

Watchlist Integration: With our seamless integration with popular streaming platforms, you can easily add titles from your watchlist to your preferred streaming services. Whether it's Netflix, Amazon Prime Video, Hulu, or any other platform, we provide direct links to make the transition from browsing to streaming as smooth as possible.

Curated Collections and Recommendations: Our team of expert curators hand-picks collections based on themes, genres, and special events. Whether you're in the mood for a horror marathon, an '80s nostalgia trip, or a list of award-winning films, our curated collections will guide you to the perfect selection. You can also opt to receive personalized recommendations based on your preferences.

Mobile-Friendly Experience: Enjoy "My Movie Collection" on the go! Our website is fully optimized for mobile devices, allowing you to access your collection, browse titles, and manage your account seamlessly from your smartphone or tablet.

Join "My Movie Collection" today and embark on a cinematic journey like never before. Dive into an expansive library of TV shows and movies, connect with fellow enthusiasts, and unlock a world of entertainment at your fingertips. Start building your collection and turn your passion for film and television into a personalized digital experience. Happy watching!</p>
      
<Footer />
    </div>
  );
};

export default Home;
