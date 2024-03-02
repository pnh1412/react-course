import React from 'react'
import Button from '../Button'

function TodoItem({ todo, deleteTodo }) {
  // function onDelete() {
  //   deleteTodo(todo.id);
  // }

  return (
    <div key={todo.id} className='todoItem'>
      {todo.title}
      <Button 
        textButton='Delete' 
        danger 
        // onClick={onDelete}
        onClick={() => deleteTodo(todo)}
      />
    </div>
  )
}

export default TodoItem