import React from "react";
import Image from "next/image";
import exampleImage from "@/components/images/grImage.jpg"; 

const LemonSection = () => {
  return (
    <div className="bg-white w-full min-h-[768px] flex flex-col md:flex-row items-center justify-between p-8">
     
      <div className="md:w-1/2 text-left ml-20">
        <h4 className="font-bold">MEET LEMON</h4>
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Build a{""}
          <span className="block"> website that -</span>
          <span className="block">performs.</span>
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur
          <span className="block">adipiscing elit, sed do eiusmod.</span>
        </p>
        <div>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium mb-4">
            Buy Lemon
          </button>
          <button className="ml-16">
            &#8599; Or view in Designer
          </button>
        </div>
        <p className="text-gray-400">
          &#9733; Rated 4.9/5 from over 600 reviews.
        </p>
      </div>

     
      <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
        <Image
          src={exampleImage}
          alt="Person on phone"
          width={450}
          height={450}
          className="rounded-lg"
        />
       
        <div className="absolute bottom-16 right-72 bg-white py-14 px-5 rounded-lg shadow-lg hidden md:block">
          <p className="text-sm font-semibold text-gray-600">
            What is your primary goal for {""}
            <span className="block">using Lemon?</span>
          </p>
       
          <div className="flex items-center mt-2">
            <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
            <span className="text-gray-500">View in Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LemonSection;
