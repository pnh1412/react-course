import React from 'react'
import TodoForm from './components/liftingStateUp/TodoForm';
import TodoCount from './components/liftingStateUp/TodoCount';
import TodoList from './components/liftingStateUp/TodoList';

function LiftingStateUp() {
  const [todos, setTodos] = React.useState([]);

  // function to update state todo
  function handleAddTodo(todoTile) {
    // setTodos....
    const todoItem = {
      id: Math.floor(Math.random() * 1000),
      title: todoTile
    }
    setTodos(prevState => {
      return [...prevState, todoItem]
    })
  }

  function deleteTodo(todoItem) {
    // // setTodos....
     setTodos(prevState => {
      return prevState.filter(todo => todo.id !== todoItem.id)
     })
  }

  return (
    <div>
      <h2>LiftingStateUp</h2>

      <TodoForm handleAddTodo={handleAddTodo} />

      <TodoCount todos={todos} />
      
      <div className='todoList'>
        {todos.length > 0 ? (
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        ) : (
          <div>No todo </div>
        )}
      </div>
    </div>
  )
}

export default LiftingStateUp