import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import {Navigate ,Route , Routes} from "react-router-dom"




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
