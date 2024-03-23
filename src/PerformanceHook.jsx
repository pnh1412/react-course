import React from 'react'
import Button from './components/Button';
import SelectField from './components/SelectField';

/*
- performance hooks
    - memo

    - useCallback
    - useMemo

*/

const ComponentA = React.memo(({ count, person }) => {
    console.log('Component A render', person)
    return (
        <div>
            <h1>Component A: {count}</h1>
        </div>
    )
}, customEqual)

function customEqual(prevProps, nextProps) {
    console.log('customEqual: ', {prevProps, nextProps})
    return prevProps.person.lastName === nextProps.person.lastName
}

const ComponentB = React.memo(() => {
    console.log('Component B render')
    return (
        <div>
            <h1>Component B</h1>
        </div>
    )
})

const ComponentC = React.memo(() => {
    console.log('Component C render')
    return (
        <div>
            <h1>Component C</h1>
        </div>
    )
})

function PerformanceHook() {
    const [forceUpdate, setForceUpdate] = React.useState(Date.now());
    const [person, setPerson] = React.useState({
        firstName: 'Tony',
        lastName: 'Stark'
    })

    function handleForceUpdate() {
        setForceUpdate(Date.now())
        setPerson(prevState => {
            return {
                ...prevState,
                firstName: 'Steve',
                lastName: `tony ${Date.now()}`
            }
        })
    }

    return (
        <div>
            <h1>Performance Hook</h1>

            <ComponentA count={forceUpdate} person={person} />
            <ComponentB  number={1}/>
            <ComponentC  firstName="tony" />

            <button type="button" onClick={handleForceUpdate}>Increment</button>
           
        </div>
    )
}

export default PerformanceHook