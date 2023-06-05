import React from 'react'
import Layout from '../../Layout';
import './Contact.css'

const Contact = () => {
  return (
    <Layout>
      <main className="contact">
        <div>
          <div className="border-b pb-8">
            <div className="flex items-center gap-4 pb-4">
              <img src="/icons-phone.svg" alt="" />
              <div className="font-medium">Call Us</div>
            </div>
            <div>We are available 24/7, 7 days a week.</div>
            <div className="pt-4">Phone: +2348116206920</div>
          </div>
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <img src="/public/icons-mail.svg" alt="" />
              <div className="font-medium">Write To Us</div>
            </div>
            <div className="pt-4">
              Fill out our form and we will contact you within 24 hours.
            </div>
            <div className="pt-4">Emails: customer@exclusive.com</div>
            <div className="pt-4">Emails: support@exclusive.com</div>
          </div>
        </div>
        <div className="pt-[2.5rem] pl-8 pr-8 border">
          <div className="input-container">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </main>
    </Layout>
  );
}

export default Contact