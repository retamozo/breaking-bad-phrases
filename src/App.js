import React, { useState, useEffect } from "react";
import ButtonRequestView from "./views/ButtonRequestView";
import requestData from "./modules/helper";
import PrhasesView from "./views/PhraseView";
import { Container, ContainerPhrase } from "./assets/styled";
import "./app.css";

function App() {
  const [randomQuoteId, setRandomQuoteId] = useState();
  const [phrases, setPhrases] = useState([]);

  let phrasesInLS = JSON.parse(localStorage.getItem("PHRASES", phrases));
  if (!phrasesInLS) {
    phrasesInLS = [];
  }

  useEffect(() => {
    if (phrasesInLS.length < 1) {
      requestData()
        .then(phrasesArrayData =>
          localStorage.setItem("PHRASES", JSON.stringify(phrasesArrayData))
        )
        .then(phrasesArrayData => setPhrases(phrasesArrayData));
    } else {
      console.log("no llamé a la api ");
      setPhrases(phrasesInLS);
    }
  }, []);

  return (
    <Container>
      <ContainerPhrase>
        <PrhasesView
          phrasesData={phrases}
          randomQuoteId={randomQuoteId}
          setPhrases={setPhrases}
        />
      </ContainerPhrase>
      <ButtonRequestView setRandomQuoteId={setRandomQuoteId} />
    </Container>
  );
}

export default App;
