import React from 'react'


/* - react hook lifycle nó sẽ chạy như này:
- phase mounting (first render): render -> useLayoutEffect -> useEffect
- khi user update stat -> phase updating (re-render): 
    render -> cleanunp useLayoutEffect -> useLayoutEffect -> cleanunp useEffect -> useEffect
- khi component bị unmount: cleanup useLayoutEffect -> cleanunp useEffect
*/

function createInitialForm() {
  console.log('createInitialForm')
  return {
    firstName: 'truong',
    lastName: 'tony'
  }
}

function LifecycleHook() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [age, setAge] = React.useState(42);
  // const firstName = React.useState('tony')

  // Passing the initial state directly: createInitialTodos() is only used for the initial render, you’re still calling this function on every render
  // const [form, setForm] = React.useState(createInitialForm())

  // Passing the initializer function: you’re passing createInitialTodos, which is the function itself. If you pass a function to useState, React will only call it during initialization.
  const [form, setForm] = React.useState(createInitialForm)
  const [count, setCount] = React.useState(0);

  function handleCount() {
    setCount(count + 1); // 1
    calcFunc(count); // 0
  }

  function calcFunc(countNumber) {
    // setCount(countNumber + 2); // 2
    setCount((prevState) => prevState + countNumber); // prevState = 1 + 0 = 1
  }
  console.log('LifecycleHook: ', {
    age
  })

  return (
    <div>
      <h2>LifecycleHook</h2>

      {isAuth && (
        <div>isAuth: mounting</div>
      )}

      <button 
        type="button" 
        onClick={() => {
          setIsAuth(prevState => !prevState)
          // firstName[1]('Hau')
        }}
      >
        Check 
      </button>
      <br />

      <h2>useState hooks</h2>

      {/* first name: {firstName[0]} */}

      <h2>State: only change</h2>
      <button 
        type="button" 
        onClick={() => {
          // auto batching state update -> chỉ update 1 lần
          // setAge(age + 1);
          // setAge(age + 1);
          // setAge(age + 1);

          // updater function
          setAge(prevState => prevState + 1);
          setAge(prevState => prevState + 1);
          setAge(prevState => prevState + 1);

          setForm(prevState => {
            return {
              ...prevState,
              firstName: 'Hau'
            }
          })
        }}
      >
        Update age 
      </button>
      <br />
      Age: {age}

      <h2>useState asynchronous</h2>
      <h3>Count: {count} </h3>
      <button type="button" onClick={handleCount}>
        Count++
      </button>

    </div>
  )
}

export default LifecycleHook