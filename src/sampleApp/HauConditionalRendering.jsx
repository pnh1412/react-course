import React from 'react'

function Login({ toogleAuthentication}) {
  return (
    <button type="button" onClick={toogleAuthentication}>Login</button>
  )
}
function Logout({ toogleAuthentication}) {
  return (
    <button type="button" onClick={toogleAuthentication}>Logout</button>
  )
}
function HauConditionalRendering() {
  const [isAuth, setIsAuth] = React.useState(false);

  function toggleAuthentication() {
    // setIsAuth(prevState => !prevState);
    setIsAuth((prevState) => {
      return !prevState
    })
  }
  
  let button = isAuth ? <Logout toogleAuthentication={toggleAuthentication} /> : <Login toogleAuthentication={toggleAuthentication} />;
  
  console.log('isAuth', isAuth)

  return (
    <div>
      <div>HauConditionalRendering</div>
      <button type="button" onClick={toggleAuthentication}>Toggle Authentication</button>
      <br />
      <h3>&& , ||</h3>
      {isAuth && (
        <div>isAuth is true</div>
      )}
      {isAuth || (
        <div>isAuth is false</div>
      )}
      <h3>ternary (? :)</h3>
      {isAuth ? (
        <>
          Please Logout
          <Logout toogleAuthentication={toggleAuthentication} />
        </>
      ) : (
        <>
        Please Login
          <Login toogleAuthentication={toggleAuthentication} />
        </>
      )}

      <h3>Element variables</h3>
      Button is here: {button || "N/A"}
    </div>
  )
}

export default HauConditionalRendering
