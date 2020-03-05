import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        const { data: { title, voteAverage, image, overview } } = this.props;
        console.log(this);
        return (
            <div>
                <h3>{title}</h3>
                <img src={image} alt={title} />
                <p>{voteAverage}</p>
                <p>{overview}</p>
            </div>
        );
    };
};

export default MovieItem;