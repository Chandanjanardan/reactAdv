import React from 'react'
import useFetchProduct from './useFetchProduts'

function Productlist() {
    const {data,loading,error}=useFetchProduct("https://fakestoreapi.com/products")
    console.log(data)
  return (
    <div>Productlist</div>
  )
}

export default Productlist