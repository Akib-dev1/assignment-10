import React, { use } from "react";
import { AuthContext } from "./AuthProvidor";
import Swal from "sweetalert2";

const AddPlants = () => {
  const { user } = use(AuthContext);
  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const careLevel = form.careLevel.value;
    const frequency = form.frequency.value;
    const lastWatered = form.lastWatered.value;
    const nextWatered = form.nextWatered.value;
    const healthStatus = form.healthStatus.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const loggedInUserEmail = user?.email;

    const plant = {
      image,
      name,
      category,
      description,
      loggedInUserEmail,
      careLevel,
      frequency,
      lastWatered,
      nextWatered,
      healthStatus,
      email,
      userName,
    };

    fetch("https://b11a10-server-side-akib-dev1.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added Plant",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <title>PlantPlanet - Add Plants</title>
      <form onSubmit={handleAddPlant}>
        <div className="bg-green-900 p-10 my-10">
          <h1 className="text-5xl text-center text-white mb-10">Add Plants</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset md:col-span-2 bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Image Url</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Image URL"
                name="image"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Plant Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Plant Name"
                name="name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Category</label>
              <select
                name="category"
                id="category"
                className="select w-full select-bordered"
                defaultValue={"1"}
              >
                <option disabled={true} value={"1"}>
                  Select a Category
                </option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Succulent">Succulent</option>
                <option value="Flowering">Flowering</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Description"
                name="description"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Care Level</label>
              <select
                name="careLevel"
                id="careLevel"
                className="select w-full select-bordered"
                defaultValue={"1"}
              >
                <option disabled={true} value={"1"}>
                  Select a Category
                </option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Watering Frequency</label>
              <select
                name="frequency"
                id="frequency"
                className="select w-full select-bordered"
                defaultValue={"1"}
              >
                <option disabled={true} value={"1"}>
                  Select Watering Frequency
                </option>
                <option value="Every 1 days">Every 1 days</option>
                <option value="Every 2 days">Every 2 days</option>
                <option value="Every 3 days">Every 3 days</option>
                <option value="Every 4 days">Every 4 days</option>
                <option value="Every 5 days">Every 5 days</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Last Watered Date</label>
              <input type="date" className="input w-full" name="lastWatered" />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Next Watering Date</label>
              <input type="date" className="input w-full" name="nextWatered" />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Health Status</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Health Status"
                name="healthStatus"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">User Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="User Name"
                name="userName"
              />
            </fieldset>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Add Plant"
              className="btn md:w-1/3 mt-6 text-xl btn-success"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPlants;
