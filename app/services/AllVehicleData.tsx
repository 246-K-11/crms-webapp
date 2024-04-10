"use client";
import { useState, useEffect } from "react";

function GetAllVehicles() {
  const [allVehicles, setAllVehicles] = useState([]);
  useEffect(() => {
    fetch("http://localhost/api/vehicles/all.php")
      .then((response) => response.json())
      /*theCustomers takes on the value of response.json and function setAllCustomers appends each record, from the records key of the json, to allCustomers */
      .then((theVehicles) => setAllVehicles(theVehicles.records))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>All Vehicles: {allVehicles.length}</h1>
      <div></div>
    </main>
  );
}

export default GetAllVehicles;
