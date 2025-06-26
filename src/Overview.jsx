import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvidor";

const Overview = ({ plantsData }) => {
  const data = use(plantsData);
  const { user } = use(AuthContext);
  const [totalPlants, setTotalPlants] = useState(0);
  useEffect(() => {
    fetch(
      `https://b11a10-server-side-akib-dev1.vercel.app/plants/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPlants(data.length);
      });
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-4xl text-green-600 font-bold mb-6">Overview</h1>
      <div className="w-full bg-gray-300 p-10 rounded-2xl mb-10">
        <h1 className="text-2xl text-center">Welcome to Plant Care Overview Page</h1>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="bg-gray-300 p-6 rounded-2xl">
          <h1 className="text-2xl">Welcome, {user?.displayName || "Guest"}</h1>
          <div className="flex flex-wrap gap-8">
            <div className="avatar mt-4">
              <div className="w-24 rounded">
                <img src={user?.photoURL} />
              </div>
            </div>
            <div className="">
              <p className="mt-2">
                Name: {user?.displayName || "Not logged in"}
              </p>
              <p className="mt-2">Email: {user?.email || "Not logged in"}</p>
              <p className="mt-2">
                Status: {user?.emailVerified ? "Verified" : "Not Verified"}
              </p>
              <p className="mt-2">
                Last Login:{" "}
                {user?.metadata?.lastSignInTime
                  ? new Date(user.metadata.lastSignInTime).toLocaleString()
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 p-6 rounded-2xl">
          <h1 className="text-2xl mb-4">Stats</h1>
          <div className="stats shadow">
            <div className="stat">
              <div className="">Total Plants</div>
              <div className="stat-value text-primary">{data.length}</div>
            </div>

            <div className="stat">
              <div className="">Total My Plants</div>
              <div className="stat-value text-secondary">{totalPlants}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
