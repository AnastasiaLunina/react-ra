import { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prevIsListShow) => !prevIsListShow);
  }

  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('dropdown-link')) return;
    setIsOpen(false);
  })

  return (
    <div className="container">
      <div data-id="wrapper" className={`dropdown-wrapper${isOpen ? ' open' : ''}`}>
        <button data-id="toggle" className="btn" onClick={onToggle}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  )
}

export default Dropdown;