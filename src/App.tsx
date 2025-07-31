import React, { useState } from "react";
import "./App.css";
import Header from "././components/Header";
import Hero from "././components/Hero";
import ProductHeader from "././components/ProductHeader";
import Cart from "././components/Cart";
import Footer from "././components/Footer";
import WhatsAppButton from "././components/WhatsAppButton";
import About from "././components/About";
import Contact from "././components/Contact";
import { CartItem, Product } from "././types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Productpage from "./pages/Productpage";
import ProductDetail from "./pages/ProductDetail";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { ChatProvider } from "./context/ChatContext";
import { ChatBot } from "./components/ChatBot";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
// Component for the main home page content
const HomePage = () => {
  const handleShopNow = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewCategories = () => {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero onShopNow={handleShopNow} onViewCategories={handleViewCategories} />
    </div>
  );
};

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <Router>
      <CartProvider>
        <ChatProvider>
          <div className="min-h-screen bg-gray-50">
            <Toaster position="top-center" />
            <Routes>
              {/* Public routes */}
              <Route
                path="/sign-in/*"
                element={<SignIn routing="path" path="/sign-in" />}
              />
              <Route
                path="/sign-up/*"
                element={<SignUp routing="path" path="/sign-up" />}
              />
              {/* Protected routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Header
                      cartItemsCount={getCartItemsCount()}
                      onCartClick={() => setIsCartOpen(true)}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                    <HomePage />
                    <Footer onNavigate={() => {}} />
                  </ProtectedRoute>
                }
              />
              {/* route for products */}
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <ProductHeader
                      cartItemsCount={getCartItemsCount()}
                      onCartClick={() => setIsCartOpen(true)}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                    <Productpage
                      onAddToCart={addToCart}
                      searchQuery={searchQuery}
                    />
                    <Footer onNavigate={() => {}} />
                  </ProtectedRoute>
                }
              />
              {/* route for product detail */}
              <Route
                path="/product/:id"
                element={
                  <ProtectedRoute>
                    <Header
                      cartItemsCount={getCartItemsCount()}
                      onCartClick={() => setIsCartOpen(true)}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                    <ProductDetail onAddToCart={addToCart} />
                    <Footer onNavigate={() => {}} />
                  </ProtectedRoute>
                }
              />
              {/* route for about page */}
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <Header
                      cartItemsCount={getCartItemsCount()}
                      onCartClick={() => setIsCartOpen(true)}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                    <About />
                    <Footer onNavigate={() => {}} />
                  </ProtectedRoute>
                }
              />
              {/* route for contact page */}
              <Route
                path="/contact"
                element={
                  <ProtectedRoute>
                    <Header
                      cartItemsCount={getCartItemsCount()}
                      onCartClick={() => setIsCartOpen(true)}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                    <Contact />
                    <Footer onNavigate={() => {}} />
                  </ProtectedRoute>
                }
              />
              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Cart
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              total={getCartTotal()}
            />
            <WhatsAppButton />
            <ChatBot />
          </div>
        </ChatProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
