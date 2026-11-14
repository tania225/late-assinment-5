import toast from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
function App() {
 

  return (
    <div>
     <Navbar/>
     <Hero/>
      <TechnologySection />
      <Footer/>
      {/* <Toaster /> */}
    </div>
  )
}

export default App
