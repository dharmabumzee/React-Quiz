import React from "react";
import StartButton from "./StartButton";
import { motion } from "framer-motion";

type Props = {
  score: number;
  startTrivia: any;
  total: number;
};

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2.1,
};

const FinalScore: React.FC<Props> = ({ score, startTrivia, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        position: "absolute",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        width: "94vw",
        height: "620px",
        backgroundColor: "#333333",
        // opacity: ".99",
        color: "#f8f8f8",
        borderRadius: "15px",
        fontFamily: "Luckiest Guy",
        marginTop: "-3rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "2rem", margin: "2rem" }}
      >
        GAME OVER!
      </motion.div>
      <p className="final-score">YOUR FINAL SCORE IS</p>
      <motion.div
        initial="out"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        style={{ fontSize: "5rem", margin: "5rem" }}
      >
        {score}
      </motion.div>
      <div
        style={{ fontFamily: "Bitter" }}
        className="animate__animated animate__flipInX start-again"
      >
        <StartButton startTrivia={startTrivia} />
      </div>
    </motion.div>
  );
};

export default FinalScore;
