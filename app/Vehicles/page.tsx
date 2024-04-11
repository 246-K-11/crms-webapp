import React from "react";
import GetAllVehicles from "../services/AllVehiclesData";
import AddVehicle from "../services/AddVehicle";
const Vehicles = () => {
  return (
    <main>
      <div>
        <AddVehicle />
      </div>
      <div>
        <GetAllVehicles />;
      </div>
    </main>
  );
};

export default Vehicles;
