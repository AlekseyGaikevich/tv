import React from 'react';
import './app.css';
import MovieItem from './components/MovieItem';

const movie = {
  title: "New Title",
  voteAverage: 8.0,
  image: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/avengers-endgame-avatar-worldwide-box-office.jpg",
  overview: "Что то здесь написано"
};

function App() {
  return (
    <div className="app">
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
