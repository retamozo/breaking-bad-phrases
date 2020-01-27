import React from "react";

const PhraseBox = ({ infoQuote }) => {
  const { author, quote, quote_id } = infoQuote;
  return (
    <div>
      <h1>{author}</h1>
      <p>{quote}</p>
      <span>{quote_id}</span>
    </div>
  );
};

export default PhraseBox;
