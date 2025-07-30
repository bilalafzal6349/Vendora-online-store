import React from "react";
import { Store, Users, Award, Heart, Truck, Shield } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-emerald-600">Vendora OnlineStore</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted online shopping destination, bringing you the finest
              products with exceptional service and unbeatable prices since our
              inception.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded with a vision to revolutionize online shopping in
                  Pakistan, Vendora OnlineStore has grown from a small local
                  business to a trusted e-commerce platform serving customers
                  nationwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that everyone deserves access to quality products
                  at fair prices, delivered with care and backed by exceptional
                  customer service. Our commitment to excellence has made us a
                  preferred choice for thousands of satisfied customers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    100K+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Products</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/aboutPic.jpeg"
                alt="About Us"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our
              commitment to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Customer First
              </h3>
              <p className="text-gray-600">
                Every decision we make is centered around providing the best
                possible experience for our valued customers.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                We carefully curate our product selection to ensure only the
                highest quality items reach our customers.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery service to get your orders to you as
                fast as possible, anywhere in Pakistan.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Secure Shopping
              </h3>
              <p className="text-gray-600">
                Your privacy and security are our top priorities. Shop with
                confidence knowing your data is protected.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We're proud to be part of the Vendora community and committed to
                supporting local growth and development.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                Constantly improving our platform and services to provide you
                with the best online shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            To make quality products accessible to everyone in Pakistan through
            innovative e-commerce solutions, exceptional customer service, and a
            commitment to building lasting relationships with our customers and
            community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
