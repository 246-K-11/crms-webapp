"use client";
import { URLPattern } from "next/server";
import { useState, useEffect } from "react";
import AddRental from "./AddRental";

function RegisterRental({props}: any) {

  return (
    <>
      <div className="m-4">
        <h1 className="px-3">Registering a rental for {props.name}</h1>
      </div>
      <AddRental props={props}/>
    </>
  );
}

export default RegisterRental;
