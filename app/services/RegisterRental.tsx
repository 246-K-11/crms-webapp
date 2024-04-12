"use client";
import { useState, useEffect } from "react";
// import 

function RegisterARental() {

    const [myParams, setMyParams] = useState({});
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setMyParams({
            id: urlParams.get("id")
        });
        console.log(myParams, { id: urlParams.get("id")})
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