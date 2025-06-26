import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";

const DashMyPlants = () => {
  const { user } = use(AuthContext);
  const [plantsData, setPlantsData] = useState([]);
  useEffect(() => {
    fetch(`https://b11a10-server-side-akib-dev1.vercel.app/plants/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPlantsData(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-4xl text-green-600 font-bold text-center mb-6">
        My Plants
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-gray-400">
        <table className="table">
          {/* head */}
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
            {plantsData.map((plant, index) => (
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

export default DashMyPlants;
