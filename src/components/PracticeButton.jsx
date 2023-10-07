import { Button } from "@mui/material";

function PracticeButton({ answerText, answer, question, setQuestion }) {
  // Return green button if question is answered AND this button is the correct answer
  if (question.done && question.correctAnswer.id === answer.id) {
    return (
      <Button
        fullWidth
        variant="contained"
        color="success"
        sx={{ my: 1, p: 1 }}
        size="small"
      >
        {answerText}
      </Button>
    );
  }

  // Return red button if question is answered AND this button is clicked AND this button is incorrect
  if (
    question.done &&
    question.clickedAnswer === answer.id &&
    question.correctAnswer.id !== answer.id
  ) {
    return (
      <Button
        fullWidth
        variant="contained"
        color="error"
        sx={{ my: 1, p: 1 }}
        size="small"
      >
        {answerText}
      </Button>
    );
  }

  // All other cases
  return (
    <Button
      fullWidth
      variant="outlined"
      sx={{ my: 1, p: 1 }}
      size="small"
      onClick={() => {
        setQuestion({
          ...question,
          done: true,
          clickedAnswer: answer.id,
        });
      }}
      disabled={question.done}
    >
      {answerText}
    </Button>
  );
}

export default PracticeButton;
