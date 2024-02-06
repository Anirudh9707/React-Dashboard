// ToggleComponent.js
import React from 'react';

function ToggleComponent({ isVisible }) {
  return isVisible ? <div>Visible Component</div> : null;
}

export default ToggleComponent;
