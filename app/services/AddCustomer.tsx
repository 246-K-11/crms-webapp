"use client";
import { useState } from "react";

const AddCustomer = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Address: " ",
    Email_Address: " ",
    Phone_Number: 0,
    Driver_License_Number: 0,
    Province_Of_Issue: " ",
    License_Expiration_Date: "",
    Card_Number: 0,
    Billing_Address: " ",
    Card_Expiration_Date: " ",

    // optionals
    Vehicle_Make: "",
    Rental_Duration: 0,
    Pick_Up_Location: "",
    Drop_Off_Location: "",
  });

  const handleAddCustomer = (e: any) => {
    e.preventDefault();
    console.log("submit " + JSON.stringify(formData));

    const request = new Request("http://localhost/api/customers/addNew.php", {
      method: "POST",
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
    if (e.target.id == "price") {
      if (isNaN(e.target.value)) {
        console.warn("Price not a number");
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
        <form onSubmit={handleAddCustomer}>
          <input
            type="text"
            id="Firstname"
            placeholder="Enter Customer Firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            id="author"
            placeholder="Book Author"
            onChange={handleChange}
          />
          <input
            type="text"
            id="price"
            placeholder="Book Price"
            onChange={handleChange}
          />
          <input className="bg-slate-500" type="submit" value="Add Book" />
        </form>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default AddCustomer;
