import React from "react";
import { Button } from "grommet";

type Props = {
  startTrivia: any;
};

const StartButton: React.FC<Props> = ({ startTrivia }) => {
  return (
    <Button
      label="New Game"
      alignSelf="center"
      hoverIndicator="true"
      className="start"
      onClick={startTrivia}
      size="large"
      color="accent-1"
      primary
    />
  );
};

export default StartButton;
