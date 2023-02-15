import { useState } from "react";
import "./App.css";

// imports
import CardImage from "../src/assets/Bitmap.png";
import Button from "../src/components/Button";

interface ButtonProps {
  onClick: () => void;
}

const App: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="App">
      <div className="card__wrapper">
        <div className="card__left">
          <img src={CardImage} alt="product image" className="card__image" />
        </div>
        <div className="card__right">
          <p className="card__subtitle">Perfume</p>
          <h1 className="card__title">Gabrielle Essence Eau De Parfum</h1>
          <p className="card__description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="card__priceWrapper">
            <p className="card__largePrice">$149.99</p>
            <p className="card__smallPrice">$169.99</p>
          </div>
          <div className="button_wrapper">
            {/* Button goes here */}
            <Button onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
