import React from 'react'
import Button from './components/Button';
import SelectField from './components/SelectField';

/*
- useRef
    - use to access the DOM element in react.
    - keep value during component re-render
    - don't cause component render when the value change
- forwardRef
    - use to pass ref through the react function component
*/

// const ButtonRef = (ref) => {
//     return (
//         <button ref={ref} type="button">Click me ref</button>
//     )
// }

const ButtonRef = React.forwardRef((props, ref) => {
    console.log('ButtonRef: ', {
        ref,
        props
    })
    return (
        <button ref={ref} type="button">Click me ref</button>
    )
})

function RefHooks() {
    const [forceUpdate, setForceUpdate] = React.useState(Date.now());
    const [value, setValue] = React.useState('');
    let countRef = React.useRef(0);
    const firstNameRef = React.useRef(null);
    const buttonFwRef = React.useRef(null);
    const selectRef = React.useRef(null);
    let counter = 0;

    function handleClick() {
        counter = counter + 1;
        countRef.current = countRef.current + 1;
        
        firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length);
        firstNameRef.current.focus();
        firstNameRef.current.style.border = '1px solid red';
        setForceUpdate(Date.now())
    }

    function handleSelect() {
        console.log('handleSelect: ', {
            value,
            valueSelect: selectRef.current.value
        })
    }

    // first render: 0
    // component re-render: 0
    console.log('refHooks: ', {
        forceUpdate,
        counter,
        countRef: countRef.current,
        buttonFwRef: buttonFwRef.current
    })

    return (
        <div>
            <h1>RefHooks: {forceUpdate}</h1>
            <input ref={firstNameRef} id="firstName" type="text" />
            <br /><br/>
            <Button onClick={handleClick}>Click me</Button>

            <h3>forward ref</h3>
            <ButtonRef ref={buttonFwRef} firstName="tony" />

            <h3>Get ref of Select Field</h3>
            <SelectField  
                ref={selectRef}
                onChange={(value) => {
                    console.log('select me: ', value)
                    setValue(value);
                }} 
            />
            <br />
            <br />
            <Button onClick={handleSelect} textButton="Select me" />
        </div>
    )
}

export default RefHooks