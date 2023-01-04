import PropTypes from 'prop-types';

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

New.propTypes = {
    children: PropTypes.element
}

export default New;