import React from 'react'
import products from '../../product'
import Product from '../Product'

const HomeScreen = () => {
  return (
    <div>
        <h1 className="text-center">Latest Products</h1>
        <div className="row">
            {
               products.map((product) =>
               <Product key={product._id} product={product} />
               )
            }
        </div>
    </div>
  )
}

export default HomeScreen