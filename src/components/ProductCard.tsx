import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "../types";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100">
            <button
              className="bg-white p-2 rounded-full shadow-lg hover:bg-emerald-50 transition-colors"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Eye className="h-5 w-5 text-gray-700 hover:text-emerald-600" />
            </button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-emerald-600">
                {product.price.toLocaleString()}
                <sub>Rs</sub>
              </span>
            </div>

            <button
              onClick={() => onAddToCart(product)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
