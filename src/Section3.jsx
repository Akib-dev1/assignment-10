import React from "react";

const Section3 = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-green-600 mb-4">Categories</h1>
      <p className="text-lg text-center mx-auto max-w-3xl text-gray-700 mb-8">
        Explore different plant types to match your space and care level.
        Whether you're looking for low-maintenance indoor plants, vibrant
        flowering varieties, or drought-tolerant succulents — there's something
        for everyone.
      </p>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">🌿 Indoor</div>
        <div className="collapse-content text-sm">
          Low-light tolerant plants perfect for homes and offices. These plants
          purify air and thrive in indoor environments.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">🌸 Flowering</div>
        <div className="collapse-content text-sm">
          Beautiful plants that bloom flowers, adding color and freshness to
          your space. They need a bit more care for optimal blooms.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">🌳 Outdoor</div>
        <div className="collapse-content text-sm">
          Plants that thrive in natural sunlight and open-air environments.
          Perfect for gardens, balconies, and patios — often hardier and more
          weather-resistant.
        </div>
      </div>
      <div className="collapse collapse-arrow mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">🌵 Succulent</div>
        <div className="collapse-content text-sm">
          Water-storing, drought-resistant plants that are easy to maintain and
          great for sunny spots.
        </div>
      </div>
    </div>
  );
};

export default Section3;
