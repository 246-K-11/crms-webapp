"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const DeleteRental = ({props}): any => {
  const [msg, setMsg] = useState<any | null>(null);

  const handleDeleteRental = (e: any) => {
    e.preventDefault();

    const request = new Request("http://localhost/api/rentals/delete.php", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(props),
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
            Delete Rental for {props.name}?
          </h1>
          <form onSubmit={handleDeleteRental}>
            <input
              className="delButton w-52"
              type="submit"
              value="Delete Rental"
            />
          </form>
          <Link
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            href={{ 
              pathname: "/Rentals" 
            }}
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

export default DeleteRental;
