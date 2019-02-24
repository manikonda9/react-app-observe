import React from 'react';

const Photo = ({ photo }) => (
    <div>
        <img style={{ width: '300px', height: '300px' }} alt={photo.title} src={photo.imageUrl} />
        <h3>{photo.title}</h3>
    </div>
);

export default Photo;