import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ img }) => {
    return (
        <div className="card animate__animated animate__fadeIn" >
            <img src={img.url} alt={img.title}/>
            <p>{ img.title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    img: PropTypes.object.isRequired
};

export default GifGridItem;
