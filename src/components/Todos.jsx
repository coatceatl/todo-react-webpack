import React from 'react';

const Todos = ({todos}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p>You haven't todos</p>
  )

    return (
      <div>
        {todoList}
      </div>
    );
}

export default Todos


