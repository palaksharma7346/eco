import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-[#FDF2F8] rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About Dhaage</h1>

        <p className="text-gray-700 text-lg">
          At <span className="font-semibold text-red-600">Dhaage</span>,we believe fashion is more than just fabric — it's a form of self-expression, identity, and art. our clothing is thoughtfully designed to celebrate individuality, comfort, and style. From everyday essentials to statement pieces, every thread is stitched with passion and purpose. 
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At Dhaage,our mission is to revive the soul of Indian tradition through thoughtfully crafted garments. We strive to create fashion that honors heritage, empowers artisans, and inspires confidence in every individual — blending comfort, culture, and contemporary style in every thread.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose Dhaage?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Every stitch is made with purpose</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
           At Dhaage, our vision is to become a global symbol of Indian craftsmanship — where every thread connects tradition with tomorrow.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the Dhaage Family</h3>
          <p className="text-gray-700 mb-4">
            Whether you're a fashion enthusiast, a professional, or just looking for something cool — Dhaage has something for everyone.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;