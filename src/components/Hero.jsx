/* eslint-disable no-unused-vars */
import React from 'react';
import heroImage from '../assets/hero.jpg'; // Ganti dengan gambar hero yang kamu punya

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white pt-20">
      <div className="max-w-screen-xl mx-auto p-9 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
          <div className='text-center lg:text-left md:text-left' >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Ryo Codes</h1>
            <p className="text-lg mb-6">
              Your go-to destination for all things coding. Let&apos;s build something amazing together!
            </p>
            <button className="text-white bg-rPrimary hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
              Get started
            </button>
          </div>
          <div className='flex justify-center '>
            <img src={heroImage} alt="Hero Image" className="w-52 lg:w-96 md:w-80 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
