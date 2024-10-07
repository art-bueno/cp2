import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contatos = () => {
  return (
    <section>
    <div className="flex py-10 ">
        <h1 className="text-4xl font-bold text-white">Entre em contato por email ou pelo Linkedin</h1>
        <a href="mailto: arthurbueno1903@gmail.com" aria-label="Email">
            <FaEnvelope className="text-2xl hover:text-red-500 h-[200px] w-[200px] justify-center flex-col" />
          </a>
        <a href="https://www.linkedin.com/in/arthur-bueno-2089a8260/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl hover:text-red-500 h-[200px] w-[200px] justify-center flex-col" />
          </a>
    </div>
    </section>
  );
};

export default Contatos;
