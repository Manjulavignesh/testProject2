import React, { useRef } from "react";
import CartButton from "./CartButton";
const Input = (props) => {
  const madicineNameInputRef = useRef();
  const desInputRef = useRef();
  const priceRef = useRef();
  const quantRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      Name: madicineNameInputRef.current.value,
      Des: desInputRef.current.value,
      Price: priceRef.current.value,
      Quan: quantRef.current.value,
    };
    props.onInput(obj);
    madicineNameInputRef.current.value="";
    desInputRef.current.value="";
    priceRef.current.value="";
    quantRef.current.value="";
  };
  

  return (
    <form onSubmit={submitHandler}>
      <label>Madicine Name:</label>
      <input type="text" ref={madicineNameInputRef} />
      <label>Description:</label>
      <input type="text" ref={desInputRef} />
      <label>Price:</label>
      <input type="number" ref={priceRef} />
      <label>Quantity</label>
      <input type="number" ref={quantRef} />
      <button>Add Product</button>
      <CartButton />
    </form>
  );
};
export default Input;
