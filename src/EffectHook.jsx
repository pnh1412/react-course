import React from 'react'

/*
- Perform side effects from a function component after the function component renders.  (data fetching, subscriptions …)
- You can use more than a single effect in a component.
- Important: React runs the effects after every render - including the first render.

Dependencies array:
- The second argument which takes an array.
- The useEffect  only run one time if the second argument receives an empty array.
- The useEffect will re-run if the value changes.
*/

function EffectHook() {
  const [products, setProducts] = React.useState([]); 
  const [count, setCount] = React.useState(1);
  const [date, setDate] = React.useState();
  const [limit, setLimit] = React.useState(1);

  console.log(`--------- render ${count} times ---------`)
  // call api
  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(response => response.json())
      .then(json => setProducts(json))
  }, [limit])

  React.useEffect(() => {
    console.log('useEffect with no dependencies')
  }); // run every time the component render

  React.useEffect(() => {
    console.log("useEffect with empty array")
  }, []); // only run once time when component first render

  React.useEffect(() => {
    console.log("useEffect with dependencies")
  }, [count])
  
  const handleIncrement = () => {
    setCount(count + 1)
  }

  function updateLimit(event) {
    const limit = event.target.value;
    setLimit(limit);
  }

  console.log('limit:', limit) 

    
  
  return (
    <div>
      <h1>EffectHook</h1>

      <button type="button" onClick={handleIncrement}>Update Count {count}</button>
      <button 
        type="button" 
        onClick={() => {
          setDate(new Date().toLocaleTimeString());
        }}
      >
        Update Date {date}
      </button>

      <h3>Product</h3>
      Limit: 
      <select onChange={updateLimit} value={limit}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>

      <br /><br />

      {products.map(product => (
        <div key={product.id}>
          <div>Title: {product.title}</div>
          <div><img src={product.image} alt="" width={50} height={50} /></div>
        </div>
      ))}
    </div>
  )
}

export default EffectHook