import React from "react";
import Plant from "./Plant";

const NewPlants = ({ data1 }) => {
    
  return (
    <div>
      <h1 className="text-5xl text-green-600 text-center">New Plants</h1>
      <p className="text-center text-lg max-w-3xl mx-auto my-6">
        Easily add your latest green additions by filling out the form below.
        Include details like plant name, category, care level, watering
        schedule, and more to keep track of your plant’s health and care
        routine.
      </p>
      <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-10">
        {data1.map((plant) => (
          <Plant key={plant._id} plant={plant}></Plant>
        ))}
      </div>
    </div>
  );
};

export default NewPlants;
