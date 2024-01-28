import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {todos.map(todo => {
        return (
          <TodoItem todo={todo} deleteTodo={deleteTodo} />
        )
      })}
    </>
  )
}

export default TodoList