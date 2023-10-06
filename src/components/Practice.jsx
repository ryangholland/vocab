import { Typography, Box, Card, Button } from "@mui/material";

function Practice() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h6">Practice</Typography>
      <hr style={{ width: "90%" }}></hr>

      <Box sx={{ width: 1, px: 2, mt: 1 }}>
        <Card sx={{ p: 1.5, mb: 2, textAlign: "center" }}>
          <Typography variant="h5">juxtapose</Typography>
        </Card>
      </Box>

      <hr style={{ width: "90%" }}></hr>

      <Box sx={{ width: 1, px: 2, mt: 1 }}>
        <Typography textAlign={"center"}>Choose the correct definition:</Typography>
        <Button fullWidth variant="outlined" sx={{ my: 1, p: 1 }} size="small">
          Exaggerated, overemotional behaviour, especially when calculated to
          elicit a response; melodramatics.
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, p: 1 }} size="small">
          To eject or throw (someone or something) from a window; compare
          transfenestrate.
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, p: 1 }} size="small">
          To place side by side, especially for contrast or comparison.
        </Button>
        <Button fullWidth variant="outlined" sx={{ my: 1, p: 1 }} size="small">
          This is another definition
        </Button>

        <Button fullWidth variant="contained" sx={{ mt: 2, p: 2 }} disabled>
            Next Question
        </Button>
      </Box>
    </Box>
  );
}

export default Practice;
