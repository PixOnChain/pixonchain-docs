"use client";

import React from "react";

const Footer = () => {
  const policies = [
    {
      title: "Política de KYT",
      path: "/policies/kyt",
    },
    {
      title: "Política Antissuborno",
      path: "/policies/antissuborno",
    },
    {
      title: "Política de KYC",
      path: "/policies/kyc",
    },
    {
      title: "Termo de Serviços",
      path: "/policies/termo",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Pix on Chain - Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          {policies.map((policy, index) => (
            <a
              key={index}
              href={policy.path}
              className="text-sm text-gray-300 hover:underline"
            >
              {policy.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
