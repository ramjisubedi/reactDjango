import React from 'react'
import products from '../../product'
import { useParams, Link } from "react-router-dom";
import Rating from '../Rating';

const ProductScreen = ({match}) => {
    const params = useParams();
    const product = products.find((p)=>p._id === params.id)
  return (
    (product)?
    <div>
        <Link to="/" > Go Back </Link>
        <div>
            <div>
                {product.name}
            </div>
            <div>
                {product.description}
            </div>
            <Rating value={product.rating} text="" color="primary" />
        </div>

    </div>:
    <div>Sorry Product not found</div>
  )
}

export default ProductScreen