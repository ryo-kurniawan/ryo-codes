/* eslint-disable no-unused-vars */
import React from 'react';
import profileImage from '../assets/hero.jpg'; // Ganti dengan gambar profil yang kamu miliki

const BioSection = () => {
  return (
    <section id='about' className="bg-white">
      <div className="max-w-screen-xl min-h-screen mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12">
          <div className="md:order-2">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 md:w-48 md:h-48 md:mb-0 md:rounded-lg md:overflow-hidden"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-6">
              Hi, I&apos;m Ryo Pakaya! I&apos;m passionate about coding and creating innovative solutions.
              With 2 years of experience in Software Engineering, I specialize in Frontend Developer.
              Let&apos;s collaborate and build amazing projects together.
            </p>
            <button className="text-white bg-rPrimary hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
