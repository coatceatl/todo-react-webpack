import React, { Component } from 'react';
import Todos from './Todos.jsx';
import AddTodo from './AddTodo.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: 'first todo'},
        {id: 2, content: 'second todo'}
      ]
    }
  }

  render() {
    return (
      <div className="wrap">
        <div className="header">React ToDo App</div>
        <Todos todos={this.state.todos} />
        <AddTodo />
      </div>
    );
  }
}

export default App

