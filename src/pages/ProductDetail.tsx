import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Product } from "../types";
import { ShoppingCart } from "lucide-react";

import { DUMMY_PRODUCTS } from "../constants/home";

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Find the product from DUMMY_PRODUCTS using the ID
    const foundProduct = DUMMY_PRODUCTS.find((p) => p.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      toast.error("Product not found");
    }
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    if (!product) return;

    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }

    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">
              Rs.{product.price * quantity}
            </span>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center border rounded w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center space-x2 shadow-lg"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Add to Cart</span>
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Product Details
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Category: {product.category}</li>
              <li>Free shipping on orders above Rs.2000</li>
              <li>Cash on delivery available</li>
              <li>7-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
