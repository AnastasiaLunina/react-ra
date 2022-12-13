import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';

function DropdownList() {

  return (
    <ul data-id="dropdown" className="dropdown">
      <DropdownItem />
    </ul>
  )
}

export default DropdownList;

DropdownList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object),
}