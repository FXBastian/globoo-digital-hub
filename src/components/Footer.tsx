
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between md:px-8">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GLOBOO Digital Hub - Material de Estudo
          </span>
        </div>
        <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-primary">
            Termos
          </a>
          <a href="#" className="hover:text-primary">
            Privacidade
          </a>
          <a href="#" className="hover:text-primary">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};
