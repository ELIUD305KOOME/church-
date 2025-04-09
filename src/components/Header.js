import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  
  {
    name: 'Ministries',
    subItems: [
      { name: 'Youth Ministry', path: 'https://chat.whatsapp.com/youth-ministry-group' },
      { name: 'Women’s Ministry', path: 'https://chat.whatsapp.com/womens-ministry-group' },
      { name: 'Men’s Fellowship', path: 'https://chat.whatsapp.com/mens-fellowship-group' },
      { name: 'Children’s Church', path: 'https://chat.whatsapp.com/childrens-church-group' },
      { name: 'Worship Team', path: 'https://chat.whatsapp.com/worship-team-group' },
      { name: 'Outreach / Evangelism', path: 'https://chat.whatsapp.com/outreach-evangelism-group' },
    ],
  },
  {
    name: 'Sermons',
    subItems: [
      { name: 'Video sermons', path: 'https://www.youtube.com/@christworshipcenter3342' },
      // { name: 'Audio sermons', path: '/sermons/audio' },
      // { name: 'Sermon notes / transcripts', path: '/sermons/notes' },
    ],
  },
  
  {
    name: 'Get Involved',
    subItems: [
      { name: 'Join a ministry', path: 'https://chat.whatsapp.com' },
      { name: 'Volunteer opportunities', path: 'https://chat.whatsapp.com' },
      // { name: 'Small groups / Bible studies', path: '/involved/groups' },
    ],
  },
  // {
  //   name: 'Give / Donate',
  //   subItems: [
  //     { name: 'Tithes & offerings', path: '/donate/tithes' },
  //     // { name: 'Mission giving', path: '/donate/missions' },
  //     // { name: 'Building fund', path: '/donate/building' },
  //   ],
  // },
  // {
  //   name: 'Visit Us',
  //   subItems: [
  //     { name: 'Service times', path: '/visit/times' },
  //     { name: 'Location map', path: '/visit/map' },
  //     { name: 'Directions', path: '/visit/directions' },
  //     { name: 'What to expect', path: '/visit/what-to-expect' },
  //   ],
  // },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b dark:from-gray-900/60 dark:via-gray-700/40 dark:to-transparent backdrop-blur-lg shadow-md px-4 py-3 lg:px-8 lg:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-blue-900 font-extrabold text-2xl tracking-wide hover:text-blue-700 transition-colors duration-300">
          <img src="/church.png" alt="Logo" className="h-16 w-16 object-cover rounded-full border-2 border-blue-300 shadow-sm mr-3" />
          CWCI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.subItems ? (
                <>
                  <button className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute hidden group-hover:block top-full mt-2 left-0 bg-white shadow-lg rounded-lg py-2 w-64 z-50">
                    {item.subItems.map((subItem, i) => (
                      <Link
                        key={i}
                        to={subItem.path}
                        className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-800 hover:text-blue-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`text-gray-900 px-3 py-2 hover:text-blue-600 ${
                    location.pathname === item.path ? "border-b-2 border-blue-600" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Login */}
        {/* <Link
          to="/login"
          className="hidden md:block border border-blue-500 text-blue-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          Login
        </Link> */}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-violet/90 backdrop-blur-md shadow-lg p-4 flex flex-col space-y-2 mt-2">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex justify-between items-center w-full text-left text-gray-800 font-medium py-2"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem, i) => (
                        <Link
                          key={i}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-blue-600 text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-blue-600 py-2 block"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          {/* <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link> */}
        </div>
      )}
    </header>
  );
};

export default Header;
