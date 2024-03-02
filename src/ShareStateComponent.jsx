import React from 'react';


function ButtonOne({ count, handleIncrement}) {
  return (
    <button type="button" onClick={handleIncrement}>ButtonOne {count}</button>
  )
}

function ButtonTwo({ count, handleIncrement }) {
  return (
    <button type="button" onClick={handleIncrement}>ButtonTwo {count}</button>
  )
}

function ShareStateComponent() {
  const [count, setCount] = React.useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>ShareStateComponent</h1>
      <ButtonOne count={count} handleIncrement={handleIncrement} />
      <ButtonTwo count={count} handleIncrement={handleIncrement} />
    </div>
  )
}

export default ShareStateComponent