import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import SignInButton from "./SignIn";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-24 bg-gray-300 bg-opacity-100 sticky top-0 opacity-100">
        <div className="container mx-auto px-4 h-full bg-opacity-100">
          <div className="md:flex justify-start items-center h-full bg-opacity-100">
            <Link href="/">
              <Logo />
            </Link>
            <ul className=" md:flex justify-end gap-x-7 pl-64 ml-96 text-black bg-opacity-100">
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
                <Link href="/Rentals">
                  <p>Rentals</p>
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
