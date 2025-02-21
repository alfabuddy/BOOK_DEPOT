import React from "react";
import Cards from "./Cards"
import { useEffect,useState } from "react";

import {Link} from "react-router-dom"
import axios from "axios";
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
       const res=await axios.get("https://book-depot-5.onrender.com")
       console.log(res.data)
       setBook(res.data)
      }
      catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    getBook()
      
  },[])
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-32 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We are delighted to have you{" "}
          <span className="text-orange-500">here! :)</span>
        </h1>
      </div>

      <div className="mt-12 max-w-2xl mx-auto text-gray-700">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut,
          tempora temporibus inventore tenetur quos eaque? Alias sunt quos nisi
          est nostrum aperiam pariatur adipisci totam aliquid. Distinctio illum
          sint veniam vero quam iure perferendis atque doloremque, corporis
          facilis sapiente?
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <Link to="/">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">
          Back
        </button>
        </Link>
        
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
  {book.map((item) => (
    <Cards key={item.id} item={item} />
  ))}
</div>


    </div>
  );
}

export default Course;
