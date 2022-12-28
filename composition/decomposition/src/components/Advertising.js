import PropTypes from 'prop-types';

function Advertising({ alt, src, title }) {
    return (
        <div className="adv">
            <div className="img-box">
                <img src={src} alt={alt} className="adv__img"></img>
            </div>
            <h2 className='news-block-link-active'>Работа над ошибками</h2>
            <div className="adv__title title"><a href="#0">{title}</a></div>
        </div>
    )
}

Advertising.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Advertising;