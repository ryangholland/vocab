import { Box } from "@mui/material";
import Header from "./components/Header";
import VocabList from "./components/VocabList";
import Discover from "./components/Discover";

function App() {
  return (
    <>
      <Header />
      <Box mt={14}>
        {/* <VocabList /> */}
        <Discover />
      </Box>
    </>
  );
}

export default App;
