"use client";
import { useState } from "react";

const AddVehicle = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    Make: "",
    Model: "",
    VID: "",
    Color: "",
    License_Plate: "",
    Odometer_Reading: 0,
    Rate: 0,
    Availability: 0,
  });

  const handleAddVehicle = (e: any) => {
    e.preventDefault();
    console.log("submit " + JSON.stringify(formData));

    const request = new Request("http://localhost/api/vehicles/addNew.php", {
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
  };

  const handleChange = (e: any) => {
    if (e.target.id == "Rate") {
      if (isNaN(e.target.value)) {
        console.warn("Rate field is not a valid number");
        e.target.className = "inputError";
        return;
      } else e.target.className = " ";
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
          <form
            onSubmit={handleAddVehicle}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              type="text"
              id="Make"
              placeholder="Enter Vehicle Make"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Model"
              placeholder="Enter Vehicle Model"
              onChange={handleChange}
            />
            <input
              type="text"
              id="VID"
              placeholder="Vehicle's Unique ID #"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Color"
              placeholder="Vehicle Colour"
              onChange={handleChange}
            />
            <input
              type="text"
              id="License_Plate"
              placeholder="Vehicle License Plate"
              onChange={handleChange}
            />
            <input
              type="number"
              id="Odometer_Reading"
              placeholder="Odometer Count on Vehicle"
              onChange={handleChange}
            />
            <input
              type="number"
              id="Rate"
              placeholder="Rate of Vehicle rental"
              onChange={handleChange}
            />
            <input
              type="number"
              id="Availability"
              placeholder="Availability of Vehicle, 0 = Unavailable, 1 = available"
              onChange={handleChange}
            />
            <input className="bg-slate-400" type="submit" value="Add Vehicle" />
          </form>
        </div>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default AddVehicle;
