import React from 'react';

// components
import Button from '../components/Button';
import GreetingLogout from '../components/GreetingLogout';
import GreetingSignIn from '../components/GreetingSignIn';

function GuestGreeting() {
  const [isAut, setIsAut] = React.useState(false);

  function handleToggleAut() {
    setIsAut(prevState => !prevState);
  }

  return (
    <div>
      <h2>Sample App: GuestGreeting</h2>

      {isAut ? (
        <GreetingLogout  
          className={isAut ? 'danger' : ''}
          title="Welcome to Tony" 
          handleToggleAut={handleToggleAut} 
        />
      ) : (
        <GreetingSignIn 
          className={isAut ? '' : 'success'}
          title="Please signin" 
          handleToggleAut={handleToggleAut} 
        />
      )}
    </div>
  )
}

export default GuestGreeting