import React from 'react';


// statless component
// traditional function component
export default function Button({ textButton = 'Default', danger = false, ...restProps }) {
  // JSX
  return (
    <button 
      className="button"
      style={{
        backgroundColor: danger ? 'red' : 'green',
      }} 
      type="button" 
      {...restProps}
    >
      {textButton}
    </button>
  );
}

// arrow function component
// const Button = () => {
//   // JSX
//   return (
//     <div>button</div>
//   );
// }
// export default Button;