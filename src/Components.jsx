import React from 'react';

import Button from './components/Button';

// statefulll components
function Components({ count }) {
  const [person, setPerson] = React.useState({
    firstName: 'tony',
    lastName: 'nguyen',
  })

  // const cancelUpdate = () => {
  //   console.log('cancel update')
  // }

  // jsx
  return (
    <div>
      <h1>Components</h1>
      First Name: {person.firstName} <br />
      Last Name: {person.lastName}

      <h3>Stateless component</h3>
      <Button 
        danger
        textButton="Cancel"
        // onClick={cancelUpdate}
        onClick={() => {
          console.log('cancel update')
        }}
      />
      <br />
      <Button 
        textButton="Submit Person"
        onClick={() => {
          setPerson((prevState) => {
            return {
              ...prevState,
              firstName: 'Peter',
            }
          })
        }}
      />

      <h3>Statefull component</h3>
      This is props from parent component: {count}
    </div>
  )
}

export default Components;