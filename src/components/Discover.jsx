import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  CircularProgress,
} from "@mui/material";
import DiscoverWord from "./DiscoverWord";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useState } from "react";

function Discover() {
  const [discoveredWord, setDiscoveredWord] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  function getRandomWord() {
    setLoading(true);
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((word) => {
        fetchDefinition(word, true);
      });
  }

  function fetchDefinition(word, isRandom) {
    setLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDiscoveredWord(data[0]);
          setLoading(false);
        } else {
          if (isRandom) {
            getRandomWord();
          } else {
            setDiscoveredWord({ word: "Word not found.", meanings: [null] });
            setLoading(false);
          }
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
        {loading && (
          <>
            <Box sx={{ textAlign: "center" }}>
              <CircularProgress />
            </Box>
          </>
        )}
        {!loading && discoveredWord && <DiscoverWord word={discoveredWord} />}
      </Box>
    </Box>
  );
}

export default Discover;
