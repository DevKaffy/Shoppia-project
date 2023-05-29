import React from "react";
import Category from "../../Category/Category";
import Layout from "../../Layout";
import Products from "../../Products/Products";
import Sidebar from "../../Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <div className="top-items">
          <Sidebar />
          <img className="pl-[2.8rem] mb-4 w-full" src="/image.jpeg" alt="" />
        </div>
        <div className="main-container">
          <div>
            <div className="flex justify-end gap-4 mb-[2.5rem]">
              <img src="/Fill With Left Arrow.png" alt="" />
              <img src="/Fill with Right Arrow.png" alt="" />
            </div>
            <div>
              <div className="flex gap-4 items-center mb-[1rem]">
                <img src="/Rectangle 18.png" alt="" />
                <div className="text-[#DB4444] font-semibold">Products</div>
              </div>
              <Products />
            </div>
          </div>
          <div className="categories">
            <div className="flex gap-4 items-center mb-[1rem]">
              <img src="/Rectangle 18.png" alt="" />
              <div className="text-[#DB4444] font-semibold">Categories</div>
            </div>
            <div className="text-[2.25rem] font-semibold mb-[3.75rem]">
              Browse By Category
            </div>
            <Category />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
