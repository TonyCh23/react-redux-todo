import React from 'react';

export const AddForm = ({ items, onSubmit, onChange }) => {
    console.log(items.text);
    return (
        <div className="add-item-form">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Add new todo:</label>
                <input type="text" id="name" onChange={onChange} value={items.text}></input>
                <button className="btn waves-effect waves-light" type="submit" name="action">Add item</button>
            </form>
        </div>
    )
}
