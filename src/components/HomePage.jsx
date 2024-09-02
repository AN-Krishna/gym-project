import React from 'react';
import mainPic from "../assets/mainPic.jpg"
import gymPic3 from "../assets/gymPic3.jpg"

const HomePage = () => {
  return (
    <section id='Home-page'>
    <div className="relative border-b border-neutral-500">
      <img
        className=" w-full"
        src={gymPic3}
        alt="gymPic1"
        style={{ height: '100vh' }} 
      />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center">
        <h1 className=" text-orange-500 font-bold text-4xl md:text-5xl lg:text-6xl">
            Welcome to Our Gym
        </h1>
        <p className="text-black text-lg mt-4 max-w-lg mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
    </section>
  );
};

export default HomePage;