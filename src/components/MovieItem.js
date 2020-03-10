import React, { Component } from 'react';
import './../scss/movieItem.scss';
import './../scss/buttons.scss';

const MovieItem = ({ movie, removeMovie, addMovieToWillWatch }) => {
    return (
        <div className="item">
            <div className="card">
                <img
                    className="card-img"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                        movie.poster_path}`}
                    alt={movie.title} />
                <div className="card-body">
                    <h4>{movie.title}</h4>
                    <div className="card-info">
                        <p>Rating: {movie.vote_average}</p>
                        <button
                        type="button"
                        className="btn-will-watch"
                        onClick={addMovieToWillWatch.bind(null, movie)}>
                            Will watch
                    </button>
                    </div>
                </div>
            </div>
            <button
                className="btn-card-delete"
                onClick={removeMovie.bind(null, movie)}>
                Delete movie
            </button>
        </div>
    );
};

export default MovieItem;