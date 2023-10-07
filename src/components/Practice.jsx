import { Typography, Box, Card, Button } from "@mui/material";
import { generateQuestion } from "../helper";
import { useState, useEffect } from "react";
import PracticeButton from "./PracticeButton";

function Practice({ words }) {
  const [question, setQuestion] = useState(
    () =>
      JSON.parse(localStorage.getItem("myQuestion")) ?? generateQuestion(words)
  );

  useEffect(() => {
    localStorage.setItem("myQuestion", JSON.stringify(question));
  }, [question]);

  if (words.length < 4) {
    return (
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h6">Practice</Typography>
        <hr style={{ width: "90%" }}></hr>
        <Typography>Feature not available with less than 4 words.</Typography>
        <Typography>Add more words to your list and try again.</Typography>
      </Box>
    );
  }

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h6">Practice</Typography>
      <hr style={{ width: "90%" }}></hr>

      <Box sx={{ width: 1, px: 2, mt: 1 }}>
        <Card sx={{ p: 1.5, mb: 2, textAlign: "center" }}>
          <Typography variant="h5">
            {question.type === "word"
              ? question.correctAnswer.word
              : question.correctAnswer.definition}
          </Typography>
        </Card>
      </Box>

      <hr style={{ width: "90%" }}></hr>

      <Box sx={{ width: 1, px: 2, mt: 1 }}>
        <Typography textAlign={"center"}>
          Choose the correct {question.type === "word" ? "definition" : "word"}:
        </Typography>

        {question.allAnswers.map((answer) => {
          return (
            <PracticeButton
              key={answer.id}
              answerText={
                question.type === "word" ? answer.definition : answer.word
              }
              answer={answer}
              question={question}
              setQuestion={setQuestion}
            />
          );
        })}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, p: 2 }}
          onClick={() => setQuestion(generateQuestion(words))}
          disabled={!question.done}
        >
          Next Question
        </Button>
      </Box>
    </Box>
  );
}

export default Practice;
