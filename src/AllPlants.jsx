import React, { use, useState } from "react";
import AllPlantsCard from "./AllPlantsCard";

const AllPlants = ({ plantsData, plantsDataSortCare, plantsDataSortNext }) => {
  const initialPlantData = use(plantsData);
  const plantsDataSortedCare = use(plantsDataSortCare);
  const plantsDataSortedNext = use(plantsDataSortNext);
  const [plantData, setPlantData] = useState(initialPlantData);
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "Date") {
      setPlantData(plantsDataSortedNext);
    } else if (value === "Care") {
      setPlantData(plantsDataSortedCare);
    }
  };
  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === "Easy") {
      setPlantData(initialPlantData.filter((plant) => plant.careLevel === "Easy"));
    } else if (value === "Moderate") {
      setPlantData(initialPlantData.filter((plant) => plant.careLevel === "Moderate"));
    } else if (value === "Difficult") {
      setPlantData(initialPlantData.filter((plant) => plant.careLevel === "Difficult"));
    }
  };
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <title>PlantPlanet - All Plants</title>
      <h1 className="text-5xl text-green-600 text-center mt-10">All Plants</h1>
      <div className="flex justify-between gap-4 flex-wrap items-center">
        <div className="mt-4 flex items-center flex-wrap">
          <span className="mr-4 max-md:mb-2">Sort By: </span>
          <select
            name="Sort"
            id="sort"
            className="select select-bordered mt-2"
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
        <div className="mt-4 flex items-center flex-wrap">
          <span className="mr-4 max-md:mb-2">Filter By: </span>
          <select
            name="Filter"
            id="filter"
            className="select mt-2 select-bordered"
            onChange={handleFilterChange}
            defaultValue={"filter"}
          >
            <option disabled={true} value={"filter"}>
              Filter By
            </option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>
      </div>
      <div className="grid my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plantData.map((plant) => (
          <AllPlantsCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlants;
