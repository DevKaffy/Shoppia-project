import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsItems from './ProductsItems';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://shoppia-production.up.railway.app/api/v1/products', {
          params: {
            page: currentPage,
            limit: 10,
          },
        });
        const { data } = response.data;
        console.log(data);
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-items">
      {products.map((product, index) => (
        <ProductsItems
          key={`products-${index}`}
          image={product.imageUrl}
          title={product.title}
          price={product.price}
        />
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {currentPage > 1 && (
          <button
            style={{ fontSize: '1.5rem', color: 'red', marginRight: '1rem' }}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt; Prev
          </button>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={`page-${index + 1}`}
            style={{
              fontSize: '1.5rem',
              margin: '0 0.5rem',
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
              color: currentPage === index + 1 ? 'red' : 'black',
            }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            style={{ fontSize: '1.5rem', color: 'red', marginLeft: '1rem' }}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;



