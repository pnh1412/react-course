import React from 'react'

function TodoCount({ todos }) {
  return (
    <div className='todoTotal'>
      Total Todo: {todos.length}
    </div>
  )
}

export default TodoCount