import React from "react";
import GetAllCustomers from "../services/AllCustomersData";
import AddCustomer from "../services/AddCustomer";
import DeleteCustomer from "../services/DeleteCustomer";

const Customers = () => {
  return (
    <main>
      <div>
        <AddCustomer />
        <DeleteCustomer />
      </div>
      <div>
        <GetAllCustomers />
      </div>
    </main>
  );
};

export default Customers;
