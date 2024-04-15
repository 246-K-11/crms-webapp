import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import SignInButton from "./SignIn";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-gray-300 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-black ">
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
              <li>
                <Link href="/Payments">
                  <p>Payments</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Link href={"/components/Login"}>
                <SignInButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
