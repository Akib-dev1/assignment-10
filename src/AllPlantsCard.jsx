import React from "react";
import { Link } from "react-router";

const AllPlantsCard = ({ plant }) => {
  return (
    <div>
      <div className="card bg-base-100 h-full w-full shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={plant.image}
            alt={plant.name}
            className="rounded-xl max-h-60 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{plant.name}</h2>
          <p>{plant.description}</p>
          <p>Next Watering Date: {plant.nextWatered}</p>
          <p>Care Level: {plant.careLevel}</p>
          <div className="card-actions">
            <Link to={`/all-plants/${plant._id}`} className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPlantsCard;
