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

      <button className="bg-[#DB4444] text-white pt-4 pb-4 pr-12 pl-12 rounded-[4px] block mx-auto mt-[3.75rem]">
        View All Products
      </button>
    </div>
  );
}

export default Products