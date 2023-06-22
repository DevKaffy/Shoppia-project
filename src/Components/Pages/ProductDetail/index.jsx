import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productDetail.css'

const ProductDetail = () => {
    const {id}= useParams()
    console.log("id: ", id);
const [productDetail, setproductDetail] = useState("")
console.log(productDetail)
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
      <div className='w-full'>
        <img className='bg-cover' src={productDetail.imageUrl} alt="" />
      </div>
        <div className='flex flex-col gap-4'>
        <p className='font-bold text-[2rem]'>{productDetail.title}</p>
        <p className='font-semibold text-2xl'>{productDetail.campus}</p>
        <p className='font-medium text-xl'>{productDetail.category}</p>
        <p>{productDetail.description}</p>
        <p className='font-bold'>Price: {productDetail.price}</p>
        <p>Quantity: {productDetail.quantity}</p>
        </div>
    </div>
    </>
  );
}

export default ProductDetail