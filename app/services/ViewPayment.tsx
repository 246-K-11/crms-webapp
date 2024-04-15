"use client";
import Link from "next/link";
import { Input } from "postcss";
import { useState, useEffect } from "react";
// import

const ViewPayment = () => {
  const [payment, setPayment] = useState<any | {}>({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const URL = "http://localhost/api/payments/getpayment.php?id=" + urlParams.get("id");
    fetch(URL, { method: "GET" })
      .then((response: any) => response.json())
      .then((thepayment: any) => {
        setPayment(thepayment);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="flex justify-around w-2/3">
        <div className="min-w-40 flex">
          <div className="block w-fit p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">payment Info</h5>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Customer: <em>{payment.Name}</em></p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Vehicle: <em>{payment.Make + " " + payment.Model + ", " + payment.Color}</em></p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Licence Plate: <em>{payment.License_Plate}</em></p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">payment length: <em>{payment.Num_Days} day(s)</em></p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Start Date: <em>{payment.payment_Period_Start}</em></p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">End Date: <em>{payment.payment_Period_End}</em></p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">payment Fees: <em>${payment.payment_Cost - payment.Additional_Fees}</em></p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Additional Fees: <em>${payment.Additional_Fees}</em></p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">payment Cost: <em>${payment.payment_Cost}</em></p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: <em>{payment.Status}</em></p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Vehicle Condition: <em>{payment.Vehicle_Condition}</em></p>
          </div>
          <div className="min-w-40 ">
            <div className=" w-fit p-6 ">
              <Link
                href={{
                  pathname: "/Payments",
                  query: {
                    rid: payment.RID,
                    cid: payment.CID
                  },
                }}
              >
                <button className="p-2 my-2 border-solid border-2 border-slate-300 rounded">
                  Make a Payment
                </button>
              </Link>
            </div>
            <div className=" w-fit p-6 ">
              <Link
                href={{
                  pathname: "/Payments/View",
                  query: {
                    rid: payment.RID,
                    cid: payment.CID
                  },
                }}
              >
                <button className="p-2 my-2 border-solid border-2 border-slate-300 rounded">
                  View Payments
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ViewPayment;