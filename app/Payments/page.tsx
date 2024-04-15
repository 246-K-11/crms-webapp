import React from "react";
import AddPayment from "../services/AddPayment";

const Payments = (props: any) => {
  return (
    <main>
      <div>
        <AddPayment props={props.searchParams} />
      </div>
    </main>
  )
};

export default Payments;
