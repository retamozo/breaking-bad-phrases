import React from "react";
import { Button } from "../../assets/styled";
import { getRandomNumber } from "../../modules/helper";

const ButtonRequest = ({ title, setRandomQuoteId }) => {
  const handleAleatoryId = () => {
    let id = getRandomNumber(0, 69);
    setRandomQuoteId(id);
  };
  return <Button onClick={handleAleatoryId}>{title}</Button>;
};

export default ButtonRequest;
