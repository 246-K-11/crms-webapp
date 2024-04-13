"use client";
import { useState, useEffect } from "react";

function GetAllVehicles() {
  const [allVehicles, setAllVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState<any | []>([]);
  const [carSelected, setCarSelected] = useState();

  function searchVehicle(e: any) {
    const value = e.target.value;
    const filtered = allVehicles.filter((vehicle: any) => {
      return (
        vehicle.Model.toLowerCase().includes(value.toLowerCase()) ||
        vehicle.Make.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredVehicles(filtered);
  }

  function selectCar(e: any) {
    console.log(e.target.id);
    setCarSelected(e.target.id);
  }

  useEffect(() => {
    fetch("http://localhost/api/vehicles/all.php")
      .then((response) => response.json())
      .then((theVehicles) => {
        setAllVehicles(theVehicles.records);
        setFilteredVehicles(theVehicles.records);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>All Vehicles: {allVehicles.length}</h1>
      <div>
        <div className="m-3 md:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search Vehicles"
              aria-label="Search"
              aria-describedby="button-addon1"
              onChange={searchVehicle}
            />

            {/* <!--Search button--> */}
            <button
              className="relative z-[2] flex items-center rounded-r bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
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
        <p>Your choice: {carSelected}</p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredVehicles.map((vehicleInfo: any) => (
            <li
              key={vehicleInfo.VID}
              className="col-span-2 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="p-4 w-10 flex-1">
                  <p>Make: {vehicleInfo.Make}</p>
                  <p>Model: {vehicleInfo.Model}</p>
                  <p>Color: {vehicleInfo.Color}</p>
                  <p>Rate: ${vehicleInfo.Rate}</p>
                </div>
                <div className="p-4  w-0 flex-1">
                  <img
                    className="h-14 w-16 flex-wrap rounded-full bg-gray-300"
                    src={
                      "https://www.auto-data.net/img/logos/" +
                      vehicleInfo.Make +
                      ".png"
                    }
                    alt="avatar"
                  />
                  <button
                    id={
                      vehicleInfo.Make +
                      " (Model: " +
                      vehicleInfo.Model +
                      "), ID:" +
                      vehicleInfo.VID
                    }
                    onClick={selectCar}
                  >
                    Select
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default GetAllVehicles;
