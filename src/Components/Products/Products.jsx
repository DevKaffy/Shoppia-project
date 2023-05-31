import React,{useState} from 'react'
import { products } from '../../data'
import ProductsItems from './ProductsItems'

const Products = () => {
const [showAllProducts, setShowAllProducts] = useState(false)
const productToShow = showAllProducts?products:products.slice(0,12)
  return (
    <div className="product-items">
      {productToShow.map((product, index) => (
        <ProductsItems
          key={`products - ${index}`}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}

      <button
        className="bg-[#DB4444] text-white pt-4 pb-4 pr-12 pl-12 rounded-[4px] block mx-auto mt-[3.75rem]"
        onClick={() => setShowAllProducts(!showAllProducts)}
      >
        {showAllProducts ? "View less" : "  View All Products"}
      </button>
    </div>
  );
}

export default Products