import React from 'react'
import { products } from '../../data'
import ProductsItems from './ProductsItems'

const Products = () => {
  return (
    <div className="product-items">
      {products.map((product, index) => (
        <ProductsItems
          key={`products - ${index}`}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
      <div className='flex items-center justify-center place-items-center'>
      <button className="bg-[#DB4444] text-white pt-4 pb-4 pr-12 pl-12">View All Products</button>
      </div>
    </div>
  );
}

export default Products