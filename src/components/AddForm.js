import React from 'react';

export const AddForm = ({ items, onSubmit, onChange }) => {
    console.log(items.text);
    return (
        <div className="add-item-form">
            <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="name">Add new todo:</label>
            <input type="text" id="name" onChange={(e) => onChange(e)} value={items.text}></input>
            <button className="btn waves-effect waves-light" type="submit" name="action">Add item</button>
            </form>
        </div>
    )
}
