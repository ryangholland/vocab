import { Typography, Card, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ListWord() {
  return (
    <Card sx={{ p: 1.5, mb: 2 }}>
      <Button color="error" sx={{ position: "absolute", right: 15 }}>
        <DeleteForeverIcon  />
      </Button>
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
    </Card>
  );
}

export default ListWord;
