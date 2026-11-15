 import { useState } from 'react';
 import { SquareMenu } from 'lucide-react';
import logoImg from '../assets/logo-text.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
     <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 ">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" >
     {/* devstack logo from assets */}

      <div>
        <img 
        src={logoImg}
        alt="Dev Stack Logo" 
         />
      </div>

      {/*navifation menue*/}

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <ul className="flex items-center gap-3 cursor-pointer">
          <li className="text-pink-500">Home"</li>
           <li>Technologies</li>
            <li>Projects</li>
             <li>About</li>
              <li>Contact</li>
       </ul>
      </div>
      
        {/* Right Side: Action Buttons */}
<div className="hidden sm:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
            Sign In
          </button>
          <button className="text-sm font-medium text-white bg-linear-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-5 py-2.5 rounded-full cursor-pointer">
            Sign Up
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer md:hidden">
             {isMenuOpen ? <X /> :<SquareMenu/> }  
            </button>
        </div>
 
 </div>
{/* {isMenuOpen && (
//  <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
//         <ul className="flex items-center gap-3">
//           <li className="text-sm font-medium text-white bg-linear-to-r">Home"</li>
//           <li>Home</li>
//            <li className="cursor-pointer">Technologies</li>
//             <li>Projects</li>
//              <li>About</li>
//               <li>Contact</li>
//        </ul>
       
//       </div> */}
)}
 
    </header>
  );
};

export default Navbar;