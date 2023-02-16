import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import "./App.css";
import "../../src/App.css";

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="btn__wrapper">
      <AiOutlineShoppingCart color="white" size={20} />
      <p className="card__cta"> Add to Cart</p>
    </div>
  );
};

export default Button;
