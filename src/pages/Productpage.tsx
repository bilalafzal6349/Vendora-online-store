import React, { useState } from "react";
import { Product } from "../types";
import { Categories } from "../components/Categories";
import { ProductGrid } from "../components/ProductGrid";
import { DUMMY_PRODUCTS } from "../constants/home";
import { motion } from "framer-motion";
const ProductPage = ({
  onAddToCart,
  searchQuery,
}: {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    "All",
    ...Array.from(new Set(DUMMY_PRODUCTS.map((p) => p.category))),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
    </motion.div>
  );
};

export default ProductPage;
