import React from 'react';
import PropTypes from 'prop-types';
import './AlbumItem.css';

class AlbumItem extends React.Component {
    render() {
        const { message, position, displaySize } = this.props;

        const { width, height } = position;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const background = null; // `rgb(${r},${g},${b})`;

        return (
            <div className='album-item' style={{ width, height: height * displaySize, background }}>
                <div className='photo'>
                    {position.getInfo()}
                </div>
            </div>
        );
    }
}

AlbumItem.propTypes = {
    message: PropTypes.object,
    position: PropTypes.object,
    displaySize: PropTypes.number
};

export default AlbumItem;