import { Typography, Box } from "@mui/material";
import ListWord from "./ListWord";

function VocabList({ words, handleDeleteWord }) {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h6">My List</Typography>
      <hr style={{ width: "90%" }}></hr>
      {words.length === 0 && (
        <>
          <Typography align="center">Nothing here.</Typography>
          <Typography align="center">
            Add words with the Discover feature!
          </Typography>
        </>
      )}
      <Box sx={{ width: 1, px: 2, mt: 1 }}>
        {words.map((word) => {
          return (
            <ListWord
              key={word.id}
              word={word}
              handleDeleteWord={handleDeleteWord}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default VocabList;
