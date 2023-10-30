import React from "react";

import { motion } from "framer-motion";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
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
      className="cards"
    >
      <div className="image_box">
        <motion.img
          whileHover={{ y: -5 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            stiffness: 300,
          }}
          src={img}
          alt=""
        />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <motion.button
          whileHover={{ scale: 1.07 }}
          transition={{
            duration: 1,
            ease: "linear",
            type: "spring",
            stiffness: 300,
          }}
          onClick={() => handleClick(item)}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Cards;

// id, title, autor, price, img
