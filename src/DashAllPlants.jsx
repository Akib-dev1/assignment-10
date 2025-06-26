import React, { use } from "react";

const DashAllPlants = ({ plantsData }) => {
  const data = use(plantsData);
  return (
    <div>
      <h1 className="text-4xl text-green-600 font-bold text-center mb-6">
        All Plants
      </h1>
      <div className="overflow-x-auto bg-gray-400">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
                <th>Category</th>
                <th>Care Level</th>
                <th>Watering Frequency</th>
                <th>Last Watered</th>
                <th>Next Watered</th>
                <th>Health Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((plant, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{plant.name}</td>
                <td>{plant.category}</td>
                <td>{plant.careLevel}</td>
                <td>{plant.frequency}</td>
                <td>{plant.lastWatered}</td>
                <td>{plant.nextWatered}</td>
                <td>{plant.healthStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashAllPlants;
