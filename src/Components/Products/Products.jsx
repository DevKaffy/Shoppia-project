import React from 'react'
import { products } from '../../data'
import ProductsItems from './ProductsItems'

const Products = () => {
  return (
    <div>
        {
            products.map((product, index)=>(
              <ProductsItems 
              key = {`products - ${index}`}
              image = {product.image}
              title = {product.title}
              price = {product.price}
               />
            ))
        }
    </div>
  )
}

export default Products