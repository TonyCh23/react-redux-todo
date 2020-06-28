import React from 'react';

export const Todos = ({items, removeItem}) => {
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
