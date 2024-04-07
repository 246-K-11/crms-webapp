"use client";
import React from "react";

function SignInButton() {
  return (
    <div>
      <button
        onClick={() => console.log("Event")}
        className="h-11 rounded-lg bg-white font-bold px-5 text-black ml-20"
      >
        Log In
      </button>
    </div>
  );
}

export default SignInButton;
