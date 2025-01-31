import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Refs for dropdowns to check if click is outside
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Simulating user login status
  const user = true; // Change to true to simulate logged-in state

  const navItems = [
    {
      name: "Solutions",
      link: "#",
      submenu: [
        { name: "AnyCaaS", link: "#" },
        { name: "AnyPaaS", link: "#" },
        { name: "AnyIaaS", link: "#" },
      ],
    },
    { name: "Service", link: "#" },

    { name: "About Us", link: "#" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsProfileDropdownOpen(false);
      }
    };

    // Attach the event listener to document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-transparent shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Navbar Start */}
        <div className="flex items-center">
          {/* Dropdown for Mobile */}
          <div className="lg:hidden" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-gray-600 focus:outline-none focus:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-md">
                <ul className="py-2">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                      {item.submenu && (
                        <ul className="ml-4 mt-2">
                          {item.submenu.map((subitem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subitem.link}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {subitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-gray-800">
            <span className="font-bold">ANY</span>Tech
          </a>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex space-x-6">
          <ul className="flex items-center space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className={item.submenu ? "relative group" : ""}>
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <ul className="hidden group-hover:block absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-md">
                    {item.submenu.map((subitem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subitem.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* len */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              <FaUserCircle className="text-2xl text-gray-700" />
              <span className="text-gray-700">Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-md">
                <ul className="py-2">
                  {user ? (
                    <>
                      <li>
                        <a
                          href="#dashboard"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#logout"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a
                          href="#login"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          href="#signup"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Signup
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navbar End */}

        <div>
          <button type="button">asd</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
