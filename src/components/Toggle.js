import React from 'react';
import PropTypes from 'prop-types';

export const Toggle = ({darkMode, onClick}) => {
  return (
    <div className="toggle">
      <div className="switch">
        <label>
          Dark
          <input type="checkbox" />
          <span className="lever z-depth-1" onClick={()=>onClick(!darkMode)}></span>
        </label>
      </div>
    </div>
  );
};
Toggle.propTypes = {
  darkMode: PropTypes.bool,
};
