import React, { Component } from 'react';

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Add new todo:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}
