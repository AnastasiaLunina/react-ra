import React from 'react';
import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';
import PropTypes from 'prop-types';

const DateTimeHOC = DateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" ></iframe>
            <DateTimeHOC date={props.date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string
}

export default Video;
