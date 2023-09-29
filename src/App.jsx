import { Box } from "@mui/material";
import Header from "./components/Header";
import VocabList from "./components/VocabList";

function App() {
  return (
    <>
      <Header />
      <Box mt={14}>
        <VocabList />
      </Box>
    </>
  );
}

export default App;
