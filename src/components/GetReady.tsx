import React from "react";
import { Heading } from "grommet";
import { motion } from "framer-motion";

const GetReady: React.FC = () => {
  return (
    <Heading
      size="large"
      alignSelf="center"
      color="status-ok"
      style={{ margin: "20rem" }}
    >
      GET READY!
    </Heading>
  );
};

export default GetReady;
