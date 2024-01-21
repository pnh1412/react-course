import React from 'react';

function Login({ toggleAuthenticate }) {
  return (
    <button type="button" onClick={toggleAuthenticate}>Login</button>
  )
}

function Logout({ toggleAuthenticate }) {
  return (
    <button type="button" onClick={toggleAuthenticate}>Logout</button>
  )
}

function ConditionalRendering() {
  const [isAuth, setIsAuth] = React.useState(false);
  function toggleAuthenticate() {
    // setIsAuth(prevState => !prevState); 
    setIsAuth((prevState) => {
      return !prevState
    })
  }

  // let button = null;
  // if(isAuth) {
  //   button = <Logout toggleAuthenticate={toggleAuthenticate} />
  // } else {
  //   button = <Login toggleAuthenticate={toggleAuthenticate} />
  // }
  let button = isAuth ? <Logout toggleAuthenticate={toggleAuthenticate} /> : <Login toggleAuthenticate={toggleAuthenticate} />

  console.log('isAuth', isAuth)

  return (
    <div>
      <h1>ConditionalRendering</h1>

      <button type="button" onClick={toggleAuthenticate}>Toggle Authenticate</button>

      <br />
      <h3>&& , ||</h3>
      {isAuth && (
        <div>isAuth is true</div>
      )}
      {isAuth || <div>isAuth is false</div>}

      <h3>ternary (? :)</h3>
      {isAuth ? (
        <>
          Please logout
          <Logout toggleAuthenticate={toggleAuthenticate} />
        </>
      ) : (
        <>
          Please login
          <Login toggleAuthenticate={toggleAuthenticate} />
        </>
      )}

      <h3>Element Variables</h3>
      Button is here: {button || "N/A"}
    </div>
  )
}

export default ConditionalRendering