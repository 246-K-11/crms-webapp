"use client";
import { useState, useEffect } from "react";

import { CardsUI } from "../HomepageCards/CardsUI";

import { SearchInput } from "../searchbar/SearchUI";

import { useSearchParams } from "next/navigation";
import GetAllCustomers from "@/app/services/AllCustomersData";

const HomeLayout = () => {
  return <h1>HomePage</h1>;
};

export default HomeLayout;
