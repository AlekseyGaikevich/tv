import React, { Component } from 'react';
import './../scss/movieItem.scss';
import './../scss/buttons.scss';

class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            willWatch: false
        };
    };

    render() {
        // console.log(this)
        const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
        return (
            <div className="item">
                <div className="item--card">
                    <img
                        className="item--card_img"
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                            movie.poster_path}`}
                        alt={movie.title} />
                    <div className="item--card_body">
                        <h4>{movie.title}</h4>
                        <div className="item--card_info">
                            <p>Rating: {movie.vote_average}</p>
                            {this.state.willWatch ?
                                <button
                                    type="button"
                                    className="btn-will-watch add"
                                    onClick={() => {
                                        this.setState({ willWatch: false });
                                        removeMovieFromWillWatch(movie);
                                    }}>
                                    Remove Will watch
                            </button> :
                                <button
                                    type="button"
                                    className="btn-will-watch"
                                    onClick={() => {
                                        this.setState({ willWatch: true });
                                        addMovieToWillWatch(movie)
                                    }}>
                                    Add Will watch
                            </button>}
                        </div>
                    </div>
                </div>
                <button
                    className="item--btn_delete"
                    onClick={removeMovie.bind(null, movie)}>
                    Delete movie
                </button>
            </div>
        );
    }
};

export default MovieItem;