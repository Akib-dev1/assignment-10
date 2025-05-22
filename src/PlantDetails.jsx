import React, { use } from "react";
import { useParams } from "react-router";

const PlantDetails = ({ plantsData }) => {
  const plantData = use(plantsData);
  const { id } = useParams();
  const plant = plantData.find((plant) => plant._id === id);
  return (
    <div className="h-screen">
        <h1 className="text-5xl text-green-600 text-center my-5">Plant Details</h1>
      <div className="card my-5 card-side bg-base-100 shadow-sm gap-10">
        <figure>
          <img
            src={plant.image}
            alt="Movie"
            className="w-96 h-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {plant.name}</h2>
          <p className="text-lg">Description: {plant.description}</p>
          <p className="text-lg">Watering Frequency: {plant.frequency}</p>
          <p className="text-lg">Last Watered Date: {plant.lastWatered}</p>
          <p className="text-lg">Nex Watering Date: {plant.nextWatered}</p>
          <p className="text-lg">Health Status: {plant.healthStatus}</p>
          <p className="text-lg">Added By User Name: {plant.userName}</p>
          <p className="text-lg">Added By User Email: {plant.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
