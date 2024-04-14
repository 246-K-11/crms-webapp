"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const AddRental = ({ props }: any) => {
  const [msg, setMsg] = useState<any | null>(null);
  const [formData, setFormData] = useState<any | {}>({
    CID: parseInt(props.id),
  });

  // for datepicker
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const reformatDate = (dt: any) => {
    const today = new Date(dt);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate() + 1; // offset value due a weird bug

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return yyyy + "-" + mm + "-" + dd;
  };
  const handleValueChange = (newValue: any) => {
    console.log("newNewValue:", newValue);
    setValue(newValue);
    setFormData({
      ...formData,
      Rental_Period_Start: reformatDate(newValue.startDate),
      Rental_Period_End: reformatDate(newValue.endDate),
    });
  };

  const handleAddCustomer = (e: any) => {
    e.preventDefault();
    console.info("submit " + JSON.stringify(formData));

    const request = new Request("http://localhost/api/rentals/addNew.php", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    fetch(request)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMsg(result);
      })
      .catch((err) => console.error(err));
    e.target.reset();
  };

  const handleChange = (e: any) => {
    // if (e.target.id == "Phone_Number") {
    //   if (isNaN(e.target.value)) {
    //     console.warn("Phone number field is not a number");
    //     e.target.className = "inputError";
    //     return;
    //   } else e.target.className = " ";
    // }
    console.warn("dates", value);
    setFormData({
      ...formData,
      // Rental_Period_Start: value.startDate,
      // Rental_Period_End: value.endDate,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      {!msg ? (
        <div className="m-4 px-3">
          <form
            onSubmit={handleAddCustomer}
            className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-2 ml-2 mt-2  border-sold border-2 border-slate-500 rounded p-5 bg-black bg-opacity-5"
          >
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="VID"
              placeholder="Select a vehicle"
              onChange={handleChange}
            />
            <Datepicker
              value={value}
              onChange={handleValueChange}
              readOnly={true}
              minDate={Date.now()}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              type="text"
              id="Additional_Fees"
              placeholder="Additional Fees"
              onChange={handleChange}
            />
            <textarea
              // className="col-span-2 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="Status"
              rows={4}
              placeholder="Status"
              onChange={handleChange}
            />
            <textarea
              // className="col-span-2 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows={4}
              id="Vehicle_Condition"
              placeholder="Vehicle Condition"
              onChange={handleChange}
            />
            <input
              className="addButton col-span-2"
              type="submit"
              value="Add Rental"
            />
          </form>
        </div>
      ) : (
        <div className="m-4">
          <p className="px-3">{msg.message}</p>
        </div>
      )}
    </>
  );
};

export default AddRental;
