import React, { useState } from 'react';
import './style.css';

export default function ItemList() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? 'selected' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
      {selectedItem && <p>Selected Item: {selectedItem}</p>}
    </div>
  );
}
