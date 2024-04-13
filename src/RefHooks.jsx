import React from 'react'
import Button from './components/Button';
import SelectField from './components/SelectField';


/* demo: https://codesandbox.io/p/sandbox/react-imperativehandle-sd735l?file=%2Fsrc%2FPost.js%3A11%2C19
    useRef
    - A way to we can access DOM element of HTML
    - Don't cause component re-render when change ref
    - Keep value during component re-render

    Usecase when using useRef:
    - save status each other action.
    - There are a few good use cases for refs in DOM element:
    - Managing focus, text selection, or media playback.
    - Triggering imperative animations.
    - Integrating with third-party DOM libraries.

    forwardRef
    - Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
    - It can be useful for some kinds of components, especially in reusable component libraries.

    useImperativeHandle 
    - is a React Hook lets you customize the method exposed as a ref.
    - only use with ref & forwardRef (if pass via component react)
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

const LastNameField = React.forwardRef((_, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const childRef = React.useRef(null);

    React.useImperativeHandle(ref, () => {
        return {
            showModal() {
                setIsOpen(prevState => !prevState)
            },
            getValue() {
                return childRef.current.value
            },
            styleFied() {
                childRef.current.focus();
                childRef.current.setSelectionRange(0, childRef.current.value.length);
                childRef.current.style.border = '1px solid red';
            }
        }
    })

    return (
        <div>
            Last Name:
            <input ref={childRef} type="text" />
            <br />
            Modal: {isOpen ? 'true' : 'false'}
        </div>
    )
})

function RefHooks() {
    const [forceUpdate, setForceUpdate] = React.useState(Date.now());
    const [value, setValue] = React.useState('');
    let countRef = React.useRef(0);
    const firstNameRef = React.useRef(null);
    const buttonFwRef = React.useRef(null);
    const selectRef = React.useRef(null);
    const lastNameRef = React.useRef(null);
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

    function onSubmit() {
        console.log('onSubmit: ', {
          lastName: lastNameRef.current.getValue()
        })
        lastNameRef.current.styleFied();
    }

    function showModal() {
        lastNameRef.current.showModal()
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

            <br />
            <br />
            <div>
                Form: <br />
                <LastNameField ref={lastNameRef} />

                <button type="button" onClick={showModal}>Show Modal</button>
                <button type="button" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default RefHooks