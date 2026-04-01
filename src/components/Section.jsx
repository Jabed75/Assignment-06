import React from 'react';
import UserImg from "../assets/user.png";
import PackgeImg from "../assets/package.png"
import RockedImg from "../assets/rocket.png"
const Section = () => {
  return (
    <div className='py-10 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Get Started in 3 Steps</h2>
            <p className='mb-10'>Start using premium digital tools in minutes, not hours..</p>
            </div>
           <div className="flex gap-6 justify-center mt-10">

 
  <div className="bg-gray-100 p-6 rounded-xl w-64 text-center relative">
    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
      01
    </span>

    <div className="flex justify-center mb-4">
      <img src={UserImg} className="w-10 h-10" />
    </div>

    <h2 className="font-bold text-lg">Create Account</h2>
    <p className="text-sm text-gray-500">
      Sign up for free in seconds.
    </p>
  </div>


  <div className="bg-gray-100 p-6 rounded-xl w-64 text-center relative">
    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
      02
    </span>

    <div className="flex justify-center mb-4">
      <img src={PackgeImg} className="w-10 h-10" />
    </div>

    <h2 className="font-bold text-lg">Choose Products</h2>
    <p className="text-sm text-gray-500">
      Browse tools you need.
    </p>
  </div>

  <div className="bg-gray-100 p-6 rounded-xl w-64 text-center relative">
    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
      03
    </span>

    <div className="flex justify-center mb-4">
      <img src={RockedImg} className="w-10 h-10" />
    </div>

    <h2 className="font-bold text-lg">Start Creating</h2>
    <p className="text-sm text-gray-500">
      Start using tools instantly.
    </p>
  </div>

</div>
    </div>
               
  );
};

export default Section;
