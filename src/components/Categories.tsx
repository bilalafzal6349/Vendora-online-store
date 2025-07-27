import React from "react";
import { Smartphone, Shirt, Watch, Headphones } from "lucide-react";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Electronics":
        return <Smartphone className="h-6 w-6" />;
      case "Clothing":
        return <Shirt className="h-6 w-6" />;
      case "Accessories":
        return <Watch className="h-6 w-6" />;
      case "Footwear":
        return <Headphones className="h-6 w-6" />;
      default:
        return (
          <div className="h-6 w-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded"></div>
        );
    }
  };

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              {getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
