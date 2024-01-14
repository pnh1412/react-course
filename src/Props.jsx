import React from 'react';
import PropTypes from 'prop-types';

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

// destructuring: props.firstName => { firstName } = props
// default value: { gender = "Male" }
// spread operator: { ...spreadPropsCity }
// rest operator: { ...restProps }
function PropWithDestructuring({ firstName, lastName, gender = "Male", country, 
city, textButton = "Click me", children, ...restProps }) {
  console.log('PropWithDestructuring:',  restProps)
  return (
    <div>
      firstName: {firstName} <br />
      lastName: {lastName} <br />
      gender: {gender} <br />
      country: {country} <br />
      city: {city} <br />
      <button {...restProps}>{textButton}</button> <br />

      Props children: {children}
    </div>
  )
}

PropWithDestructuring.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string,
  country: PropTypes.string,
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

  const spreadPropsCity = {
    country: 'VN',
    city: 'HCM',
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

      <h3>Props with Destructuring</h3>
      <PropWithDestructuring 
        firstName={brand} // string
        lastName="Tony" // string
        type="button"
        disabled={true}
        onClick={() => {}} 
        {...spreadPropsCity}
      >
        this is children
      </PropWithDestructuring>
    </div>
  )
}

export default Props