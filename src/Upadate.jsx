import React, { use } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const Upadate = ({ plantsData }) => {
  const plantData = use(plantsData);
  const { id } = useParams();
  const plant = plantData.find((plant) => plant._id === id);
  const handleUpdatePlant = (event) => {
    event.preventDefault();
    const form = event.target;
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

    const updatedPlant = {
      image,
      name,
      category,
      description,
      careLevel,
      frequency,
      lastWatered,
      nextWatered,
      healthStatus,
      email,
      userName,
    };
    fetch(`https://b11a10-server-side-akib-dev1.vercel.app/plants/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedPlant)
    }).then((res) => res.json())
        .then((data) => {
            if(data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Plant Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
  };
  return (
    <div>
      <form onSubmit={handleUpdatePlant}>
        <div className="bg-green-900 p-10 my-10">
          <h1 className="text-5xl text-center text-white mb-10">
            Update Plant
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset md:col-span-2 bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Image Url</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Image URL"
                name="image"
                defaultValue={plant.image}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Plant Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Plant Name"
                name="name"
                defaultValue={plant.name}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Category</label>
              <select
                name="category"
                id="category"
                className="select w-full select-bordered"
                defaultValue={plant.category}
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
                defaultValue={plant.description}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Care Level</label>
              <select
                name="careLevel"
                id="careLevel"
                className="select w-full select-bordered"
                defaultValue={plant.careLevel}
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
                defaultValue={plant.frequency}
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
              <input
                type="date"
                className="input w-full"
                name="lastWatered"
                defaultValue={plant.lastWatered}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Next Watering Date</label>
              <input
                type="date"
                className="input w-full"
                name="nextWatered"
                defaultValue={plant.nextWatered}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">Health Status</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Health Status"
                name="healthStatus"
                defaultValue={plant.healthStatus}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">User Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
                defaultValue={plant.email}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="User Name"
                name="userName"
                defaultValue={plant.userName}
              />
            </fieldset>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Update Plant"
              className="btn md:w-1/3 mt-6 text-xl btn-success"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upadate;
