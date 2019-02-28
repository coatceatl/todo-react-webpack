import React, { Component } from 'react';
import Todos from './Todos.jsx';
import AddTodo from './AddTodo.jsx';

window.id = 0;

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

  addTodo(todo) {
    const current = {id: window.id++, content: todo}
    console.log(current)
  }

  render() {
    return (
      <div className="wrap">
        <div className="header">React ToDo App</div>
        <Todos todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App

