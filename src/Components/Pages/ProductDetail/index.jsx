import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id}= useParams()
const [productDetail, setproductDetail] = useState("")
    const fetchProduct = async () => {
  try {
    const response = await axios.get(
      `https://shoppia-production.up.railway.app/api/v1/products/${id}`,
  
    );
    const { data } = response.data;
   setproductDetail(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
    <div>
        <img src={productDetail.imageUrl} alt="" />
        <p>{productDetail.campus}</p>
    </div>
      <div>ProductDetail</div>
    </>
  );
}

export default ProductDetail