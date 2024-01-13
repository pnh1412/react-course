import React from 'react';

function Person(props) {
  console.log(props)
  const ElementComponent = props.elementComponent;
  
  return (
    <div style={{ color: 'green' }}>
      First Name: {props.firstName} <br />
      {/* optional chaining */}
      City: {props.address?.city} <br />
      {/* array props */}
      Hobbies: 
      <ul>
        {props.hobbies.map((hobby, index) => {
          return (
            <li key={index}>{hobby}</li>
          )
        })}
      </ul>
      Married: {props.isMarried ? 'Yes' : 'No'} <br />

      <div onClick={props.handleAddTask}>function props: please click</div>
      <div>JSX expression: {props.renderText}</div>
      <div> React component: {props.buttonComponent}</div>
      <div> React element: <ElementComponent /></div>
    </div>
  )
}


function Button() {
  return (
    <button>Click me</button>
  )
}

function Props() {
  const brand = 'React';
  
  function handleAddTask() {
    console.log('Add task')
  }

  function renderText() {
    return (
      <span>render text</span>
    )
  }

  return (
    <div>
      <h2>Props</h2>

      <Person 
        firstName={brand} // string
        age={25} // number
        address={{ // object
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: 10001
        }}
        hobbies={['music', 'movies', 'travel']} // array
        //  isMarried // boolean shorthand
        isMarried={false} // boolean
        handleAddTask={handleAddTask} // function
        renderText={renderText()} // JSX expression
        buttonComponent={<Button />} // React component
        elementComponent={Button} // React element
      />
    </div>
  )
}

export default Props