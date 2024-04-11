"use client";
import { useState } from "react";

const DeleteCustomer = () => {
  const [msg, setMsg] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    id: 0,
  });

  const handleAddCustomer = (e: any) => {
    e.preventDefault();
    console.log("delete " + JSON.stringify(formData));

    const request = new Request("http://localhost/api/customers/delete.php", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });

    fetch(request)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setMsg(result);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e: any) => {
    if (e.target.id == "CID") {
      if (isNaN(e.target.value)) {
        console.warn("ID entered incorrectly, not a number");
        e.target.className = "inputError";
        return;
      } else e.target.className = " ";
    }
    setFormData({
      ...formData,
      [e.target.id]: Number(e.target.value),
    });
  };

  return (
    <>
      {!msg ? (
        <div className="mt-20">
          <form
            onSubmit={handleAddCustomer}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            <input
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              type="text"
              id="id"
              placeholder="Enter the ID # of Customer to be deleted"
              onChange={handleChange}
            />
            <input
              className="bg-slate-400"
              type="submit"
              value="Delete Customer"
            />
          </form>
        </div>
      ) : (
        <p>{msg.message}</p>
      )}
    </>
  );
};

export default DeleteCustomer;
