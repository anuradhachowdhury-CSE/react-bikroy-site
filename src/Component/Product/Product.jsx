import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {id,title,description,images,price,category,stock,brand,rating,discountPercentage} =props.product;

  return (
    <div className='Product-style'>
      <div className='img-detail'>
      <div className="img-style">
        <img src={images} alt="..." />
        </div>
        <div className='product-detail'>
        <h4>Id:{id}</h4>
        <h2>Title:{title}</h2>
        <h3>description:{description}</h3>
        <h3>Price:{price}</h3>
        <h3>Category:{category}</h3>
        </div>
        </div>
      <div className='rating-detail'>
       <h4><FontAwesomeIcon icon={faShoppingCart} />Rating:{rating}</h4>
       <h5>Stock:{stock}</h5>
       <h5>Brand:{brand}</h5>
       <h5>Discount-percentage{discountPercentage}</h5>
    </div>
    </div>
  )
}

export default Product