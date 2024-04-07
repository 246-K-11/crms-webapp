"use client";
import { useState, useEffect } from "react";

import { CardsUI } from "../HomepageCards/CardsUI";

import { SearchInput } from "../searchbar/SearchUI";

import { data, iProfile } from "../../services/data";

import { useSearchParams } from "next/navigation";

const HomeLayout = () => {
  // And replace your useEffect code with this:

  const searchParams = useSearchParams();

  // Now get the query

  const searchQuery = searchParams && searchParams.get("q"); // we use `q` to set the query to the browser, it could be anything

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query

      const findUser = data.filter((user) => {
        if (searchQuery) {
          return (
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
          );
        } else {
          // If no search query, return the original data

          return true;
        }
      });

      // Update profileData based on search results

      setProfileData(findUser);
    };

    // Call handleSearch when searchQuery changes

    handleSearch();
  }, [searchQuery]); // Only rerun the effect if searchQuery chan
  // initialize useState for the data

  const [profileData, setProfileData] = useState<iProfile[]>([]);

  useEffect(() => {
    // will be updated soon

    setProfileData(data);
  }, []);

  // get total users

  const totalUser = profileData.length;

  return (
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
      <p className="mb-10 ">
        Showing {totalUser} {totalUser > 1 ? "Users" : "User"}
      </p>

      <SearchInput defaultValue={searchQuery} />

      {/* // Conditionally render the profile cards */}

      <div className="mt-8">
        {totalUser === 0 ? (
          <p>No results found for </p>
        ) : (
          // return the profile cards here

          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            {profileData.map(
              ({ username, role, name, photo, email }: iProfile) => {
                return (
                  <div key={username}>
                    <CardsUI
                      name={name}
                      role={role}
                      photo={photo}
                      email={email}
                      username={username}
                    />
                  </div>
                );
              }
            )}
          </div>

          // End of profile data UI
        )}
      </div>
    </section>
  );
};

export default HomeLayout;