import React from 'react'


// inline css: can't reuse style
// css global: css can be override same name class
function CSS() {
  return (
    <div>
      <h2 
        className='heading'
        style={{
          color: '#f00'
        }}
      >
        CSS
      </h2>
    </div>
  )
}

export default CSS