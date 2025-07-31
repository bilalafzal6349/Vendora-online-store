import React from "react";
import { Truck, Shield, Headphones } from "lucide-react";

interface HeroProps {
  onShopNow: () => void;
  onViewCategories: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow, onViewCategories }) => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Shop the Best
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 block">
                  Products Online
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-8 leading-relaxed max-w-lg">
                Discover amazing products at unbeatable prices. From electronics
                to fashion, we have everything you need with fast delivery and
                excellent customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={onShopNow}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                View Products
              </button>
              {/* <button
                onClick={onViewCategories}
                className="border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Categories
              </button> */}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="flex items-center space-x-4 group">
                <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300">
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-600">On orders over ₹999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Secure Payment</p>
                  <p className="text-sm text-gray-600">100% Protected</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300">
                  <Headphones className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">24/7 Support</p>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}

          <div className="relative animate-fadeInRight">
            <div className=" rounded-lg  transition-transform duration-700 shadow-lg">
              <img
                src="/ve.jpeg"
                alt="Shopping"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            {/* <div className="absolute -top-6 -left-6 bg-white p-2 md:p-6 rounded-2xl shadow-2xl animate-float ">
              <div className="flex items-center space-x-3 ">
                <ShoppingBag className="  h-3 w-3  md:h-8 md:w-8 text-emerald-600" />
                <div>
                  <p className="font-bold text-gray-900 text-sm md:text-lg">
                    1000+
                  </p>
                  <p className=" text-[10px] md:text-sm text-gray-600">
                    Products
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
