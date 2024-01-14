import React from 'react'

// component will be re-render when update state
// first render: first component render
// re-render (or next render): when update state

// when is the component re-render?
// 1. update state (state must different from previous state)

function State() {
  // state
  // compare value: string, boolean, number ...
  const [count, setCount] = React.useState(0); // local state of component
  const [loading, setLoading] = React.useState(true); // local state of component
  // compare reference: object, array, function ...
  const [messageObj, setMessageObj] = React.useState({ 
    message: 'message',
    author: {
      name: 'tony',
      id: 1
    }
  }); // memory A

  // actions
  function handleIncrement() {
    // setCount(count + 1);
    setCount((prevState) => {
      return prevState + 1;
    })
    setLoading(false)
  }

  function handleUpdateObject() {
    // messageObj.message = 'Hello'; // memory A don't work

    // should be create new object
    // const object = {
    //   ...messageObj, /// copy all properties of messageObj
    //   author: {
    //     ...messageObj.author,
    //     name: `tony ${Date.now()}`
    //   }
    // }
    // setMessageObj(object);

    // updater function ( or callback function)
    setMessageObj((prevState) => {
      return {
        ...prevState, /// copy all properties of messageObj
        author: {
          ...prevState.author,
          name: `tony ${Date.now()}`
        }
      }
    })
  }
  
  console.log('State: ', {
    count,
    loading,
    messageObj
  })

  // JSX
  return (
    <div>
      <h1>State</h1>
      Count: {count} times {count > 3 ? `please don't click` : 'please click'} <br />
      <button type="button" onClick={handleIncrement}>Increment</button>
      
      {/* inline function */}
      {/* <button type="button" onClick={() => setCount(count + 1)}>Increment</button> */}
      <br/>

      Loading: {loading ? 'Loading...' : 'Done'} <br />
    
      <h3>Update state with object</h3>
      <button type="button" onClick={handleUpdateObject}>Update Author</button>
      <div>
        Message: {messageObj.message} <br />
        Author: {messageObj.author.name}
      </div>
    </div>
  )
}

export default State