import React from 'react';
import { useParams } from 'react-router-dom'

function TestExpressJSDetail() {
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    async function fecthProduct() {
      const res = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'GET'
      })
      const data = await res.json();
      setProduct(data.data)
    }

    if(!id) return;
    fecthProduct();
  }, [id]) 
  
  React.useEffect(() => {
    if(!isUpdate) return;
    inputRef.current.focus();
  }, [isUpdate])

  async function updateProduct() {
    if(isUpdate) {
      const bodyData = {
        "data": {
          "name": inputRef.current.value
        }
      }
      const res = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData)
      });
      const data = await res.json();
      console.log('data: ', data)
    } else {
      setIsUpdate(true);
    }
  }

  console.log('isUpdate: ', isUpdate)

  if(!product) {
    return <>Not data</>
  }

  return (
    <div>
      <div>
        Title: 
        <br />
        {isUpdate ? (
          <>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" 
              type="text" 
              defaultValue={product.name}
              ref={inputRef}
            />
          </>
        ) : (
          <>
            {product.name}
          </>
        )}
       
      </div>
      <button type="button" style={{ backgroundColor: 'green', color: '#fff' }}  onClick={updateProduct}>Update</button>
    </div>
  )
}

export default TestExpressJSDetail