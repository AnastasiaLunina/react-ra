import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function DropdownItem() {
    const dropdownListItems = [
        { name: 'Profile Information', selected: false },
        { name: 'Change Password', selected: false },
        { name: 'Become PRO', selected: false },
        { name: 'Help', selected: false },
        { name: 'Log Out', selected: false },
    ];

    const dropdownListItemsIndex = dropdownListItems.map(dropdownListItem => (
        {id: uuidv4(), ...dropdownListItem})) 


    console.log(dropdownListItemsIndex)

    const [selected, setSelected] = useState();

    const onItemClick = (itemName) => {
      setSelected(itemName);
    }

    return (
        <>
            {dropdownListItemsIndex.map((dropdownListItem) =>
                <li
                    key={dropdownListItem.id}
                    className={selected === dropdownListItem.name ? 'active' : ''}
                    onClick={() => onItemClick(dropdownListItem.name)}>
                    <a className="dropdown-link" href="#dropdown">{dropdownListItem.name}</a>
                </li>
            )}
        </>
    )
}
