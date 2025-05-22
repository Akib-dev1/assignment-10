import React, { use } from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import NewPlants from "./NewPlants";

const Home = ({ plantsData }) => {
  const data = use(plantsData);
  const data1 = data.slice(0, 6);
  return (
    <div>
      <title>PlantPlanet - Home</title>
      <Hero />
      <NewPlants data1={data1} />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
