import React from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero onShopNow={handleShopNow} />
    </motion.div>
  );
};
export default HomePage;
