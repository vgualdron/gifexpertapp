import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from '../components/GifGridItem';

const GifGrid = ({ category }) => {
    

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3  className="card animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p  className="card animate__animated animate__flash">Loading ...</p> }
            <div className='card-grid'>
                {
                    images.map( (img) => (
                        <GifGridItem key={img.id} img={img}/>
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
