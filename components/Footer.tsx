import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import { SidebarOptInForm } from './sidebar-opt-in-form';

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Message Section */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Celebrating Kenya’s Spirit of Unity, Resilience, and Progress!
        </h3>
        <p className="text-lg md:text-xl mb-8">
          As we celebrate Jamhuri Day, let’s remember that our unity is the foundation of our strength. Together, we will continue to build a brighter future for our beloved Kenya.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-3xl hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-3xl hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-3xl hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-3xl hover:text-blue-600 transition-colors" />
          </a>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-4">Stay Updated with GoodInfo!</h4>

<div className="">
<SidebarOptInForm  />
</div>

        </div>
      </div>

      {/* Footer Credits Section */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} GoodInfo. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
