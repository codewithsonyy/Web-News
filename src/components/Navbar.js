import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-50 fixed top-0 z-10 w-screen dark:bg-gray-700 py-2">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li className="sm:text-lg font-bold"> NewsMonkey</li>
              <li>
                <Link
                  to="/general"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Technology
                </Link>
              </li>
             
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
