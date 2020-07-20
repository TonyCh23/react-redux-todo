// import './mock/matchMedia.mock'; // Must be imported before the tested file
import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {App} from './App';

function renderApp() {
  return render(<App />);
}

test(`renders Todo's`, () => {
  const {getByText} = renderApp();
  const linkElement = getByText(/No todos left/i);
  expect(linkElement).toBeInTheDocument();
});

test('add item', async () => {
  renderApp();
  const inputNewTodo = screen.getByLabelText('Add new todo:');
  userEvent.type(inputNewTodo, 'reactjs');
  const submitButton = screen.getByRole('button', {name: /Add item/i});
  userEvent.click(submitButton);
  const addedTodo = await screen.findByText(/reactjs/i);
  screen.debug(addedTodo);
  expect(addedTodo).toBeInTheDocument();
  screen.debug();
});
