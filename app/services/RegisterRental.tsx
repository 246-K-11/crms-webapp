"use client";
import { URLPattern } from "next/server";
import { useState, useEffect } from "react";
import AddRental from "./AddRental";

function RegisterRental({ props }: any) {

  return (
    <>
      <div className="flex justify-center ">
        <div className="m-4 w-2/3">
          <h1 className="px-3">Registering a rental for {props.name}</h1>
        </div>
      </div>
      <AddRental props={props} />
    </>
  );
}

export default RegisterRental;
