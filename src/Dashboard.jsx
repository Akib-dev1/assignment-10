import React from "react";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex max-lg:flex-col gap-8 my-16">
        <div className="lg:h-screen min-w-72 bg-gray-200 rounded-2xl p-4">
          <h1 className="text-lg font-bold text-center mb-6 text-green-600">Dashboard</h1>
            <Link to="/dashboard" className={"btn btn-success w-full mb-4"}>
                Overview
          </Link>
          <Link to="/dashboard/all-plants" className={"btn btn-success w-full"}>
            All Plants
          </Link>
            <Link to="/dashboard/add-plants" className={"btn btn-success w-full mt-4"}>
                Add Plants
            </Link>
            <Link to="/dashboard/my-plants" className={"btn btn-success w-full mt-4"}>
                My Plants
            </Link>
        </div>
        <div className="bg-gray-200 dark:text-black rounded-2xl p-10 w-full">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
