import React from "react";
import GetAllCustomers from "../services/AllCustomersData";

const Rentals = () => {
  return (
    <main>
      <div>
        <GetAllCustomers />
      </div>
    </main>
  );
};

export default Rentals;
