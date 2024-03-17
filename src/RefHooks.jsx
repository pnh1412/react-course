import React from 'react'
import Button from './components/Button';

/*
- useRef
    - use to access the DOM element in react.
    - keep value during component re-render
    - don't cause component render when the value change
*/


function RefHooks() {
    const [forceUpdate, setForceUpdate] = React.useState(Date.now());
    let countRef = React.useRef(0);
    const firstNameRef = React.useRef(null);
    let counter = 0;

    function handleClick() {
        counter = counter + 1;
        countRef.current = countRef.current + 1;
        
        firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length);
        firstNameRef.current.focus();
        firstNameRef.current.style.border = '1px solid red';
        setForceUpdate(Date.now())
    }

    // first render: 0
    // component re-render: 0
    console.log('refHooks: ', {
        forceUpdate,
        counter,
        count: countRef.current
    })


    return (
        <div>
            <h1>RefHooks: {forceUpdate}</h1>
            <input ref={firstNameRef} id="firstName" type="text" />
            <br /><br/>
            <Button onClick={handleClick}>Click me</Button>
        </div>
    )
}

export default RefHooks