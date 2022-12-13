import React from 'react';
import { useState } from 'react';


export default function DropdownItem() {
    const dropdownListItems = [
        { name: 'Profile Information', selected: false },
        { name: 'Change Password', selected: false },
        { name: 'Become PRO', selected: false },
        { name: 'Help', selected: false },
        { name: 'Log Out', selected: false },
    ];

    const [selected, setSelected] = useState();

    const onItemClick = (itemName) => {
      setSelected(itemName);
    }

    return (
        <>
            {dropdownListItems.map((dropdownListItem, index) =>
                <li
                    key={index}
                    className={selected === dropdownListItem.name ? 'active' : ''}
                    onClick={() => onItemClick(dropdownListItem.name)}>
                    <a className="dropdown-link" href="#dropdown">{dropdownListItem.name}</a>
                </li>
            )}
        </>
    )
}
