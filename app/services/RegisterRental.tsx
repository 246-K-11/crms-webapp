"use client";
import { URLPattern } from "next/server";
import { useState, useEffect } from "react";

function RegisterARental() {

    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const URL = "http://localhost/api/customers/getCustomer.php?id=" + urlParams.get("id");
        fetch(URL, { method: "GET" })
            .then((response: any) => response.json())
            .then((theCustomer: any) => {
                setCustomer(theCustomer)
                // setFilteredCustomer(theCustomer);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="m-4">
            <h1 className="px-3">Registering a rental for {customer.Firstname + " " + customer.Lastname}</h1>
        </div>
    );

}

export default RegisterARental;