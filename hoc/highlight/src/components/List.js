import Article from './Article';
import Video from './Video';
import Highligted from './Highligted';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const HighligtedVideo = Highligted(Video);
const HighligtedArticle = Highligted(Article);

function List(props) {
    return props.list.map((item) => {
        switch (item.type) {
            case 'video':
                return (
                    <HighligtedVideo key={uuidv4()} {...item} />
                );

            case 'article':
                return (
                    <HighligtedArticle key={uuidv4()} {...item} />
                );

            default:
                return null
        }
    });
};

List.propTypes = {
    props: PropTypes.array
}

export default List;