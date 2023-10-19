import classes from "./CartButton.css";
const CartButton = (props) => {
  return (
    <span>
      {" "}
      <button className=".button">
        <span>Cart</span>
        <span> {props.amount}</span>
      </button>
    </span>
  );
};
export default CartButton;
