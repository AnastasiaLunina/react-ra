import PropTypes from 'prop-types';

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#0">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

Article.propTypes = {
    title: PropTypes.string,
    views: PropTypes.number
}

export default Article;