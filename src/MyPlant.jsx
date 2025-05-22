import React from "react";
import { Link } from "react-router";

const MyPlant = ({ plant }) => {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-green-600 text-center mt-10">My Plants</h1>
      <div className="card card-side my-10 bg-base-100 shadow-sm">
        <figure>
          <img
            src={plant.image}
            alt="Movie"
            className="w-52 h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {plant.name}</h2>
          <p>Description: {plant.description}</p>
          <p>Care Level: {plant.careLevel}</p>
          <p>Health Status: {plant.healthStatus}</p>
          <div className="card-actions justify-end">
            <Link to={`/all-plants/${plant._id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlant;
