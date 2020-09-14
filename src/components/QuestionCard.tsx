import React, { useState } from "react";
import { AnswerObject } from "../App";
import { Button, Meter, Text, Box } from "grommet";
import { ButtonWrapper } from "./QuestionCard.styles";
import "../App.css";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div className="App">
    <Meter
      values={[
        {
          value: questionNumber * 10,
          onClick: () => {},
          color: "accent-1",
        },
      ]}
      aria-label="meter"
      margin="xsmall"
      round
    />
    <Text
      size="large"
      textAlign="center"
      truncate={false}
      margin="medium"
      weight="bold"
      color="active"
      style={{ fontSize: "16px" }}
    >
      Question {questionNumber} /{" "}
      <Text weight="normal" color="#555555" style={{ fontSize: "14px" }}>
        {totalQuestions}
      </Text>
      <hr style={{ border: "1px dashed #DADADA", opacity: ".2" }} />
    </Text>

    <p dangerouslySetInnerHTML={{ __html: question }} className="question" />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          className="App answer"
        >
          <button
            disabled={userAnswer ? true : false}
            onClick={callback}
            type="button"
            value={answer}
            // className="btn-grad"
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </div>
);

export default QuestionCard;
