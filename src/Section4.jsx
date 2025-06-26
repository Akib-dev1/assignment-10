import React from "react";

const Section4 = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-green-600 mb-4">Offers</h1>
      <p className="text-center text-gray-700 mb-8">
        Check out our latest offers on a variety of plants and gardening
        supplies.
      </p>
      <div className="flex gap-5 max-xl:items-center justify-center lg:flex-wrap max-xl:flex-col">
        <img src="https://i.ibb.co.com/NgGbx185/image.png" className="md:max-w-3xl rounded-2xl shadow-lg" alt="" />
        <img src="https://i.ibb.co.com/8D1cK90S/image.png" className="md:max-w-3xl rounded-2xl shadow-lg" alt="" />
      </div>
    </div>
  );
};

export default Section4;
