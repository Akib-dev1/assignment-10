import React, { use } from "react";
import { Link, useParams } from "react-router";

const PlantDetails = ({ plantsData }) => {
  const plantData = use(plantsData);
  const { id } = useParams();
  const plant = plantData.find((plant) => plant._id === id);
  return (
    <div className="h-screen w-11/12 mx-auto">
      <h1 className="text-5xl text-green-600 text-center my-5">
        Plant Details
      </h1>
      <div className="card my-5 max-md:grid card-side bg-base-100 shadow-sm gap-10">
        <figure>
          <img src={plant.image} alt="Movie" className="w-96 h-96" />
        </figure>
        <div className="card-body">
          <div className="max-md:text-sm gap-10 grid md:grid-cols-2">
            <h2 className="card-title">Name: {plant.name}</h2>
            <p className="md:text-lg">
              <span className="font-bold">Description: </span>
              {plant.description}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Category: </span>
              {plant.category}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Watering Frequency: </span>
              {plant.frequency}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Last Watered Date: </span>
              {plant.lastWatered}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Next Watering Date: </span>
              {plant.nextWatered}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Care Level: </span>
              {plant.careLevel}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Health Status: </span>
              {plant.healthStatus}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Added By User Name: </span>
              {plant.userName}
            </p>
            <p className="md:text-lg">
              <span className="font-bold">Added By User Email: </span>
              {plant.email}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to="/all-plants" className="btn btn-success">
              Back to All Plants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
