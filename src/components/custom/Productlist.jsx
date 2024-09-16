import React from 'react'
import useFetchProduts from './useFetchProduts'

function Productlist() {
    const {data,loading,error}=useFetchProduts("https://fakestoreapi.com/products")
    if(loading){
        return <p>Loading Products...</p>
    }
    if(error){
        return <p>Error:{error}</p>
    }
    console.log(data)
  return (
    <div>
        <h1>Product list</h1>
        <ul>
            {data.map(product=>(
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Productlist