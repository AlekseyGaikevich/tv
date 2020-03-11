import React from 'react';
import './app.scss';
import MovieItem from './components/MovieItem';
import { API_URL, API_KEY_3 } from './utils/api';
// import { moviesData } from './moviesData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    };
  };

  componentDidMount() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
      .then((res) => {
        console.log("res", res);
        return res.json()
      })
      .then((data) => this.setState({
        movies: data.results
      }));
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {
      return item.id !== movie.id
    });
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = (movie) => {
    const updateMovieWillWatch = [...this.state.moviesWillWatch, movie];
    console.log(...updateMovieWillWatch);
    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
      return item.id !== movie.id
    });
    // console.log(updateMoviesWillWatch);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  render() {
    // console.log(this.state, this)
    return (
      <div className="app">
        <div className="container">
          <div className="movies--items">
            {this.state.movies.map(movie => {
              return <MovieItem
                key={movie.id}
                movie={movie}
                removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch}
                removeMovieFromWillWatch={this.removeMovieFromWillWatch}
              />
            })}
          </div>
          <div className="movies--watch">
            <p>Will watch: {this.state.moviesWillWatch.length} movies</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;