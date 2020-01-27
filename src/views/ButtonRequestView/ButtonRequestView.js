import React from "react";
import ButtonRequest from "../../components/ButtonRequest";

const ButtonRequestView = ({ setRandomQuoteId }) => {
  return (
    <ButtonRequest
      setRandomQuoteId={setRandomQuoteId}
      title="Generate phrase"
    />
  );
};

export default ButtonRequestView;
