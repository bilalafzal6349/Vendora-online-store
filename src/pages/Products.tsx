import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Products: React.FC = () => {
  // In a real app, you would fetch the products from your API
  const products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      price: 999,
      image: "https://via.placeholder.com/300",
      category: "Category 1",
    },
    {
      id: "2",
      name: "Product 2",
      price: 1499,
      image: "https://via.placeholder.com/300",
      category: "Category 1",
    },
    {
      id: "3",
      name: "Product 3",
      price: 1999,
      image: "https://via.placeholder.com/300",
      category: "Category 2",
    },
    {
      id: "4",
      name: "Product 4",
      price: 2499,
      image: "https://via.placeholder.com/300",
      category: "Category 2",
    },
    {
      id: "5",
      name: "Product 5",
      price: 2999,
      image: "https://via.placeholder.com/300",
      category: "Category 3",
    },
    {
      id: "6",
      name: "Product 6",
      price: 3499,
      image: "https://via.placeholder.com/300",
      category: "Category 3",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-xl font-bold text-gray-900">
                Rs.{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
