import News from './News';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function NewsSection({ news }) {

    return (
        <>
            <div className="news-block title">
                <span><a href="#0" className='news-block-link-active'>Сейчас в СМИ</a></span>
                <span><a href="#0" className='news-block-link'>В Германии</a></span>
                <span><a href="#0" className='news-block-link'>Рекомендуем</a></span>
                <span><a href="#0" className='news-block-date'>31 июля, среда 02 32</a></span>
            </div>
            <ul>
                {news.map((item) => <News key={uuidv4()} item={item}/>)}
            </ul>
        </>
    )
}

NewsSection.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsSection;