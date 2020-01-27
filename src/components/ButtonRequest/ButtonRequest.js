import React from "react";
import { Button } from "../../assets/styled";

const ButtonRequest = ({ title, setRandomQuoteId }) => {
  const handleAleatoryId = (max, min) => {
    let id = Math.round(Math.random() * (max - min) + min);
    setRandomQuoteId(id);
  };
  return <Button onClick={() => handleAleatoryId(1, 102)}>{title}</Button>;
};

export default ButtonRequest;
