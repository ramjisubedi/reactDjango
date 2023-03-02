import React from 'react'
import Rating from './Rating';

const Product = ({product}) => {
    console.log(product);
  return (
    <div className="col-3">
  
        <div className="card">
        
            <img src="http://placehold" alt="" />
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <div className="card-title">
                        <strong>{product.name}</strong>
                    </div>
                </a>
                <Rating value={product.rating} text={product.numReviews} color="#cccccc" />
            </div>
        </div>
    </div>
  )
}

export default Product