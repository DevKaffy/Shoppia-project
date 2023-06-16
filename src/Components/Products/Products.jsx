import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductsItems from './ProductsItems';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Products = () => {
  const slideRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const settings = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: 'ease',
  };

  const toggleSlide = (type) => {
    if (type === 'next' && currentPage < totalPages) {
      slideRef.current.goNext();
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (type === 'prev' && currentPage > 1) {
      slideRef.current.goBack();
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

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
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  return (
    <>
      <div>
        <Slide ref={slideRef} {...settings}>
          <div className="w-full flex flex-wrap items-center gap-8 mb-8">
            {products.map((product, index) => (
              <ProductsItems
                key={`products-${index}`}
                image={product.imageUrl}
                title={product.title}
                price={product.price}
                productId={product.id}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </Slide>
      </div>

      <div className="flex justify-end gap-4 mb-[2.5rem] w-full">
        <img src="/Fill With Left Arrow.png" alt="" onClick={() => toggleSlide('prev')} />
        <img src="/Fill with Right Arrow.png" alt="" onClick={() => toggleSlide('next')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {currentPage > 1 && (
          <button
            style={{ fontSize: '1.5rem', color: 'red', marginRight: '1rem' }}
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
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
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            style={{ fontSize: '1.5rem', color: 'red', marginLeft: '1rem' }}
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          >
            Next &gt;
          </button>
        )}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        {currentPage > 1 && (
          <button
            style={{ fontSize: "1.5rem", color: "red", marginRight: "1rem" }}
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          >
            &lt; Prev
          </button>
        )}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={`page-${index + 1}`}
            style={{
              fontSize: "1.5rem",
              margin: "0 0.5rem",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
              color: currentPage === index + 1 ? "red" : "black",
            }}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        
        {currentPage < totalPages && (
          <button
            style={{ fontSize: "1.5rem", color: "red", marginLeft: "1rem" }}
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          >
            Next &gt;
          </button>
        )}
      </div>
    </>
  );
};


export default Products;
