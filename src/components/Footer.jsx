import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-neutral-500 text-white p-4 mt-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between mt-4">
        <div className="md:w-1/4  lg:border-r lg:border-orange-500 p-2 mr-4">
          <h3 className="text-xl font-bold">GYM</h3>
          <p className="text-sm mt-6">
            Lorem ipsum dolor sit feugiat varius nue aliquet.
          </p>
          <div className="flex justify-start mt-4">
            <a href="https://www.facebook.com/" className="mr-3">
            <FontAwesomeIcon icon={faFacebook} size="xl" color='white' />
            </a>
            <a href="https://www.instagram.com/" className="mr-3">
            <FontAwesomeIcon icon={faInstagram} size="xl" color='white' />
            </a>
            <a href="https://www.youtube.com/" className="mr-3">
            <FontAwesomeIcon icon={faYoutube} size="xl" color='white' />
            </a>
          </div>
        </div>
        <div className="md:w-1/4 mt-4 md:mt-0  lg:border-r lg:border-orange-500 p-2 mr-4">
          <h3 className="text-sm font-bold">Healthy Living</h3>
          <ul className="list-none mt-6">
            <li className="text-sm">Lorem</li>
            <li className="text-sm">Lorem ipsum</li>
            <li className="text-sm">Lorem</li>
            <li className="text-sm">Lorem ipsum</li>
          </ul>
        </div>
        <div className="md:w-1/4 mt-4 md:mt-0 lg:border-r lg:border-orange-500 p-2 mr-4">
          <h3 className="text-sm font-bold">Services</h3>
          <ul className="list-none mt-6">
            <li className="text-sm">Lorem</li>
            <li className="text-sm">Lorem ipsum</li>
            <li className="text-sm">Lorem</li>
            <li className="text-sm">Lorem ipsum</li>
          </ul>
        </div>
        <div className="md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-sm font-bold">Programs</h3>
          <ul className="list-none mt-6">
            <li className="text-sm">Lorem</li>
            <li className="text-sm">Lorem ipsum</li>
            <li className="text-sm">Lorem</li>
            <li className="text-sm">Lorem ipsum</li>
          </ul>
        </div>
      </div>
      <div className="text-sm text-center mt-6 p-4">
        &copy; 2023 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;