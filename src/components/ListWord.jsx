import { Typography, Card, Box } from "@mui/material";

function ListWord() {
  return (
    <Card sx={{ p: 2, mb:2 }}>
      <Typography variant="h4" gutterBottom>
        word
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Defintion definition definition definition definition definition
        definition definition
      </Typography>
      <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
        This is an example sentence using the <b>word</b>.
      </Typography>
    </Card>
  );
}

export default ListWord;
