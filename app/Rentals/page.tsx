import React from "react";
import GetAllRentals from "../services/AllRentalsData";

const Rentals = () => {
  return (
    <main>
      <div>
        <GetAllRentals />
      </div>
    </main>
  );
};

export default Rentals;
