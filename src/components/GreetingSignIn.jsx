import React from 'react'
import Button from './Button'

function GreetingSignIn({ title, className, handleToggleAut }) {
  return (
    <div className={className}>
      <div>{title}</div>
      <Button 
        textButton='Please signin'
        onClick={handleToggleAut}
        // onClick={() => {
        //   setIsAut(true)
        // }}
      />
    </div>
  )
}

export default GreetingSignIn