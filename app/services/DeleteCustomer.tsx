"use client";
import Link from "next/link";
import path from "path";
import { useEffect, useState } from "react";

const DeleteCustomer = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [myParams, setMyParams] = useState<any | {}>({});
  const [formData, setFormData] = useState({
    id: 0,
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setMyParams({
      id: Number(urlParams.get("id")),
      name: urlParams.get("name"),
    });
    console.log({ name: urlParams.get("name") }, { id: urlParams.get("id") });
    setFormData({ ...formData, id: Number(urlParams.get("id")) });
  }, []);

  const handleDeleteCustomer = (e: any) => {
    e.preventDefault();
    console.log(
      "delete customer: " + JSON.stringify(formData.id) + myParams.id
    );

    const request = new Request("http://localhost/api/customers/delete.php", {
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

  return (
    <>
      {!msg ? (
        <div className="ml-8 mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <h1>
            Deleting Customer: {myParams.name}, ID: {myParams.id}
          </h1>
          <form onSubmit={handleDeleteCustomer}>
            <input
              className="delButton w-52"
              type="submit"
              value="Delete Customer"
            />
          </form>
          <Link
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            href={{ pathname: "/Customers" }}
          >
            <button>Back</button>
          </Link>
        </div>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default DeleteCustomer;
