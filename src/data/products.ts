// Product Data for Layyah Online Store
// This file contains all product information that the chatbot can reference

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  image?: string;
  tags: string[];
}

export interface Category {
  name: string;
  description: string;
  productCount: number;
  priceRange: {
    min: number;
    max: number;
  };
  popularTags: string[];
}

// Product Categories Data
export const CATEGORIES: Record<string, Category> = {
  electronics: {
    name: "Electronics",
    description: "Latest smartphones, laptops, headphones, and tech gadgets",
    productCount: 45,
    priceRange: { min: 50, max: 2000 },
    popularTags: ["smartphone", "laptop", "headphones", "tablet", "smartwatch"],
  },
  fashion: {
    name: "Fashion",
    description: "Trendy clothing for men, women, and kids",
    productCount: 120,
    priceRange: { min: 20, max: 500 },
    popularTags: ["shirts", "dresses", "jeans", "shoes", "accessories"],
  },
  books: {
    name: "Books",
    description: "Fiction, non-fiction, educational, and children's books",
    productCount: 85,
    priceRange: { min: 10, max: 100 },
    popularTags: [
      "fiction",
      "non-fiction",
      "educational",
      "children",
      "cooking",
    ],
  },
  sports: {
    name: "Sports & Fitness",
    description: "Sports equipment, fitness gear, and outdoor activities",
    productCount: 60,
    priceRange: { min: 30, max: 800 },
    popularTags: ["fitness", "football", "basketball", "yoga", "running"],
  },
  toys: {
    name: "Toys & Games",
    description: "Educational toys, games, and entertainment for all ages",
    productCount: 75,
    priceRange: { min: 15, max: 300 },
    popularTags: [
      "educational",
      "board games",
      "puzzles",
      "action figures",
      "dolls",
    ],
  },
  home: {
    name: "Home & Garden",
    description: "Furniture, decor, gardening tools, and home essentials",
    productCount: 90,
    priceRange: { min: 25, max: 1000 },
    popularTags: ["furniture", "decor", "kitchen", "garden", "lighting"],
  },
};

// Sample Products Data
export const PRODUCTS: Product[] = [
  // Electronics
  {
    id: "e1",
    name: "iPhone 15 Pro",
    category: "electronics",
    subcategory: "smartphones",
    price: 999,
    originalPrice: 1099,
    description: "Latest iPhone with advanced camera system and A17 Pro chip",
    features: ["5G", "48MP Camera", "A17 Pro Chip", "Titanium Design"],
    inStock: true,
    rating: 4.8,
    reviewCount: 1250,
    tags: ["smartphone", "apple", "5G", "camera"],
  },
  {
    id: "e2",
    name: "MacBook Air M2",
    category: "electronics",
    subcategory: "laptops",
    price: 1199,
    description: "Ultra-thin laptop with M2 chip for incredible performance",
    features: ["M2 Chip", "13.6-inch Display", "18-hour Battery", "8GB RAM"],
    inStock: true,
    rating: 4.9,
    reviewCount: 890,
    tags: ["laptop", "apple", "macbook", "m2"],
  },
  {
    id: "e3",
    name: "Sony WH-1000XM5",
    category: "electronics",
    subcategory: "headphones",
    price: 349,
    originalPrice: 399,
    description: "Industry-leading noise canceling wireless headphones",
    features: [
      "Noise Canceling",
      "30-hour Battery",
      "Touch Controls",
      "Premium Sound",
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 567,
    tags: ["headphones", "wireless", "noise canceling", "sony"],
  },

  // Fashion
  {
    id: "f1",
    name: "Classic White T-Shirt",
    category: "fashion",
    subcategory: "shirts",
    price: 25,
    description: "Premium cotton t-shirt perfect for everyday wear",
    features: [
      "100% Cotton",
      "Comfortable Fit",
      "Multiple Colors",
      "Machine Washable",
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 320,
    tags: ["t-shirt", "casual", "cotton", "basic"],
  },
  {
    id: "f2",
    name: "Denim Jacket",
    category: "fashion",
    subcategory: "jackets",
    price: 89,
    originalPrice: 120,
    description: "Timeless denim jacket for a classic look",
    features: [
      "100% Cotton Denim",
      "Classic Fit",
      "Multiple Pockets",
      "Versatile Style",
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    tags: ["jacket", "denim", "casual", "versatile"],
  },
  {
    id: "f3",
    name: "Running Shoes",
    category: "fashion",
    subcategory: "shoes",
    price: 129,
    description: "Comfortable running shoes with advanced cushioning",
    features: ["Lightweight", "Cushioned Sole", "Breathable", "Durable"],
    inStock: true,
    rating: 4.4,
    reviewCount: 456,
    tags: ["shoes", "running", "sports", "comfortable"],
  },

  // Books
  {
    id: "b1",
    name: "The Great Gatsby",
    category: "books",
    subcategory: "fiction",
    price: 12,
    description: "F. Scott Fitzgerald's masterpiece about the American Dream",
    features: ["Classic Literature", "Paperback", "320 Pages", "Bestseller"],
    inStock: true,
    rating: 4.8,
    reviewCount: 1234,
    tags: ["fiction", "classic", "literature", "american"],
  },
  {
    id: "b2",
    name: "Python Programming Guide",
    category: "books",
    subcategory: "educational",
    price: 35,
    description: "Complete guide to Python programming for beginners",
    features: [
      "Beginner Friendly",
      "500 Pages",
      "Code Examples",
      "Updated Content",
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 789,
    tags: ["programming", "python", "educational", "coding"],
  },

  // Sports
  {
    id: "s1",
    name: "Yoga Mat",
    category: "sports",
    subcategory: "fitness",
    price: 45,
    description: "Premium yoga mat for comfortable practice",
    features: [
      "Non-slip Surface",
      "6mm Thickness",
      "Lightweight",
      "Eco-friendly",
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 345,
    tags: ["yoga", "fitness", "mat", "exercise"],
  },
  {
    id: "s2",
    name: "Basketball",
    category: "sports",
    subcategory: "team sports",
    price: 65,
    description: "Official size basketball for indoor/outdoor use",
    features: ["Official Size", "Durable", "Grip Technology", "Indoor/Outdoor"],
    inStock: true,
    rating: 4.5,
    reviewCount: 234,
    tags: ["basketball", "sports", "team", "outdoor"],
  },

  // Toys
  {
    id: "t1",
    name: "LEGO City Set",
    category: "toys",
    subcategory: "building",
    price: 45,
    description: "Creative building set for kids aged 6-12",
    features: ["500+ Pieces", "Educational", "Creative Building", "Age 6-12"],
    inStock: true,
    rating: 4.8,
    reviewCount: 567,
    tags: ["lego", "building", "educational", "creative"],
  },
  {
    id: "t2",
    name: "Board Game Collection",
    category: "toys",
    subcategory: "games",
    price: 75,
    description: "Family board game collection with 5 popular games",
    features: [
      "5 Games Included",
      "Family Friendly",
      "2-8 Players",
      "Educational",
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    tags: ["board games", "family", "entertainment", "educational"],
  },

  // Home & Garden
  {
    id: "h1",
    name: "Coffee Table",
    category: "home",
    subcategory: "furniture",
    price: 299,
    description: "Modern coffee table with storage shelf",
    features: ["Modern Design", "Storage Shelf", "Solid Wood", "Easy Assembly"],
    inStock: true,
    rating: 4.4,
    reviewCount: 123,
    tags: ["furniture", "coffee table", "modern", "storage"],
  },
  {
    id: "h2",
    name: "Garden Tool Set",
    category: "home",
    subcategory: "garden",
    price: 89,
    description: "Complete garden tool set for all your gardening needs",
    features: [
      "10 Tools Included",
      "Durable Steel",
      "Comfortable Grips",
      "Storage Case",
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 178,
    tags: ["garden", "tools", "outdoor", "gardening"],
  },
];

// Helper functions for chatbot
export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter((product) => product.category === category);
};

export const getProductsByPriceRange = (
  min: number,
  max: number
): Product[] => {
  return PRODUCTS.filter(
    (product) => product.price >= min && product.price <= max
  );
};

export const getProductsOnSale = (): Product[] => {
  return PRODUCTS.filter(
    (product) => product.originalPrice && product.originalPrice > product.price
  );
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
};

export const getCategoryInfo = (category: string): Category | null => {
  return CATEGORIES[category] || null;
};

export const getProductById = (id: string): Product | null => {
  return PRODUCTS.find((product) => product.id === id) || null;
};

// Pricing information for chatbot responses
export const PRICING_INFO = {
  categories: CATEGORIES,
  saleItems: getProductsOnSale(),
  averagePrices: {
    electronics: 450,
    fashion: 85,
    books: 25,
    sports: 120,
    toys: 60,
    home: 200,
  },
  discountRanges: {
    electronics: "10-30% off",
    fashion: "20-50% off",
    books: "15-40% off",
    sports: "25-45% off",
    toys: "30-60% off",
    home: "20-40% off",
  },
};
