import Home from "/src/home/Home"
import Courses from '/src/courses/Courses';
import {Navigate ,Route , Routes} from "react-router-dom"
import Signup from "/src/components/Signup"
import Contact from "/src/components/Contact"
import About from "./src/components/About";



import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log("authUser")
  return (
    <>
       <div >
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
       </div>

        
    </>
    
    
  )}

  export default App
