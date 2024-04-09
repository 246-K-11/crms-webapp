"use client";
import { useState, useEffect } from "react";

const GetAll = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  useEffect(() => {
    const options = {
      "content-type": "application/json",
    };
    fetch("http://localhost/api/customers/all.php", options)
      .then((response) => response.json)
      .then((response) => {
        console.warn(response);
        const theCustomers = response.map((customers) => {
          return (
            <li key={customers.CID}>
              {customers.Firstname}, {customers.Lastname}
            </li>
          );
        });
        console.debug(theCustomers);
        // setBooksLoaded(true)
        setAllCustomers(theCustomers);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>All Customers</h1>
      <div>
        {allCustomers}
        {/* {theCustomers} */}
      </div>
    </main>
  );
};

export default GetAll;
