import React from 'react'
import { useNavigate } from 'react-router-dom';

function TestExpressJS() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([])

  async function getListProduct() {
    const res = await fetch('http://localhost:3000/api/product');
    const data = await res.json();
    setProducts(data.data);
  }

  //localhost:3000/api/product/1
  async function deleteItem(productId) {
    const res = await fetch(`http://localhost:3000/api/product/${productId}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    setProducts(data.data);
  }

  function viewDetail(productId) {
    // TODO: navigate to page detail /test-express/1
    navigate(`/test-express/${productId}`)
  }
    
  return (
    <div>
      <button 
        type="button" 
        style={{ backgroundColor: 'green', color: '#fff' }} 
        onClick={getListProduct}
      >
        Get List Product
      </button>
      <br /> <br />
      {products.length > 0 ? (
        <div>
          {products.map(product => (
            <div key={product.id}>
              Name: {product.name} <br />
              <button 
                type="button" 
                onClick={() => viewDetail(product.id)}
                style={{ backgroundColor: 'green', color: '#fff' }} 
              >
                View Detail
              </button> 
              <br />
              <button 
                type="button" 
                onClick={() => deleteItem(product.id)}
                style={{ backgroundColor: 'green', color: '#fff' }} 
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </div>
  )
}

export default TestExpressJS