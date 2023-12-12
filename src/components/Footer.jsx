import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <a href='/blog' ><p>Blog</p></a>
            <a href='/work_with_us' ><p>Work With Us</p></a>
            <a href='/fraud' ><p>Report Fraud</p></a>
            <a href='/' ><p></p></a>
            <a href='/' ><p></p></a>
              </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: puspendrajadon142@gmail.com</p>
            <p>Phone: 7389140417</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-white gap-1 flex items-center hover:text-gray-500 transition duration-300">
              <ImFacebook2 /> Facebook
              </a>
              <a href="/" className="text-white gap-1 flex items-center hover:text-gray-500 transition duration-300">
              <FaSquareXTwitter />Twitter
              </a>
              <a href="/" className="text-white gap-1 flex items-center hover:text-gray-500 transition duration-300">
              <FaInstagramSquare />Instagram
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl text-center font-bold mb-2">Download Our App</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-white hover:text-gray-500 transition duration-300">
                {/* <i className="fab fa-apple"></i> */}
                <img src='https://woosports.com/wp-content/uploads/2020/07/toppng.com-android-app-store-app-store-and-android-icons-2145x1493-1.png' alt='/'/>
              </a>
              <br></br>
              <a href="/" className="text-white hover:text-gray-500 transition duration-300">
                {/* <i className="fab fa-android">android</i> */}
                <img src='https://woosports.com/wp-content/uploads/2020/07/toppng.com-android-app-store-app-store-and-android-icons-2145x1493-copy.png' alt='/' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm">
          &copy; By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023 © Food Express™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
