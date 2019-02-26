import React, { Component } from 'react';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="todo-content">
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text"
            ref={((input) => {this.textInput = input})}
            value = {this.state.content}
            onChange = {this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo
