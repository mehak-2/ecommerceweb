import React from "react";
import shoppingSVG from "./shopping.svg";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        ease: "linear",
        type: "spring",
        stiffness: 300,
      }}
      className="container"
    >
      <div className="left">
        <h1 className="intro-title">
          THE <span>Grocery Store</span>
        </h1>
      </div>
      <div className="right">
        <img className="svg" src={shoppingSVG} height="450px" width="450px" />{" "}
        {/* Used the correct variable name */}
      </div>
    </motion.div>
  );
};

export default Home;
