import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPlant = ({ plant, plantsData, setPlantsData }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b11a10-server-side-akib-dev1.vercel.app/plants/${id}`, {
          method: "DELETE",
        }).then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                const remainingPlants = plantsData.filter(plant => plant._id !== id);
                setPlantsData(remainingPlants);
              Swal.fire({
                title: "Deleted!",
                text: "Your plant has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl text-green-600 text-center mt-10">My Plants</h1>
      <div className="card card-side my-10 bg-base-100 shadow-sm">
        <figure>
          <img
            src={plant.image}
            alt="Movie"
            className="w-52 h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {plant.name}</h2>
          <p>Description: {plant.description}</p>
          <p>Care Level: {plant.careLevel}</p>
          <p>Health Status: {plant.healthStatus}</p>
          <div className="card-actions justify-end">
            <Link to={`/all-plants/${plant._id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
            <Link to={`/my-plants/update/${plant._id}`}><button className="btn btn-primary">Update</button></Link>
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(plant._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlant;
