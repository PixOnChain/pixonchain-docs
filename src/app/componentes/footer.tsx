"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Pix on Chain - Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <a
            href="/kyt.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:underline"
          >
            Política de KYT
          </a>
          <a
            href="/antissubornoeanticorrupcao.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:underline"
          >
            Política Antissuborno
          </a>
          <a
            href="/kyc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:underline"
          >
            Política de KYC
          </a>
          <a
            href="/termo_servico.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:underline"
          >
            Termo de Serviços
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
