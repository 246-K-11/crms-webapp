"use client";
import { Input } from "postcss";
import { useState, useEffect } from "react";
// import

const UpdateVehicle = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [myParams, setMyParams] = useState<any | {}>({});
  const [vehicle, setVechile] = useState<any | {}>({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setMyParams({
      id: urlParams.get("id"),
    });
    console.log(myParams, { id: urlParams.get("id") });
    const URL =
      "http://localhost/api/vehicles/getVehicle.php?id=" + urlParams.get("id");
    fetch(URL, { method: "GET" })
      .then((response: any) => response.json())
      .then((theVehicle: any) => {
        setVechile(theVehicle);
      })
      .catch((err) => console.error(err));
  }, []);

  const [formData, setFormData] = useState({
    Make: "",
    Model: "",
    id: "",
    Color: "",
    License_Plate: "",
    Odometer_Reading: "",
    Rate: "",
    Availability: "",
  });

  const handleAddVehicle = (e: any) => {
    e.preventDefault();
    console.log("submit " + JSON.stringify(formData));
    const request = new Request("http://localhost/api/vehicles/update.php", {
      method: "POST",
      mode: "no-cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });

    fetch(request)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setMsg(result);
      })
      .catch((err) => console.error(err));
    setFormData({ ...formData, id: vehicle.id });
  };

  const handleChange = (e: any) => {
    if (e.target.id == "Rate") {
      if (isNaN(e.target.value)) {
        console.warn("Rate field is not a valid number");
        e.target.className = "inputError";
        return;
      } else e.target.className = " ";
    }
    if (e.target.id == "Availability" && e.target.value == 0) {
      setFormData({ ...formData, [e.target.id]: "Null" });
      return;
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {!msg ? (
        <div>
          <h1 className="ml-6">
            Updating Vehicle: {vehicle.Make} {vehicle.Model} ID:{vehicle.id}{" "}
          </h1>
          <form
            onSubmit={handleAddVehicle}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ml-2 mt-2  border-sold border-2 border-slate-500 rounded p-5"
          >
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Make"
              placeholder="Enter Vehicle Make"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Model"
              placeholder="Enter Vehicle Model"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Color"
              placeholder="Vehicle Colour"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="License_Plate"
              placeholder="Vehicle License Plate"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Odometer_Reading"
              placeholder="Odometer Count on Vehicle"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Rate"
              placeholder="Rate of Vehicle rental"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Availability"
              placeholder="Availability of Vehicle, 0 = Unavailable, 1 = available"
              onChange={handleChange}
            />
            <input className="addButton" type="submit" value="Update Vehicle" />
          </form>
        </div>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default UpdateVehicle;
