import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Ministries', path: '/ministries' },
  { name: 'Watch-Online', path: '/Watch-Online' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Contact Us', path: '/Contact-Us' },
  { name: 'Social Media', path: '/social-media' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-violet-900 backdrop-blur-lg shadow-md px-4 py-3 lg:px-8 lg:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-blue-900 font-extrabold text-2xl tracking-wide hover:text-blue-700 transition-colors duration-300">
          <img src="/church.png" alt="Logo" className="h-16 w-16 object-cover rounded-full border-2 border-blue-300 shadow-sm mr-3" />
          CWCI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-indigo-100 px-3 py-2 hover:text-blue-600 ${
                location.pathname === item.path ? "border-b-2 border-blue-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-violet/90 backdrop-blur-md shadow-lg p-4 flex flex-col space-y-2 mt-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-indigo-100 hover:text-blue-600 py-2 block"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
