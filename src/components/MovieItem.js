import React from 'react';

const MovieItem = (props) => {
    console.log(props)
    const {title, voteAverage, image, overview} = props.data;
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>{voteAverage}</p>
            <p>{overview}</p>
        </div>
    )
};

export default MovieItem;