"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import SignInButton from "./SignIn";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg"
          alt="Logo"
          width={width < 1024 ? "70" : "70"}
          height={width < 1024 ? "45" : "74"}
          className="relative"
          priority = {true}
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <SignInButton />
      </div>
    </>
  );
};

export default Logo;
