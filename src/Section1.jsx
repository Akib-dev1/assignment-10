import React from "react";

const Section1 = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-green-600 text-center">
        Top Plant Care Mistakes
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto my-6">
        Many plant lovers overwater or place their plants in the wrong lighting
        conditions, leading to poor growth or root rot. Avoiding these common
        mistakes can keep your plants healthy and thriving.
      </p>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Are you overwatering your plants without checking the soil first?
        </summary>
        <div className="collapse-content text-base">
          Always check if the top 1–2 inches of soil are dry before watering to prevent root rot.
        </div>
      </details>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Did you place your plant where it gets too much or too little light?
        </summary>
        <div className="collapse-content text-base">
          Research your plant’s light needs and place it in bright, indirect sunlight or shade as required.
        </div>
      </details>
      <details className="collapse my-8 text-xl bg-base-100 border-base-300 border">
        <summary className="collapse-title font-semibold">
          Are you ignoring the specific needs of each plant type?
        </summary>
        <div className="collapse-content text-base">
          Understand the care routine for each plant—watering frequency, humidity, soil type—to help them thrive.
        </div>
      </details>
    </div>
  );
};

export default Section1;
