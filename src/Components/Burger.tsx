import React, { useState } from 'react';

export function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={toggleMenu}>
        <span className="burger-icon"></span>
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li className="menu-item">Item 1</li>
          <li className="menu-item">Item 2</li>
          <li className="menu-item">Item 3</li>
        </ul>
      )}
    </div>
  );
}