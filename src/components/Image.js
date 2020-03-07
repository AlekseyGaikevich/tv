import React from 'react';
import './../scss/image.scss';

const Image = ({values: {title, image}}) => {

    return <img src={image} alt={title} className="img" />
}
export default Image;