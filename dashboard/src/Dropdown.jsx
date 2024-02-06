// Dropdown.js
import React, { useState } from 'react';
import './styles.scss';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
      <div>Dropdown Content</div>
      <div className={`arrow ${isOpen ? 'up' : 'down'}`} />
    </div>
  );
}

export default Dropdown;
