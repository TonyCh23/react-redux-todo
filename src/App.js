import React from 'react';
import {TodosContainer} from './containers/TodosContainer';

export const App = () => {
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo&#39;s</h1>
      <TodosContainer />
    </div>
  );
};
