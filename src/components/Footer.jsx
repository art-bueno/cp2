import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <p className="text-sm">© 2024 Arthur Bueno. Todos os direitos reservados.</p>

        
        <div className="flex space-x-4">
          <a href="https://github.com/art-bueno" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub className="text-2xl hover:text-red-500" />
          </a>
          <a href="https://www.linkedin.com/in/arthur-bueno-2089a8260/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl hover:text-red-500" />
          </a>
          <a href="mailto: arthurbueno1903@gmail.com" aria-label="Email">
            <FaEnvelope className="text-2xl hover:text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
