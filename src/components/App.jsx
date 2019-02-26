import React, { Component } from 'react';
import Todos from './Todos.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>React ToDo App</h1>
        <Todos />
      </div>
    );
  }
}

export default App

