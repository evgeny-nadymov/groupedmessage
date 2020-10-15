import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import GroupedMessages from './GroupedMessages';
import './Album.css';

class Album extends React.Component {
    state = { };

    static getDerivedStateFromProps(props, state) {
        const { displaySize, messages } = props;

        if (messages !== state.prevMessages) {
            const grouped = new GroupedMessages();
            grouped.calculate(props.messages, displaySize);

            return {
                grouped,
                prevMessages: messages
            }
        }

        return null;
    }

    render() {
        const { displaySize } = this.props;
        const { grouped } = this.state;

        const items = grouped.messages.map((x, i) => (<AlbumItem key={i} message={x} position={grouped.positions.get(x)} displaySize={displaySize}/>));

        // const items = [];
        // for (let i = 0; i < grouped.messages.length; i++) {
        //
        // }

        return (
            <div className='album-container'>
                <div className='album' style={{ width: displaySize }}>
                    {items}
                </div>
            </div>
        );
    }

}

Album.propTypes = {
    displaySize: PropTypes.number,
    messages: PropTypes.array
};

Album.defaultProps = {
    displaySize: 320
}

export default Album;