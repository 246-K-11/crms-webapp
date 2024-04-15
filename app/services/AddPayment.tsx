"use client";
import { useState, useEffect } from "react";

const AddPayment = ({ props }: any) => {
    const [msg, setMsg] = useState<any | null>(null);
    const [formData, setFormData] = useState<any | {}>({
        cid: parseInt(props.cid),
        rid: parseInt(props.rid),
    });

    const handleAddPayment = (e: any) => {
        e.preventDefault();

        console.info("form data", formData)

        const request = new Request("http://localhost/api/Payments/addNew.php", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        fetch(request)
            .then((response: any) => response.json())
            .then((result: any) => {
                setMsg(result);
                console.warn(result)
            })
            .catch((err) => console.error(err));
    }

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <>
            {!msg ? (
                <div className="flex justify-center px-3">
                    {/* <h3>{props.cid + " - " + props.rid}</h3> */}
                    <form
                        onSubmit={handleAddPayment}
                        className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-1 ml-2 mt-2 w-2/3 border-sold border-2 border-slate-500 rounded p-5 bg-black bg-opacity-5"
                    >
                        <div className="max-w-sm mx-0">
                            {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                            <select
                                id="Card_Type"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleChange}
                            >
                                <option value="DEFAULT">Choose a card type</option>
                                <option value="Master Card">Master Card</option>
                                <option value="Visa">Visa</option>
                            </select>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            // className="col-span-1 divide-y divide-gray-200 rounded-sm bg-white shadow-md"
                            type="text"
                            id="Amount_Paid"
                            placeholder="Additional Fees"
                            onChange={handleChange}
                        />
                        <input
                            className="addButton col-span-2"
                            type="submit"
                            value="Make Payment"
                        />
                    </form>
                </div>
            ) : (
                <p>{msg.message}</p>
            )}
        </>
    )
}

export default AddPayment;