import React, { Fragment } from "react";
import MedicineDetails from "./MedicineDetails";
const ShowMedicineOnScreen = (props) => {
  return (
    <ul>
      {props.MedicineDetails.map((item) => (
        <MedicineDetails
          Name={item.Name}
          Des={item.Des}
          Price={item.Price}
          Quan={item.Quan}
        />
      ))}
    </ul>
  );
};
export default ShowMedicineOnScreen;
