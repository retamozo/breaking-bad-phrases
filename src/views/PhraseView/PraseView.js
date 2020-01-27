import React from "react";
import PhraseBox from "../../components/PhraseBox";


const PraseView = ({ phrasesData, randomQuoteId }) => {
  let quoteFiltered = phrasesData[randomQuoteId]
    ? phrasesData[randomQuoteId]
    : null;

  return quoteFiltered
    ? [quoteFiltered].map(data => (
          <PhraseBox key={data.quote_id} infoQuote={data} />
      ))
    : "loading";
};

export default PraseView;
