import React from 'react'
import Button from './components/Button';
import SelectField from './components/SelectField';

/*
- performance hooks
    - memo
    - useCallback
    - useMemo

memo
- dùng để prevent component re-render ko cần thiết khi update state ko có liên quan component đó
- nó có tham số thứ 2 là 1 function custom
    - hàm này chỉ dùng để chỉ định những cái pros nào thay đổi thì component sẽ re-render
    
useCallback
- Returns  a memorized callback.
- Callback function will re-runs if one of the dependencies has changed.
- Every callback function should be memoized to prevent useless re-rendering of child components 
that use the callback function” is the reasoning of his teammates.

Notes: chỉ nên xài useCallback when component được bọc memo

useMemo
- Returns  a memorized value.
- useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array.
- During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.
- If during next renderings the dependencies don’t change, then useMemo() doesn’t invoke compute but returns the memoized value.
- But if dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.
*/

const ComponentA = React.memo(({ count, person }) => {
    console.log('Component A render', person)
    return (
        <div>
            <h1>Component A: {count}</h1>
        </div>
    )
})
// }, customEqual)

// hàm này chỉ dùng để chỉ định những cái pros nào thay đổi thì component sẽ re-render
// function customEqual(prevProps, nextProps) {
//     return prevProps.person.lastName === nextProps.person.lastName
// }
 
const ComponentB = React.memo(({ person, handleUpdateComponentB }) => {
    console.log('Component B render', {
        person
    })
    return (
        <div style={{ display: 'flex' }}>
            <h1>Component B</h1>
            <button type="button" onClick={handleUpdateComponentB}>Update component B</button>            
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
    const [carts, setCarts] = React.useState([
        { id: 1, name: 'lapptop', quality: 10, price: 10},
        { id: 2, name: 'macbook', quality: 2, price: 2},
        { id: 3, name: 'pdf', quality: 3, price: 2}
    ])

    const total = React.useMemo(() => {
        console.log('useMemo: ')
        return carts.reduce((acc, curr) => acc = acc + curr.quality * curr.price, 0)
    }, [carts]);

    function handleForceUpdate() {
        setForceUpdate(Date.now())
        // setPerson(prevState => {
        //     return {
        //         ...prevState,
        //         firstName: 'Steve',
        //         lastName: `tony ${Date.now()}`
        //     }
        // })
    }

    // re-create when component re-render , memory A, memory ??
    // function handleUpdateComponentB() {
    //     console.log('handleUpdateComponentB')
    // }

    const handleUpdateComponentB = React.useCallback(() => {
        console.log('handleUpdateComponentB')
    }, [forceUpdate])

    console.log('forceUpdate: ', forceUpdate)

    return (
        <div>
            <h1>Performance Hook</h1>
            <button type="button" onClick={handleForceUpdate}>Force Update</button>
            Total: {total} <br />
            <ComponentA count={forceUpdate} person={person} />
            <ComponentB number={1} person={person} handleUpdateComponentB={handleUpdateComponentB}  />
            <ComponentC firstName="tony" />

           
        </div>
    )
}

export default PerformanceHook