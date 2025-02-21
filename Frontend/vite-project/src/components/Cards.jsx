import React from "react";

function Cards({ item }) {
  return (
    <div className="bg-[#121212] text-white rounded-lg shadow-md overflow-hidden w-72 transition-transform duration-300 hover:scale-105">
      {/* Image Container with Fixed Size */}
      <div className="w-89 h-94 ">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-fill"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-sm text-gray-400">{item.title}</p>

        {/* Price and Category */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-semibold">${item.price}</span>
          <span
            className={`px-2 py-1 text-xs font-bold rounded-full ${
              item.category === "Free" ? "bg-red-500" : "bg-purple-500"
            }`}
          >
            {item.category}
          </span>
        </div>

        {/* Buy Button */}
        <button className="w-full mt-4  bg-white text-black py-2 rounded-md hover:bg-gray-200 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cards;
