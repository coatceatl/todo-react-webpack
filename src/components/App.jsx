import React, { Component } from 'react';
import Todos from './Todos.jsx';

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
      </div>
    );
  }
}

export default App

