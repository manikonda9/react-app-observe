import React from 'react';
import Photo from './Whisky';

const PhotoGrid = ({ photos }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {photos.map(photo => (<Photo key={photo.id} photo={photo} />))}
    </div>
);

export default PhotoGrid;