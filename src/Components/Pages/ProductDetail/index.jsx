import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productDetail.css'

const ProductDetail = () => {
    const {id}= useParams()
    console.log("id: ", id);
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
    <div className='product-detail'>
        <img src={productDetail.imageUrl} alt="" />
        <div>
        <p>{productDetail.campus}</p>
        <p>{productDetail.description}</p>
        </div>
    </div>
    </>
  );
}

export default ProductDetail