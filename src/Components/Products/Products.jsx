import React,{useState, useRef} from 'react'
import { useEffect } from 'react'
import { products } from '../../data'
import { Slide } from 'react-slideshow-image'
import ProductsItems from './ProductsItems'
import "react-slideshow-image/dist/styles.css";


const Products = () => {
  const slideRef = useRef(null);
  const [imageGroups, setImageGroups] = useState([]);

  const settings = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

   const toggleSlide = (type) => {
     if (type === "next") {
       slideRef.current.goNext();
     } else if (type === "prev") {
       slideRef.current.goBack();
     }
   };

   useEffect(() => {
     const list = [];

     for (let i = 0; i < products.length; i += 12) {
        const sliceProducts = products.slice(i, i + 12);
       list.push(sliceProducts);
     }

     setImageGroups(list);
   }, []);

  return (
    <>
      <div>
        <Slide ref={slideRef} {...settings}>
          {imageGroups.map((imgGroup, index) => {
            return (
              <div
                key={`grp-${index}-key`}
                className="w-full flex flex-wrap items-center gap-8 mb-8"
              >
                {imgGroup.map((product, index) => (
                  <ProductsItems
                    key={`products - ${index}`}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </div>
            );
          })}
        </Slide>
      </div>

      <div className="flex justify-end gap-4 mb-[2.5rem] w-full">
        <img
          src="/Fill With Left Arrow.png"
          alt=""
          onClick={() => toggleSlide("prev")}
        />
        <img
          src="/Fill with Right Arrow.png"
          alt=""
          onClick={() => toggleSlide("next")}
        />
      </div>
    </>
  );
        };
  export default Products;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductsItems from './ProductsItems';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://shoppia-production.up.railway.app/api/v1/products', {
//           params: {
//             page: currentPage,
//             limit: 10,
//           },
//         });
//         const { data } = response.data;
//         console.log(data);
//         setProducts(data.products);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="product-items">
//       {products.map((product, index) => (
//         <ProductsItems
//           key={`products-${index}`}
//           image={product.imageUrl}
//           title={product.title}
//           price={product.price}
//           productId={product.id}
//         />
//       ))}

//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
//         {currentPage > 1 && (
//           <button
//             style={{ fontSize: '1.5rem', color: 'red', marginRight: '1rem' }}
//             onClick={() => handlePageChange(currentPage - 1)}
//           >
//             &lt; Prev
//           </button>
//         )}

//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={`page-${index + 1}`}
//             style={{
//               fontSize: '1.5rem',
//               margin: '0 0.5rem',
//               fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
//               color: currentPage === index + 1 ? 'red' : 'black',
//             }}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {currentPage < totalPages && (
//           <button
//             style={{ fontSize: '1.5rem', color: 'red', marginLeft: '1rem' }}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             Next &gt;
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;