import New from './New';
import Popular from './Popular';
import PropTypes from 'prop-types';

function Highligted(Component) {
    return function Highligted(props) {
        
        if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            )
        }

        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            )   
        }

        return <Component {...props} />
    }
}

Highligted.propTypes = {
    props: PropTypes.object
}

export default Highligted;