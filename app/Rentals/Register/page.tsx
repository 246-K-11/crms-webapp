import React from "react";
import RegisterRental from "../../services/RegisterRental";

const RentalRegister = (props: any) => {
 
  return (
    <main>
      <div>
        <RegisterRental props={props.searchParams}/>
      </div>
    </main>
  );
};

export default RentalRegister;
