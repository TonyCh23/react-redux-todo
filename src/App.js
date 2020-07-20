import React from 'react';
import {TodosContainer} from './containers/TodosContainer';
import {DarkModeToggleContainer} from './containers/DarkModeToggleContainer';
import './styles/App.css';

// if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
//   console.log('🎉 Dark mode is supported');
// }

export const App = () => {
  return (
    <div className="todo-app container">
      <DarkModeToggleContainer />
      <TodosContainer />
    </div>
  );
};
