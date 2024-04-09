import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import SignInButton from "./SignIn";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-24 bg-gray-300 -800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="md:flex justify-start items-center h-full">
            <Logo />
            <ul className="hidden md:flex justify-end gap-x-7 pl-64 ml-96 text-black">
              <li>
                <Link href="/Customers">
                  <p>Customers</p>
                </Link>
              </li>
              <li>
                <Link href="/Vehicles">
                  <p>Vehicles</p>
                </Link>
              </li>
              <li>
                <Link href="/Reports">
                  <p>Reports</p>
                </Link>
              </li>
            </ul>
            <SignInButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
