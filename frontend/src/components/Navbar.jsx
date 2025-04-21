// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="EZY SKILLS Logo" className="h-10" />
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
        <Link to="/course-selector" className="text-gray-700 hover:text-orange-500">Course Selector</Link>
        <Link to="/courses" className="text-gray-700 hover:text-orange-500">Courses</Link>
        <Link to="/faq" className="text-gray-700 hover:text-orange-500">FAQ</Link>
        <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
        <Link to="/about" className="text-gray-700 hover:text-orange-500">About Us</Link>
      </div>
      
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-50">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">
            Create Account
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;