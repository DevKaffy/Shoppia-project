import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <main className="about-container">
        <div className="top-container">
          <div>
            <div className="text-[3.3rem] font-semibold mb-[1rem]">
              Our Story
            </div>
            <div className="mb-[1rem]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </div>
            <div>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
          <img src="/rightpic.png" alt="" />
        </div>
        <div className="flex flex-wrap gap-[1.5rem] mt-[8rem] items-center">
          <div>
            <div className="w-[23.12rem] h-[26.8rem] mb-[3rem]">
              <img className="contain" src="/Kafilat.jpg" alt="" />
            </div>
            <div className="text-2xl font-normal mb-2">
              Adewumi Kafilat Eniola
            </div>
            <div>Frontend Developer</div>
            <div className="flex items-center gap-[1rem] mt-[1rem]">
              <a href="https://twitter.com/adewumi_kafilat">
                <img src="/Icon-Twitter.svg" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/adewumi-kafilat-19a391194/">
                <img src="/Icon-Linkedin.svg" alt="" />
              </a>
              <a href="https://github.com/DevKaffy/Shoppia-project">
                <img className="w-6 h-6" src="/github-line.svg" alt="" />
              </a>
              <img src="/icon-instagram.svg" alt="" />
            </div>
          </div>
          <div>
            <div className="w-[23.12rem] h-[26.8rem] mb-[3rem]">
              <img className="cover" src="/Tracy.png" alt="" />
            </div>
            <div className="text-2xl font-normal mb-2">Mathew Ndubuisi</div>
            <div>Backend Developer</div>
            <div className="flex items-center gap-[1rem] mt-[1rem]">
              <img src="/Icon-Twitter.svg" alt="" />
              <a href="https://www.linkedin.com/in/matthew-ndubuisi-06192b254">
                <img src="/Icon-Linkedin.svg" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/matthew-ndubuisi-06192b254">
                <img className="w-6 h-6" src="/github-line.svg" alt="" />
              </a>
              <img src="/icon-instagram.svg" alt="" />
            </div>
          </div>
          <div>
            <img
              className="w-[23.12rem] h-[26.8rem] mb-[3rem]"
              src="/tracy.jpeg"
              alt=""
            />
            <div className="text-2xl font-normal mb-2">Tracy</div>
            <div>Frontend Developer</div>
            <div className="flex items-center gap-[1rem] mt-[1rem]">
              <a href="https://twitter.com/TWankio">
                <img src="/Icon-Twitter.svg" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/tracy-wankio-b2075675/">
                <img src="/Icon-Linkedin.svg" alt="" />
              </a>
              <a href="https://github.com/DevKaffy/Shoppia-project">
                <img className="w-6 h-6" src="/github-line.svg" alt="" />
              </a>
              <img src="/icon-instagram.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <Link to="/CheckOutPage">Check out</Link> <br />
          <Link to="/ProductUpload">Product Upload</Link>
        </div>
      </main>
    </Layout>
  );
};

export default About;
