import React from "react";
import PhraseBox from "../../components/PhraseBox";

const PraseView = ({ phrasesData, randomQuoteId }) => {
  const filteredId = phrasesData.filter(phrase =>
    phrase.quote_id ? phrase.quote_id === randomQuoteId : phrase.quote_id
  );
  console.log(filteredId, "id filtrado");
  return filteredId.map(data => (
    <PhraseBox key={data.quote_id} infoQuote={data} />
  ));
};

export default PraseView;
