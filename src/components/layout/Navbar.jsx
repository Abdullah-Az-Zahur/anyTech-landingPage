import { useState, useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Refs for dropdowns to check if click is outside
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

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
    <div className="bg-blue-600 shadow-md ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
        {/* Navbar Start */}
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-white">
            <span className="font-bold">ANY</span>Tech
          </a>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex space-x-6">
          <ul className="flex items-center space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className={item.submenu ? "relative group" : ""}>
                <a href={item.link} className="text-white hover:text-gray-800">
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
              className="flex items-center space-x-2  px-4 py-2 rounded-full border border-white hover:bg-gray-200"
            >
              <FaGlobe className="text-white" />
              <span className="text-white">EN</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
                  <>
                    <li>
                      <a
                        href="#logout"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        EN (English)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#logout"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        TH (Thai)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#logout"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        ID (Bahasa indonesia)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#logout"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        TW (Traditional Chinese)
                      </a>
                    </li>
                  </>
                </ul>
              </div>
            )}
          </div>
          {/* contact */}
          <div>
            <button
              type="button"
              className="text-white font-bold border p-3 rounded-md flex text-center items-center gap-2"
            >
              Contact Us <IoIosArrowForward className="font-bold" />
            </button>
          </div>
        </div>

        {/* Navbar End */}

        {/* Dropdown for Mobile */}
        <div className="lg:hidden " ref={dropdownRef}>
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
            <div className="absolute left-0 mt-2 w-full rounded-lg bg-blue-500 shadow-md">
              <ul className="py-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block px-4 py-2 text-white hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <ul className="ml-4 mt-2">
                        {item.submenu.map((subitem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subitem.link}
                              className="block px-4 py-2 text-white hover:bg-gray-100"
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
              <div className="relative  " ref={profileDropdownRef}>
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 border-s  px-4 py-2 rounded-full   mx-auto"
                >
                  <FaGlobe className="text-white" />
                  <span className="text-white">ENGLISH</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
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
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg bg-blue-500 shadow-md">
                    <ul className="py-2">
                      <>
                        <li>
                          <a
                            href="#logout"
                            className="block px-4 py-2 text-white hover:bg-gray-100"
                          >
                            English
                          </a>
                        </li>
                        <li>
                          <a
                            href="#logout"
                            className="block px-4 py-2 text-white hover:bg-gray-100"
                          >
                            Thai
                          </a>
                        </li>
                        <li>
                          <a
                            href="#logout"
                            className="block px-4 py-2 text-white hover:bg-gray-100"
                          >
                            Bahasa indonesia
                          </a>
                        </li>
                        <li>
                          <a
                            href="#logout"
                            className="block px-4 py-2 text-white hover:bg-gray-100"
                          >
                            Traditional Chinese
                          </a>
                        </li>
                      </>
                    </ul>
                  </div>
                )}
              </div>
              {/* contact */}
              <div className="mx-4">
                <button
                  type="button"
                  className="text-white font-bold border p-3 rounded-md flex text-center items-center gap-2 mx-auto w-full  justify-center my-10 "
                >
                  Contact Us <IoIosArrowForward className="font-bold " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
