import React from 'react';
import PropTypes from 'prop-types';

export const AddForm = ({items, onSubmit, onChange}) => {
  return (
    <div className="add-item-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Add new todo:</label>
        <input type="text" id="name" onChange={onChange} value={items.text}></input>
        <button className="btn waves-effect waves-light" type="submit" name="action">Add item</button>
      </form>
    </div>
  );
};
AddForm.propTypes = {
  items: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
