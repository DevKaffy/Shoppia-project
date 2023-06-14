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

     for (let i = 0; i < products.length; i += 11) {
       list.push(products.slice(i, i + 11));
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
                className=" w-full h-[100vh] flex flex-wrap items-center gap-8"
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
}

export default Products