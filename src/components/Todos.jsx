import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-list" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p>You haven't todos</p>
  )

    return (
      <div className="todo-content">
        {todoList}
      </div>
    );
}

export default Todos


