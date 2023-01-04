import Video from './Video';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function VideoList(props) {
    return props.list.map((item) => <Video key={uuidv4()} url={item.url} date={item.date} />);
}

VideoList.propTypes = {
    list: PropTypes.array
}

export default VideoList;   