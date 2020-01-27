import React from "react";
import { ContainerPhrase } from "../../assets/styled";

const PhraseBox = ({ infoQuote }) => {
  const { author, quote } = infoQuote;
  return (
    <ContainerPhrase>
      <h1>{author}</h1>
      <p>{quote}</p>
    </ContainerPhrase>
  );
};

export default PhraseBox;
