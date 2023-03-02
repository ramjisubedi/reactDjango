import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
    console.log(product);
  return (
    <div className="col-3">
  
        <div className="card">
        
            <img src="http://placehold" alt="" />
            <div className="card-body">
                {/* <Link /> */}
                <Link to={`/product/${product._id}`} >
                  <div className="card-title">
                        <strong>{product.name}</strong>
                    </div>
                </Link>
                <div className="text">
                    {product.rating} from {product.numReviews} Reviews
                </div>
                <h3 className="text">
                    ${product.price} 
                </h3>
                <Rating value={product.rating} text={product.numReviews} color="#cccccc" />
            </div>
        </div>
    </div>
  )
}

export default Product