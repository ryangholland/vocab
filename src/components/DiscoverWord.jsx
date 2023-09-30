import { Typography, Card, Button, Box } from "@mui/material";

function DiscoverWord() {
  return (
    <Card sx={{ p: 1.5, mb: 2 }}>
      <Typography variant="h5" gutterBottom>
        Word
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Defintion definition definition definition definition definition
        definition definition
      </Typography>
      <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
        This is an example sentence using the <b>word</b>.
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Button variant="contained" size="small" color="success">Add to List</Button>
      </Box>
    </Card>
  );
}

export default DiscoverWord;
