import React from 'react';
import PropTypes from 'prop-types';

export const Todos = ({items=[], removeItem=(f)=>f}) => {
  // console.log(typeof(items));
  const todoList = items.length ? (
    items.map((item) => (
      <div className="collection-item" onClick={() => {
        removeItem(item.id);
      }} key={item.id}>
        <span>{item.text}</span>
      </div>
    ),
    )
  ) : (<p className="collection-item">No todos left</p>);
  return (
    <div className="todos collection center">
      {todoList}
    </div>
  );
};

Todos.propTypes = {
  items: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
