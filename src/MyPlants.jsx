import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";
import MyPlant from "./MyPlant";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const { email } = user;
  const [plantsData, setPlantsData] = useState([]);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/plants/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setPlantsData(data);
        });
    }
  }, [email]);
  return (
    <div className="min-h-screen">
      {plantsData.length === 0 ? (
        <h1 className="text-5xl text-green-600 text-center mt-10">
          No Plants Added
        </h1>
      ) : (
        plantsData.map((plant) => <MyPlant key={plant._id} plant={plant} plantsData={plantsData} setPlantsData={setPlantsData}/>)
      )}
    </div>
  );
};

export default MyPlants;
