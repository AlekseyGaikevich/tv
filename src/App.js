import React from 'react';
import './app.scss';
import MovieItem from './components/MovieItem';
import './moviesData.js';
import { moviesData } from './moviesData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {
      return item.id !== movie.id
    });
    // console.log(updateMovies);
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMovieWillWatch = [...this.state.moviesWillWatch, movie];
    // console.log(...updateMovieWillWatch);
    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  }

  render() {
    // console.log(this.state, this)
    return (
      <div className="app">
        <div className="container">
          <div className="movies-items">
            {this.state.movies.map(movie => {
              return <MovieItem
                key={movie.id}
                movie={movie}
                removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch}
              />
            })}
          </div>
          <div className="movies-watch">
            <p>Will watch: {this.state.moviesWillWatch.length} movies</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
