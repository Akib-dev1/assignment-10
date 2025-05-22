import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "./AuthProvidor";

const AllPlants = ({ plantsData }) => {
  const plantData = use(plantsData);
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-green-600 text-center mt-10">All Plants</h1>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Health Status</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {plantData.map((plant, index) => (
              <tr key={plant._id}>
                <th>{index + 1}</th>
                <td>{plant.name}</td>
                <td>{plant.category}</td>
                <td>{plant.frequency}</td>
                <td>{plant.healthStatus}</td>
                <Link to={`/all-plants/${plant._id}`}>
                  <td className="btn my-4 btn-success btn-outline">
                    View Details
                  </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
