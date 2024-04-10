"use client";
import { useState, useEffect } from "react";

function GetAllCustomers() {
  const [allCustomers, setAllCustomers] = useState<any | []>([]);
  useEffect(() => {
    fetch("http://localhost/api/customers/all.php")
      .then((response) => response.json())
      /*theCustomers takes on the value of response.json and function setAllCustomers appends each record, from the records key of the json, to allCustomers */
      .then((theCustomers) => setAllCustomers(theCustomers.records))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>Total Customers: {allCustomers.length}</h1>
      <div>
        {/* allCustomers contains records key from json of all.php, allowing all records to be accessed and mapped */}
        {allCustomers.map((customerinfo: any) => (
          <p className="rounded-[10px] border border-solid mt-10 mb-20 bg-slate-200">
            {customerinfo.CID}, {customerinfo.Firstname},{" "}
            {customerinfo.Lastname}, {customerinfo.Email_Address},{" "}
            {customerinfo.Phone_Number}, {customerinfo.Driver_License_Number}
          </p>
        ))}
        {/* {theCustomers} */}
      </div>
    </main>
  );
}

export default GetAllCustomers;
