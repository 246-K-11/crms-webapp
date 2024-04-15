"use client";
import GetAllCustomers from "@/app/services/AllCustomersData";
import GetAllVehicles from "@/app/services/AllVehiclesData";

const HomeLayout = () => {
  return (
    <>
      <div>
        <GetAllCustomers />
      </div>
    </>
  );
};

export default HomeLayout;
