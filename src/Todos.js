import React from 'react';

export const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map((todo, index) => (
                <div className="collection-item" onClick={() => {deleteTodo(todo.id)}} key={index}>
                    <span>{todo.content}</span>
                </div>
            )
        )
    ) : (<p className="collection-item">No todos left</p>)
    return (
        <div className="todos collection center">
            {todoList}
        </div>
    )
}