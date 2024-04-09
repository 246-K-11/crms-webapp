"use client";
import { useState, useEffect } from "react";

function GetAll() {
  const [allCustomers, setAllCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost/api/customers/all.php")
      .then((response) => response.json())
      .then((theCustomers) => setAllCustomers(theCustomers.records[21]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>All Customers</h1>
      <div>
        {allCustomers.Firstname}
        {/* {theCustomers} */}
      </div>
    </main>
  );
}

export default GetAll;
