import React from 'react'

function HauList() {
  const [products, setProducts] = React.useState(null);
  
  function handleDelete(product) {
    const productsFiltered = products.filter(item => item.id !== product.id);
    setProducts(productsFiltered);
  }

  function handleAddProduct() {
    const products = [
      { id: 1, name: 'Product 1', price: 100, isStock: true },
      { id: 2, name: 'Product 2', price: 200, isStock: false },
      { id: 3, name: 'Product 3', price: 300, isStock: true },
      { id: 4, name: 'Product 4', price: 400, isStock: false },
    ]
    setProducts(products)
  }
  return (
    <div>
      <div>HauList & Keys</div>
      <button
      type="button"
      onClick={handleAddProduct}
      >
        Fetch products
      </button>
      <br />
      <ul className='productList'>
        {products && products.length > 0 ? (
          <>
            {products.map((product) =>{
              const styleTitle = {
                color: product.isStock ? 'red' : 'green',
                fontWeight: 'bold'
              }
            return (
              <li
              key={product.id}
              >
                Name:
                <span style={styleTitle}>
                  {product.name}
                </span>

                <br />

                Price: {product.price} <br />
                Stock: {product.isStock ? 'Yes' : 'No'} <br />
                <button 
                type = 'button'
                onClick = {() =>{
                  handleDelete(product)
                }}>
                  Delete
                </button>
              </li>
            )
            })}
          </>
        ) : (
          <li>No product</li>
        )}
      </ul>
    </div>
  )
}

export default HauList
