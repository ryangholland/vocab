import { Box } from "@mui/material";
import Header from "./components/Header";
import VocabList from "./components/VocabList";
import Discover from "./components/Discover";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Box mt={14}>
        <Routes>
          <Route path="/" element={<VocabList />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
        </Routes>
        {/* <VocabList /> */}
        {/* <Discover /> */}
      </Box>
    </>
  );
}

export default App;
