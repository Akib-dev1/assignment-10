import React from "react";

const Section2 = () => {
  return (
    <div>
      <h1 className="text-5xl text-green-600 text-center">
        Beginner-Friendly Plants
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto my-6">
        Perfect for new plant parents, these low-maintenance plants are easy to care for, forgiving of small mistakes, and thrive with minimal attention. They’re a great way to build confidence and bring greenery into any space.
      </p>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Succulents: Aloe Vera, Echeveria, Jade Plant
        </summary>
        <div className="collapse-content text-base">
          Known for storing water in their leaves, they’re perfect for dry conditions and easy care.
        </div>
      </details>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Flowering Plants: African Violet, Geranium, Anthurium
        </summary>
        <div className="collapse-content text-base">
          These plants add color and beauty with their vibrant blooms.
        </div>
      </details>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Herbs: Basil, Mint, Rosemary
        </summary>
        <div className="collapse-content text-base">
          Ideal for kitchen gardens, they’re useful, fragrant, and easy to grow in pots.
        </div>
      </details>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Indoor Plants: Snake Plant, Peace Lily, ZZ Plant
        </summary>
        <div className="collapse-content text-base">
          These thrive in indoor environments and require minimal sunlight.
        </div>
      </details>
    </div>
  );
};

export default Section2;
