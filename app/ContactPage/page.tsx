"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Defining types for form data
type FormData = {
  fullName: string;
  email: string;
  address: string;
  mobileNumber: string;
  occupation: string;
  message: string;
};

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    mobileNumber: '',
    occupation: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState<string>('');

  // Handle input changes with proper typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission with validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.fullName || !formData.email || !formData.message || !formData.address || !formData.mobileNumber || !formData.occupation) {
      setStatusMessage('All fields are required');
      return;
    }

    // Send message using EmailJS
    emailjs
      .send(
        'service_ak5633e', // Service ID from EmailJS
        'template_kjlgm0t', // Template ID from EmailJS
        formData,
        'CIntmA5Pmdt-ViNny' // User ID from EmailJS
      )
      .then(
        (response) => {
          console.log('Success:', response);
          setStatusMessage('Your message has been sent successfully!');
          setFormData({ fullName: '', email: '', address: '', mobileNumber: '', occupation: '', message: '' }); // Clear the form
        },
        (error) => {
          console.log('Error:', error);
          setStatusMessage('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 py-12 px-4 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
          Get in Touch with Us
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 text-gray-200">
          We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800"
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700 font-medium mb-2 ">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800"
              required
            />
          </div>

          {/* Occupation Field */}
          <div className="mb-4">
            <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-800"
              rows={5}
              required
            />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className="mb-4 text-center text-lg font-medium">
              <p className="text-yellow-400">{statusMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
