import { Box } from "@mui/material";
import Header from "./components/Header";
import VocabList from "./components/VocabList";
import Discover from "./components/Discover";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { defaultList } from "./helper";

function App() {
  const [words, setWords] = useState(defaultList);

  function handleDeleteWord(id) {
    setWords(
      words.filter((word) => {
        return word.id !== id;
      })
    );
  }

  function handleAddWord(newWord) {
    setWords([
      ...words,
      {
        id: crypto.randomUUID(),
        word: newWord.word,
        definition: newWord.meanings[0].definitions[0].definition,
        example: newWord.meanings[0].definitions[0].example,
      },
    ]);
  }

  return (
    <>
      <Header />
      <Box mt={14}>
        <Routes>
          <Route
            path="/"
            element={
              <VocabList words={words} handleDeleteWord={handleDeleteWord} />
            }
          ></Route>
          <Route
            path="/discover"
            element={<Discover handleAddWord={handleAddWord} />}
          ></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
