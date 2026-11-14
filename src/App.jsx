import toast from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
 

  return (
    <div>
       
      {/* <h1 className="bg-blue-500 or text-xl">hellow react</h1> */}
     <Navbar/>
     <Hero/>
      <Footer/>
      {/* <Toaster /> */}
    </div>
  )
}

export default App
