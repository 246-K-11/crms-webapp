"use client";
import React from "react";

const SignInButton = () => {
  return (
    <button
      onClick={() => console.log("Event")}
      className="h-12 rounded-lg bg-white font-bold px-5 text-black ml-12"
    >
      Log In
    </button>
  );
};

export default SignInButton;
