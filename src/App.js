import React, { Component } from 'react';
import { Todos } from "./Todos";
import { AddTodo } from "./AddTodo";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
      {id:1, content: 'buy milk'},
      {id:2, content: 'buy salat'}
    ]};

    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
    console.log(this.state);
  }
  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, {...newTodo, id: Math.random()}]
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
