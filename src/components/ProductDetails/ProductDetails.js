import React, { useEffect, useState } from 'react'
import { getAllProductId } from '../ApiService/api'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getAllProductId(id)
      setProductDetails(data)
    }
    fetchProductDetails()
  }, [id])
const handleBuyNow=()=>{
  window.confirm('Out Of Stock')
}

  return (
    <div className='details-container'>
      <img src={productDetails.image} alt='alt' className='product-img'></img>
      <div className='product-info'>
        <h2 className='product-title'>{productDetails.title}</h2>
        <p className='product-description'>
          {productDetails.description}
        </p>
        <p className='product-price'>${productDetails.price}</p>
        <button className='buy-now' onClick={handleBuyNow}>Buy Now</button>
        <Link to='/'>
          <button className='go-back'>Go Back Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails
