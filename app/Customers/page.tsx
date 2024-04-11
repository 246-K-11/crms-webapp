import React from "react";
import GetAllCustomers from "../services/AllCustomersData";
import AddCustomer from "../services/AddCustomer";

const Customers = () => {
  return (
    <main>
      <div>
        <AddCustomer />
      </div>
      <div>
        <GetAllCustomers />
      </div>
    </main>
  );
};

export default Customers;
