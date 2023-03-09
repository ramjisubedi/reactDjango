import React, {useState, useEffect} from 'react'
//import products from '../../product'
import Product from '../Product'
import axois from 'axios'

const HomeScreen = () => {

  const [products , setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct(){
      const {data} = await axois.get('/api/product/')
      setProduct(data);
    }
    fetchProduct();
  },[])

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