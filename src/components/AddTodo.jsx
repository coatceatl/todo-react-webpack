import React, { Component } from 'react';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.content);
  }

  render() {
    return (
      <div className="todo-content">
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text"
            onChange = {this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo
