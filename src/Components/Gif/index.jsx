import React from 'react';
import './style.css'

const Gif = ({ value = [] }) => {
  return (
    <div className='container'>
      {value.map(image => (
        <div className='gif-container' key={image.id}>
          <b>{image.title.toUpperCase()}</b>
          <img src={image.images.downsized_medium.url} alt={image.title} />
          <p>{image.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Gif;
