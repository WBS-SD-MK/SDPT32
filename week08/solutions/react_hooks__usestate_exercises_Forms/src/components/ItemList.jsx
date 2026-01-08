import React, { useState } from 'react';

const ItemList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      {selectedItem ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <h2>{selectedItem}</h2>
        </div>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
