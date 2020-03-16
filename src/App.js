import React from 'react';
import './app.scss';
import MovieItem from './components/MovieItem';
import MovieTabs from './components/MovieTabs';
import { API_URL, API_KEY_3 } from './utils/api';
// import { moviesData } from './moviesData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.asc"
    };
  };

  componentDidMount() {
    this.getMovies();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      console.log('call api');
      this.getMovies();
    }
  };

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
      this.state.sort_by
      }`)
      .then((res) => {
        // console.log("res", res);
        return res.json()
      })
      .then((data) => this.setState({
        movies: data.results
      }));
  }

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
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    console.log("render", this.state.sort_by)
    return (
      <div className="app">
        <div className="container">

          <MovieTabs
            sort_by={this.state.sort_by}
            updateSortBy={this.updateSortBy} />

          <div className="app--content">
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
      </div>
    );
  }
}

export default App;