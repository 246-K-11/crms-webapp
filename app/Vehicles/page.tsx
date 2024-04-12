import React from "react";
import GetAllVehicles from "../services/AllVehiclesData";
import AddVehicle from "../services/AddVehicle";
import DeleteVehicle from "../services/DeleteVehicle";
const Vehicles = () => {
  return (
    <main>
      <div>
        <AddVehicle />
        <DeleteVehicle />
      </div>
      <div>
        <GetAllVehicles />;
      </div>
    </main>
  );
};

export default Vehicles;
