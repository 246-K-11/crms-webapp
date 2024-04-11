"use client";
import { useState } from "react";

const AddCustomer = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Address: "",
    Email_Address: "",
    Phone_Number: "",
    Driver_License_Number: "",
    Province_Of_Issue: "",
    License_Expiration_Date: "",
    Card_Number: "",
    Billing_Address: "",
    Card_Expiration_Date: "",

    // optionals
    Vehicle_Make: "",
    Rental_Duration: "",
    Pick_Up_Location: "",
    Drop_Off_Location: "",
  });

  const handleAddCustomer = (e: any) => {
    e.preventDefault();
    console.log("submit " + JSON.stringify(formData));

    const request = new Request("http://localhost/api/customers/addNew.php", {
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
    if (e.target.id == "Phone_Number") {
      if (isNaN(e.target.value)) {
        console.warn("Phone number field is not a number");
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
            onSubmit={handleAddCustomer}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              type="text"
              id="Firstname"
              placeholder="Enter Customer Firstname"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Lastname"
              placeholder="Enter Customer Lastname"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Address"
              placeholder="Customer Address"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Email_Address"
              placeholder="Customer Email"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Phone_Number"
              placeholder="Customer Phone #"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Driver_License_Number"
              placeholder="Customer's Drivers License #"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Province_Of_Issue"
              placeholder="Provinence of Customer's License"
              onChange={handleChange}
            />
            <input
              type="text"
              id="License_Expiration_Date"
              placeholder="Customer's License Expiration Date: Formatted(y-m-d) "
              onChange={handleChange}
            />
            <input
              type="text"
              id="Card_Number"
              placeholder="Customer Card #"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Billing_Address"
              placeholder="Customer's Billing Address"
              onChange={handleChange}
            />
            <input
              type="text"
              id="Card_Expiration_Date"
              placeholder="Customer Card Expiration Date: Formatted(y-m-d) "
              onChange={handleChange}
            />
            <input
              className="bg-slate-400"
              type="submit"
              value="Add Customer"
            />
          </form>
        </div>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default AddCustomer;
