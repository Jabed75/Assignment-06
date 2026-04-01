import React from 'react';
import BannerImage from "../assets/banner.png";
import PlayBtn from "../assets/Play.png"

const Banner = () => {
    return (
        
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
      
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
            ✨ New Ai Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">
           Supercharge Your
            <br />
            
              Digital Workflow
            
          </h1>

          <p className="text-lg  max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
             Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#4F39F6] transition-all px-8 py-4 rounded-xl font-semibold text-lg shadow-xl  flex items-center gap-3 group text-white">
              Explore Products
             
            </button>
            <button className=" transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl  flex items-center gap-3 group text-blod">
              <img src={PlayBtn} />Watch Demo
              <span className="group-hover:translate-x-1 transition"></span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
     
    </div>
    
    );
};

export default Banner;