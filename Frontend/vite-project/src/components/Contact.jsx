import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-200 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-6">We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" 
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Email</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" 
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Message</label>
            <textarea 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" 
              rows="4" 
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
