import PropTypes from 'prop-types';
import Item from './Item';


function Listing({ items }) {

    return (
        <>
            {items.map(item => <Item key={item.listing_id} item={item} />)}
        </>
    )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing;