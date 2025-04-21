// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="EZY SKILLS Logo" className="h-12 mb-4" />
            <p className="mb-4">
              Let Us build your career together! Be the first person to transform
              yourself with our unique & world-class corporate level trainings.
            </p>
            <div className="mt-6">
              <h3 className="font-bold mb-3">Subscribe Our Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email address"
                  className="px-4 py-2 rounded-l text-gray-800 w-full"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r">
                  →
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick <span className="text-orange-500">Links</span></h3>
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/courses">Best Courses</Link></li>
              <li><Link to="/faq">Your FAQ's</Link></li>
              <li><Link to="/refunds">Cancellation & Refunds</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact <span className="text-orange-500">Us</span></h3>
            <p className="mb-2">
              Novakathan Complex, 6th Floor, 605, 606 A&F opp. Clock Tower, SD Road, Secunderabad, Telangana 500003
            </p>
            <p className="mb-2">✉ info@ezyskills.in</p>
            <p className="mb-4">📞 +91 8476456903</p>
            <p>📞 +91 9475484959</p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-orange-500">f</a>
              <a href="#" className="text-white hover:text-orange-500">t</a>
              <a href="#" className="text-white hover:text-orange-500">in</a>
              <a href="#" className="text-white hover:text-orange-500">ig</a>
              <a href="#" className="text-white hover:text-orange-500">yt</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
          <div className="flex justify-between items-center">
            <p>Terms & Conditions • Privacy Policy</p>
            <p>© EZY SKILLS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;