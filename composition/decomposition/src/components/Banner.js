import PropsTypes from 'prop-types';
import banner from '../img/banner.jpeg';

function Banner() {
    return (
        <div className="grammar">
            <img src={banner} alt="banner"></img>
        </div>
    )
}

export default Banner;

Banner.propTypes = {
    banner: PropsTypes.string
}