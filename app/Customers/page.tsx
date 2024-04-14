import React from "react";
import GetAllCustomers from "../services/AllCustomersData";
import DeleteCustomer from "../services/DeleteCustomer";

const Customers = () => {
  return (
    <main>
      <div>
        <GetAllCustomers />
      </div>
    </main>
  );
};

export default Customers;
