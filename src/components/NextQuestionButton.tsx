import React from "react";
import { Button } from "grommet";

type Props = {
  nextQuestion: any;
};

const NextQuestionButton: React.FC<Props> = ({ nextQuestion }) => {
  return (
    <Button
      label="Next Question"
      className="next"
      // className="next-question-grad"
      onClick={nextQuestion}
      color="#FFCA58"
      primary
      hoverIndicator="true"
    />
  );
};

export default NextQuestionButton;
