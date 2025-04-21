// src/pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import devImage from '../assets/developers.png'; // You'll need to add this image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-stretch">
        <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-8 text-blue-900">Log In</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800"
              >
                Login
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p>Already haven't? <Link to="/signup" className="text-blue-900 font-bold">Login Here</Link></p>
            </div>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/path/to/google-icon.png" alt="Google" className="h-5 w-5" />
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/path/to/facebook-icon.png" alt="Facebook" className="h-5 w-5" />
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <img src="/path/to/apple-icon.png" alt="Apple" className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              By continuing, you agree to the Terms of Service and Privacy Policy
            </div>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 bg-blue-50">
          <div className="h-full flex items-center justify-center p-10">
            <img src={devImage} alt="Developers" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;