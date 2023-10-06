import { Box } from "@mui/material";
import Header from "./components/Header";
import VocabList from "./components/VocabList";
import Discover from "./components/Discover";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [words, setWords] = useState([
    {
      id: crypto.randomUUID(),
      word: "juxtapose",
      definition:
        "To place side by side, especially for contrast or comparison.",
      example: null,
    },
    {
      id: crypto.randomUUID(),
      word: "defenstrate",
      definition:
        "To eject or throw (someone or something) from a window; compare transfenestrate.",
      example: null,
    },
    {
      id: crypto.randomUUID(),
      word: "histrionics",
      definition:
        "Exaggerated, overemotional behaviour, especially w…n calculated to elicit a response; melodramatics.",
      example: "I'm tired of Mary's histrionics.",
    },
  ]);

  return (
    <>
      <Header />
      <Box mt={14}>
        <Routes>
          <Route path="/" element={<VocabList words={words} />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
