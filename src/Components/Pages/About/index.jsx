import React from 'react'
import Layout from '../../Layout';
import './About.css'

const About = () => {
  return (
    <Layout>
      <main className="about-container">
        <div className="left-container">
          <div className="text-[3.3rem] font-semibold mb-[1rem]">Our Story</div>
          <div className='mb-[1rem]'>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </div>
          <div>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
        <div>
          <img src="/rightpic.png" alt="" />
        </div>
      </main>
    </Layout>
  );
}

export default About