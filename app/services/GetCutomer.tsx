import React from "react";
import { useState, useEffect } from "react";

const GetCustomer = () => {
  const [customer, setCustomer] = useState<any | []>([]);
  useEffect(() => {
    fetch("http://localhost/api/customers/getCustomer.php?id=1", { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setCustomer(result)
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>GetCustomer {customer.Lastname}</div>;
};

export default GetCustomer;
