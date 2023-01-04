import PropTypes from 'prop-types';

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" title="video" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

Video.propTypes = {
    url: PropTypes.string,
    views: PropTypes.number
}

export default Video;