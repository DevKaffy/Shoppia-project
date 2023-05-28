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
          <img className="pl-[2.8rem] mb-4" src="/Frame 560.png" alt="" />
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
              <div className="text-[2.25rem] font-semibold mb-[3.75rem]">
                Explore Our Products
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

          <div className="categories">
            <div className="flex gap-4 items-center mb-[1rem]">
              <img src="/Rectangle 18.png" alt="" />
              <div className="text-[#DB4444] font-semibold">This month</div>
            </div>
            <div className="flex items-center justify-between ">
              <div className="text-[2.25rem] font-semibold">
                Best Selling Products
              </div>
              <button className="bg-[#DB4444] pt-4 pb-4 pr-12 pl-12 rounded-[4px] text-white">
                View All
              </button>
            </div>
          </div>
          <Category />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
