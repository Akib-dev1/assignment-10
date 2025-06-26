import React, { use } from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import NewPlants from "./NewPlants";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Home = ({ plantsData }) => {
  const data = use(plantsData);
  const data1 = data.slice(0, 6);
  return (
    <div className="w-11/12 mx-auto">
      <title>PlantPlanet - Home</title>
      <Hero />
      <div id="new-plants" className="pt-24">
        <NewPlants data1={data1} />
      </div>
      <div id="plant-care-mistakes" className="pt-24">
        <Section1 />
      </div>
      <div className="pt-24" id="beginner-friendly-plants">
        <Section2 />
      </div>
      <div className="pt-24" id="categories">
        <Section3 />
      </div>
      <div className="pt-24" id="offers">
        <Section4 />
      </div>
      <div className="pt-24" id="about-us">
        <Section5 />
      </div>
    </div>
  );
};

export default Home;
