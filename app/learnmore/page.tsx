import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 text-white py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to GoodInfo!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are a technology company offering world-class cloud computing services, expert consulting, and innovative solutions.
        </p>
        <a
          href="#services"
          className="bg-white text-gray-900 px-6 py-3 text-lg font-medium rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Explore Our Services
        </a>
      </div>

      {/* About Section */}
      <div id="about" className="my-12 px-4 md:px-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">About GoodInfo</h2>
        <p className="text-lg md:text-xl text-gray-200">
          At GoodInfo, we specialize in providing cloud solutions and expert consulting that helps businesses and individuals leverage the power of cloud computing to optimize their operations, increase scalability, and drive innovation.
        </p>
      </div>

      {/* Services Section */}
      <div id="services" className="my-12 bg-white text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-green-50 transition">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Cloud Computing Solutions</h3>
              <p className="text-lg text-gray-700 mb-4">
                We offer tailored cloud computing services that cater to your business needs, enhancing performance and scalability.
              </p>
              <a href="#contact" className="text-green-600 hover:underline">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-green-50 transition">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Consulting Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our experts provide top-notch consulting to guide you through cloud adoption, strategy planning, and optimization.
              </p>
              <a href="#contact" className="text-green-600 hover:underline">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-green-50 transition">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Business Optimization</h3>
              <p className="text-lg text-gray-700 mb-4">
                We help businesses streamline their processes and enhance productivity with cutting-edge technology solutions.
              </p>
              <a href="#contact" className="text-green-600 hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div id="contact" className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Our team of experts is here to help you with cloud solutions, consulting, and everything in between. Get in touch with us today!
        </p>
        <a
          href="mailto:colllinsmunene04@outlook.com"
          className="bg-white text-gray-900 px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 text-gray-200 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} GoodInfo. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Page;
