import React from "react";
import ViewPayment from "../../services/ViewPayment";

const ViewPayments = (props: any) => {
  return (
    <main>
      <div>
        <ViewPayment props={props.searchParams} />
      </div>
    </main>
  )
};

export default ViewPayments;
