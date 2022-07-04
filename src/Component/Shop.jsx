import React, { useEffect, useState } from 'react'
import Product from '../Component/Product/Product'
import './Shop'



const Shop = () => {
    const [shops,setShops] = useState([]);
    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        fetch('./cosmetics.json')
        .then(res =>res.json())
        .then(data =>setShops(data.products))

    },[])
  return (
    <div className='product-section'>
        <div className='product'>
      {
    shops.map(products => <Product
    // key={products.key}
    product ={products}
    ></Product>)
      }
       </div>
       <div className='cart'>
       </div>
    </div>
  )
}

export default Shop