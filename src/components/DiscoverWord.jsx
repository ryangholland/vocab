import { Typography, Card, Button, Box } from "@mui/material";

function DiscoverWord({ word }) {
  console.log(word)
  return (
    <Card sx={{ p: 1.5, mb: 2 }}>
      <Typography variant="h5" gutterBottom>
        {word.word}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {word.meanings[0].definitions[0].definition}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontStyle: "italic" }} gutterBottom>
        {word.meanings[0].definitions[0].example}
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Button variant="contained" size="small" color="success">Add to List</Button>
      </Box>
    </Card>
  );
}

export default DiscoverWord;
