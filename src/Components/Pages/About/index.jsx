import React from 'react'
import Layout from '../../Layout';
import { Link } from 'react-router-dom';
import './About.css'

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
              With a wide range of products and services tailored to campus
              needs, Shoppia provides a one-stop-shop for everything from
              textbooks and school supplies to dorm room decor and fitness gear.
              Our mission is to make campus life easier, more affordable, more
              enjoyable for students, by providing a convenient, reliable, and
              secure shopping experience.
            </div>
            <div>
              Our platform is built on a foundation of trust, with a commitment
              to customer service, quality products, and competitive prices.
              Whether you're a freshman just starting out a seasoned senior
              looking to finish strong, Shoppia is here to help you succeed in
              every aspect of campus life. Shoppia has more than 1 Million
              products to offer, growing at a very fast pace.
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
}

export default About