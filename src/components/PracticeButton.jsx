import { Button } from "@mui/material";

function PracticeButton({ answer }) {
  return (
    <Button fullWidth variant="outlined" sx={{ my: 1, p: 1 }} size="small">
      {answer}
    </Button>
  );
}

export default PracticeButton;
