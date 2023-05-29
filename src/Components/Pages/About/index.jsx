import React from 'react'
import Layout from '../../Layout';
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
              <img src="/Icon-Twitter.svg" alt="" />
              <img src="/icon-instagram.svg" alt="" />
              <img src="/Icon-Linkedin.svg" alt="" />
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
              <img src="/icon-instagram.svg" alt="" />
              <img src="/Icon-Linkedin.svg" alt="" />
            </div>
          </div>
          <div>
            <img
              className="w-[23.12rem] h-[26.8rem] mb-[3rem]"
              src="/Mathew.png"
              alt=""
            />
            <div className="text-2xl font-normal mb-2">Tracy</div>
            <div>Frontend Developer</div>
            <div className="flex items-center gap-[1rem] mt-[1rem]">
              <img src="/Icon-Twitter.svg" alt="" />
              <img src="/icon-instagram.svg" alt="" />
              <img src="/Icon-Linkedin.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About