"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function GetAllRentals() {
  const [allRentals, setAllRentals] = useState<any | []>([]);
  const [filteredRentals, setFilteredRentals] = useState<any | []>([]);

  function searchRental(e: any) {
    const value = e.target.value;
    const filtered = allRentals.filter((rental: any) => {
      return (
        rental.Lastname.toLowerCase().includes(value.toLowerCase()) ||
        rental.Firstname.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredRentals(filtered);
  }

  /* After setFilteredRentals is called, page re-renders and triggers a call to this useEffect, this allows filteredRentals to map all records when search is empty */
  useEffect(() => {
    fetch("http://localhost/api/rentals/all.php", { method: "GET" })
      .then((response) => response.json())
      /* theRentals takes on the value of response.json and function setAllRentals & setFilteredrental appends each record, from the records key of the json, to allRentals */
      .then((theRentals) => {
        setAllRentals(theRentals.records);
        setFilteredRentals(theRentals.records);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1 className="mt-10 ml-4 pl-4 bg-slate-300 rounded-lg w-80">
        Total Rentals: {allRentals.length}
      </h1>
      <div role="list" className="m-4 px-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allRentals.map((rentalInfo: any) => (
          <div
            key={rentalInfo.RID}
            className=" col-span-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{rentalInfo.Name}</h5>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Vehicle: {rentalInfo.Make + " " + rentalInfo.Model + ", " + rentalInfo.Color}</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Licence Plate: {rentalInfo.License_Plate}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rental length: {rentalInfo.Num_Days} day(s)</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rental Cost: ${rentalInfo.Rental_Cost}</p>
            <span className="mr-6">
              <Link
                href={{
                  pathname: "/Rentals/View",
                  query: {
                    id: rentalInfo.RID,
                  },
                }}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </span>
            <span className="">
              <Link
                href={{
                  pathname: "/Rentals/Delete",
                  query: {
                    id: rentalInfo.RID,
                    name: rentalInfo.Name
                  } 
                }}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Delete
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M0 0 L9 9 M0 9 L9 0" />
                </svg>
              </Link>
            </span>
          </div>
        )
        )}
      </div>
    </main>
  );
}

export default GetAllRentals;
