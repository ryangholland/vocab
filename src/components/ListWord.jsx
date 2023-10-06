import { Typography, Card, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ListWord({ word }) {
  return (
    <Card sx={{ p: 1.5, mb: 2 }}>
      <Button color="error"  size="small" sx={{ position: "absolute", right: 10, zIndex: 1 }}>
        <DeleteForeverIcon  />
      </Button>
      <Typography variant="h5" gutterBottom>
        {word.word}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {word.definition}
      </Typography>
      <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
        {word.example}
      </Typography>
    </Card>
  );
}

export default ListWord;
