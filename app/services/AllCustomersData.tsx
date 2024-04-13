"use client";
import { useState, useEffect } from "react";

const formatPhone = (number: string) => {
  let finalPhone = `(${number.substring(0, 3)}) ${number.substring(
    3,
    6
  )}-${number.substring(6)}`;
  return finalPhone;
};

function GetAllCustomers() {
  const [allCustomers, setAllCustomers] = useState<any | []>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<any | []>([]);

  function searchCustomer(e: any) {
    const value = e.target.value;
    const filtered = allCustomers.filter((customer: any) => {
      return (
        customer.Lastname.toLowerCase().includes(value.toLowerCase()) ||
        customer.Firstname.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredCustomers(filtered);
  }
  /*After setFilteredCustomers is called, page re-renders and triggers a call to this useEffect, this allows filteredcustomers to map all records when search is empty*/
  useEffect(() => {
    fetch("http://localhost/api/customers/all.php", { method: "GET" })
      .then((response) => response.json())
      /*theCustomers takes on the value of response.json and function setAllCustomers & setFilteredCustomer appends each record, from the records key of the json, to allCustomers */
      .then((theCustomers) => {
        setAllCustomers(theCustomers.records);
        setFilteredCustomers(theCustomers.records);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1 className="mt-10 ml-4 pl-4 bg-slate-300 rounded-lg w-80">
        Total Customers: {allCustomers.length}
      </h1>
      <div className="m-3 md:w-96">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search Customers"
            aria-label="Search"
            aria-describedby="button-addon1"
            onChange={searchCustomer}
          />

          {/* <!--Search button--> */}
          <button
            className="relative z-[2] flex items-center rounded-r bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            onClick={searchCustomer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#ffffff"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCustomers.map((customerInfo: any) => (
            <li
              key={customerInfo.CID}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {customerInfo.Lastname}, {customerInfo.Firstname}
                    </h3>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    Driver License: {customerInfo.Driver_License_Number}
                  </p>
                </div>
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src={
                    "https://api.dicebear.com/8.x/micah/svg?seed=" +
                    customerInfo.Firstname
                  }
                  alt="avatar"
                />
                <a href={"/Rentals/Register?id=" + customerInfo.CID}>
                  Make a rental
                </a>
                <a href={"/Customers/Update?id=" + customerInfo.CID}>
                  Update Customer
                </a>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={"mailto:" + customerInfo.Email_Address}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                      Email: {customerInfo.Email_Address}
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={
                        "tel:" +
                        formatPhone(customerInfo.Phone_Number.toString())
                      }
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Call: {formatPhone(customerInfo.Phone_Number.toString())}
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default GetAllCustomers;
