import React from "react";
import {Bg1,text1 } from "../style/Color";
const Footer = () => {
  return (
    <footer className={`mt-8 p-4 ${Bg1} ${text1} `}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>Your company description goes here.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="list-none p-0">
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  className="text-white hover:text-gray-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="text-white hover:text-gray-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/i/flow/login"
                  className="text-white hover:text-gray-300"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Subscribe</h3>
            <p>Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-2 rounded"
            />
            <button className="bg-blue-500 text-white p-2 mt-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
