import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";
import DiscoverWord from "./DiscoverWord";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useState } from "react";

function Discover() {
  const [discoveredWord, setDiscoveredWord] = useState();
  const [searchInput, setSearchInput] = useState("");

  function getRandomWord() {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((word) => {
        fetchDefinition(word, true);
      });
  }

  function fetchDefinition(word, isRandom) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDiscoveredWord(data[0]);
        } else {
          isRandom
            ? getRandomWord()
            : setDiscoveredWord({ word: "Word not found.", meanings: [null] });
        }
      });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchInput === "") return;

    fetchDefinition(searchInput, false);

    setSearchInput("");
  }

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h6">Discover</Typography>
      <hr style={{ width: "90%" }}></hr>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => getRandomWord()}>
        Random Word
      </Button>
      <form onSubmit={handleSearchSubmit}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Search for a word
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <ManageSearchIcon />
              </InputAdornment>
            }
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </FormControl>
      </form>

      <hr style={{ width: "90%" }}></hr>
      <Box sx={{ width: 1, px: 2, mt: 1 }}>
        {discoveredWord && <DiscoverWord word={discoveredWord} />}
      </Box>
    </Box>
  );
}

export default Discover;
