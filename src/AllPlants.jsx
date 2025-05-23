import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvidor";

const AllPlants = ({ plantsData, plantsDataSortCare, plantsDataSortNext }) => {
  const initialPlantData = use(plantsData);
  const plantsDataSortedCare = use(plantsDataSortCare);
  const plantsDataSortedNext = use(plantsDataSortNext);
  const [plantData, setPlantData] = useState(initialPlantData);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/all-plants/${id}`);
  };
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "Date") {
      setPlantData(plantsDataSortedNext);
    } else if (value === "Care") {
      setPlantData(plantsDataSortedCare);
    }
  };
  return (
    <div className="min-h-screen">
      <title>PlantPlanet - All Plants</title>
      <h1 className="text-5xl text-green-600 text-center mt-10">All Plants</h1>
      <div className="mt-4 flex items-center flex-wrap">
        <span className="mr-4 max-md:mb-2">Sort By: </span>
        <select
          name="Filter"
          id="filter"
          className="select select-bordered"
          onChange={handleSortChange}
          defaultValue={"sort"}
        >
          <option disabled={true} value={"sort"}>
            Sort By
          </option>
          <option value="Date">Next Watering Date</option>
          <option value="Care">Care Level</option>
        </select>
      </div>
      <div className="overflow-x-auto my-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Last Watered Date</th>
              <th>Next Watering Date</th>
              <th>Care Level</th>
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
                <td>{plant.lastWatered}</td>
                <td>{plant.nextWatered}</td>
                <td>{plant.careLevel}</td>
                <td
                  className="btn my-4 btn-success btn-outline"
                  onClick={() => handleNavigate(plant._id)}
                >
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
