import React, { Fragment } from "react";
import AddRemove from "./AddRemove";
import CartButton from "./CartButton";
const MedicineDetails = (props) => {
    let amount;
    const IncreaseHandler=(n)=>{
        amount=n;
        <CartButton amount={amount}/>
          }
  return (
    <Fragment>
      <li>
        {`MedicineName :    ${props.Name.charAt(0).toUpperCase()+props.Name.slice(1)}`}
        <div>{`Description :    ${props.Des.charAt(0).toUpperCase()+props.Des.slice(1)}`}</div>
        <div>{`Price :    ${props.Price}`}</div>
        <div>{`Quantity :    ${props.Quan}`} <AddRemove onIncrease={IncreaseHandler} /></div><br/>
      </li>
    </Fragment>
  );
};
export default MedicineDetails;
