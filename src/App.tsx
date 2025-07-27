import React, { useState } from "react";
import "./App.css";
import Header from "././components/Header";
import Hero from "././components/Hero";
import Categories from "././components/Categories";
import ProductGrid from "././components/ProductGrid";
import Cart from "././components/Cart";
import Footer from "././components/Footer";
import WhatsAppButton from "././components/WhatsAppButton";
import About from "././components/About";
import Contact from "././components/Contact";
import { CartItem, Product } from "././types";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
// import Checkout from "./pages/Checkout";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 2999,
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality",
  },
  {
    id: 2,
    name: "Cotton Summer Dress",
    price: 1499,
    images: [
      "https://images.pexels.com/photos/1031588/pexels-photo-1031588.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1031589/pexels-photo-1031589.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1031590/pexels-photo-1031590.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Clothing",
    description:
      "Comfortable cotton dress perfect for summer weather and casual outings",
  },
  {
    id: 3,
    name: "Smartphone Case",
    price: 599,
    images: [
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/341524/pexels-photo-341524.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/341525/pexels-photo-341525.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Accessories",
    description:
      "Durable protective case for smartphones with shock absorption technology",
  },
  {
    id: 4,
    name: "Running Sneakers",
    price: 3999,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Footwear",
    description:
      "Comfortable running shoes with excellent grip and cushioning for athletes",
  },
  {
    id: 5,
    name: "Leather Handbag",
    price: 2799,
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1152079/pexels-photo-1152079.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Accessories",
    description:
      "Premium leather handbag with multiple compartments and elegant design",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 4999,
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/393048/pexels-photo-393048.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/393049/pexels-photo-393049.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Electronics",
    description:
      "Feature-rich smartwatch with health monitoring and fitness tracking",
  },
  {
    id: 7,
    name: "Denim Jacket",
    price: 1899,
    images: [
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1040947/pexels-photo-1040947.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Clothing",
    description:
      "Classic denim jacket for casual wear with vintage styling and comfort",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 1299,
    images: [
      "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Electronics",
    description:
      "Portable Bluetooth speaker with great sound quality and long battery life",
  },
  {
    id: 9,
    name: "Casual T-Shirt",
    price: 799,
    images: [
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1656685/pexels-photo-1656685.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1656686/pexels-photo-1656686.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Clothing",
    description:
      "Comfortable cotton t-shirt perfect for everyday wear and casual occasions",
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 899,
    images: [
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/2115258/pexels-photo-2115258.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Electronics",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life",
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 1199,
    images: [
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/701878/pexels-photo-701878.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/701879/pexels-photo-701879.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Accessories",
    description: "Stylish sunglasses with UV protection and polarized lenses",
  },
  {
    id: 12,
    name: "Canvas Sneakers",
    price: 1599,
    images: [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1464626/pexels-photo-1464626.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1464627/pexels-photo-1464627.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    category: "Footwear",
    description:
      "Classic canvas sneakers with comfortable sole and trendy design",
  },
];

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<string>("home");

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

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

  const handleShopNow = () => {
    setCurrentPage("home");
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewCategories = () => {
    setCurrentPage("home");
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <Hero
              onShopNow={handleShopNow}
              onViewCategories={handleViewCategories}
            />
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
          </>
        );
    }
  };

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Toaster position="top-center" />
          <Header
            cartItemsCount={getCartItemsCount()}
            onCartClick={() => setIsCartOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onNavigate={handleNavigation}
            currentPage={currentPage}
          />

          {renderCurrentPage()}

          <Footer onNavigate={handleNavigation} />

          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            total={getCartTotal()}
          />

          <WhatsAppButton />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
