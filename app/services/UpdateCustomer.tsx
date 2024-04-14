"use client";
import { Input } from "postcss";
import { useState, useEffect } from "react";
// import

const UpdateCustomer = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [myParams, setMyParams] = useState<any | {}>({});
  const [customer, setCustomer] = useState<any | {}>({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setMyParams({
      id: urlParams.get("id"),
    });
    console.log(myParams, { id: urlParams.get("id") });
    const URL =
      "http://localhost/api/customers/getCustomer.php?id=" +
      urlParams.get("id");
    fetch(URL, { method: "GET" })
      .then((response: any) => response.json())
      .then((theCustomer: any) => {
        setCustomer(theCustomer);
      })
      .catch((err) => console.error(err));
  }, []);

  const [formData, setFormData] = useState({
    id: "",
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

    const request = new Request("http://localhost/api/customers/update.php", {
      method: "POST",
      mode: "cors",
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
      id: customer.id,
    });
  };

  return (
    <>
      {!msg ? (
        <div>
          <h1 className="ml-6">
            Updating Customer: {customer.Firstname} {customer.Lastname} ID:
            {customer.id}
          </h1>
          <form
            onSubmit={handleAddCustomer}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ml-2 mt-2  border-sold border-2 border-slate-500 rounded p-5"
          >
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Firstname"
              placeholder="Enter Customer Firstname"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Lastname"
              placeholder="Enter Customer Lastname"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Address"
              placeholder="Customer Address"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Email_Address"
              placeholder="Customer Email"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Phone_Number"
              placeholder="Customer Phone #"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Driver_License_Number"
              placeholder="Customer's Drivers License #"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Province_Of_Issue"
              placeholder="Provinence of Customer's License"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="License_Expiration_Date"
              placeholder="Customer's License Expiration Date: Formatted(y-m-d) "
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Card_Number"
              placeholder="Customer Card #"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Billing_Address"
              placeholder="Customer's Billing Address"
              onChange={handleChange}
            />
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Card_Expiration_Date"
              placeholder="Customer Card Expiration Date: Formatted(y-m-d) "
              onChange={handleChange}
            />
            <input
              className="addButton"
              type="submit"
              value="Update Customer"
            />
          </form>
        </div>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default UpdateCustomer;
