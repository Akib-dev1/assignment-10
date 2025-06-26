import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";
import MyPlant from "./MyPlant";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const { email } = user;
  const [plantsData, setPlantsData] = useState([]);
  useEffect(() => {
    if (email) {
      fetch(`https://b11a10-server-side-akib-dev1.vercel.app/plants/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setPlantsData(data);
        });
    }
  }, [email]);
  return (
    <div className="min-h-screen w-11/12 mx-auto">
      <title>PlantPlanet - My Plants</title>
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
