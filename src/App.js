import React, { useState, useEffect } from "react";
import ButtonRequestView from "./views/ButtonRequestView";
import { requestData, getRandomNumber } from "./modules/helper";
import PrhasesView from "./views/PhraseView";
import { Container } from "./assets/styled";
import "./app.css";

function App() {
  const [randomQuoteId, setRandomQuoteId] = useState(getRandomNumber(0, 69));

  const [phrases, setPhrases] = useState([]);

  let phrasesInLS = JSON.parse(localStorage.getItem("PHRASES", phrases));

  if (!phrasesInLS) {
    phrasesInLS = [];
  }
  useEffect(() => {
    if (phrasesInLS.length === 0) {
      requestData()
        .then(phrasesArrayData =>
          localStorage.setItem("PHRASES", JSON.stringify(phrasesArrayData))
        )
        .then(item => console.log("item api", item))
        .then(phrasesArrayData => setPhrases(phrasesArrayData));
    } else {
      setPhrases(phrasesInLS);
    }
  }, []); // I just need one call

  return (
    <Container>
        <PrhasesView
          phrasesData={phrases}
          randomQuoteId={randomQuoteId}
          setPhrases={setPhrases}
        />
      <ButtonRequestView setRandomQuoteId={setRandomQuoteId} />
    </Container>
  );
}

export default App;
