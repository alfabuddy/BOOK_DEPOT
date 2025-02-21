import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6">
      <div className="max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-4">About Our Bookstore</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to our bookstore! We are passionate about bringing you a curated selection of books 
          across various genres, from timeless classics to modern bestsellers. Our goal is to create a 
          space where book lovers can explore, discover, and enjoy great literature.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Whether you're looking for fiction, non-fiction, sci-fi, romance, or educational materials, 
          we have something for everyone. Visit us online or in-store and embark on a literary adventure!
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
            Browse Books
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
