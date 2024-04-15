import React from "react";
import DeleteRental from "../../services/DeleteRental";

const DeleteRentals = (props: any) => {

  return (
    <main>
      <div>
        <DeleteRental props={props.searchParams}/>
      </div>
    </main>
  );
};

export default DeleteRentals;
