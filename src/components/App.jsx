import React, { Component } from 'react';
import Todos from './Todos.jsx';
import AddTodo from './AddTodo.jsx';

window.id = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: 'First todo'},
        {id: 2, content: 'Second todo'}
      ]
    }

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  addTodo(todo) {
    const current = {id: window.id++, content: todo}
    let todos = [...this.state.todos, current];
    this.setState({
      todos
    })
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="header">React ToDo App</div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App

