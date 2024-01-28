import React from 'react'
import Button from '../Button'

function TodoForm({ handleAddTodo }) {
  const [title, setTitle] = React.useState('');

  function onSubmit() {
    handleAddTodo(title)
  }

  return (
    <div className='todoForm'>
      <input 
        type="text" 
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
        }}
      />
      <Button 
        textButton='Add Todo'
        onClick={onSubmit}
      />
    </div>
  )
}

export default TodoForm