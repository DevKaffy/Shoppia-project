import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <Layout>
      <main>
        <div className="mx-auto py-[5rem] w-[50%] flex flex-col items-center justify-center">
          <h1 className="font-medium text-[6rem] mb-[1rem]">404 Not Found</h1>
          <p className="mb-4">Your visited page not found. You may go to home page</p>
          <button className="bg-[#DB4444] rounded-[5px] px-8 py-4">
          <Link to="/">Back to home page</Link>
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Notfound;
