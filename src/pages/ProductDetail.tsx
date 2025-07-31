import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // In a real app, you would fetch the product data from your API
  const product: Product = {
    id: id || "1",
    name: "Sample Product",
    description:
      "This is a sample product description. In a real application, this would be fetched from your backend.",
    price: 999,
    image: "https://via.placeholder.com/400",
    category: "Sample Category",
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    });
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    });
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
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
              Rs.{product.price}
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
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Buy Now
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
