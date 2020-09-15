import React, { useState, useContext } from "react";
import { fetchQuizQuestions } from "./API";
import { Grommet, Box, Meter, Text } from "grommet";
import { Theme } from "./Theme";
import "./App.css";

// Components
import QuestionCard from "./components/QuestionCard";
import GetReady from "./components/GetReady";
import NextQuestion from "./components/NextQuestionButton";
import Welcome from "./components/Welcome";

// Types
import { QuestionState, Difficulty } from "./API";
import FinalScore from "./components/FinalScore";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const theme = {
  global: {
    colors: {
      background: {
        light: "#ffffff",
        dark: "#000000",
      },
    },
    font: {
      family:
        '-apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         "Fira Sans", \n         "Droid Sans",  \n         "Helvetica Neue", \n         Arial, sans-serif,  \n         "Apple Color Emoji", \n         "Segoe UI Emoji", \n         "Segoe UI Symbol"',
    },
  },
  button: {
    extend: [null],
  },
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;

      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // Save answer in the array for user answers
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    // move on to the next question if it's not the last question
    const nextQuestion = number + 1;

    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  return (
    <Grommet theme={Theme} full>
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        justify="start"
        background={{ dark: false }}
        direction="column"
        animation="fadeIn"
        hoverIndicator={false}
      >
        <div className="App">
          {/* {gameOver || userAnswers.length == TOTAL_QUESTIONS ? (
            <Welcome startTrivia={startTrivia} />
          ) : null} */}
          {userAnswers.length == TOTAL_QUESTIONS ? (
            <FinalScore
              score={score}
              startTrivia={startTrivia}
              total={TOTAL_QUESTIONS}
            />
          ) : null}
          {gameOver && !loading && userAnswers.length === 0 ? (
            <Welcome startTrivia={startTrivia} />
          ) : null}
          {loading && <GetReady />}
          {!gameOver && !loading ? (
            <Text
              size="large"
              textAlign="center"
              truncate={false}
              margin="xsmall"
              weight="bold"
              color="active"
              style={{ fontSize: "16px" }}
            >
              Score: {score}
            </Text>
          ) : null}

          {!loading && !gameOver && (
            <QuestionCard
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <NextQuestion nextQuestion={nextQuestion} />
          ) : null}
        </div>
      </Box>
    </Grommet>
  );
};

export default App;
