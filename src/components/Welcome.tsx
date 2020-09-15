import React from "react";
import StartButton from "./StartButton";

type Props = {
  startTrivia: any;
};

const Welcome: React.FC<Props> = ({ startTrivia }) => {
  return (
    <div className="boxes">
      <div className="box-1">React Quiz</div>
      <StartButton startTrivia={startTrivia} />
    </div>
  );
};

export default Welcome;
