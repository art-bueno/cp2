import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-white">Meu Portfolio</h1>
      <p className="text-white mt-4 text-[24px]">
        Ao clicar no github, verá meu portfolio
      </p>
      <div className="flex items-center">
          <a href="https://github.com/art-bueno" target="_blank" rel="noopener noreferrer" aria-label="Github" >
            <FaGithub className="text-2xl hover:text-red-500 h-[200px] w-[300px] justify-center items-center" />
          </a>
          
        </div>
    </section>
  );
};

export default Portfolio;
