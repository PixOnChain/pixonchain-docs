"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import logo from "@/app/assets/logo-pixonchain.png";
import Head from "next/head";
import { trackEvent } from "../utils/analytics";

const Linktree = () => {
  const [timeRemaining, setTimeRemaining] = useState(18 * 24 * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(days).padStart(2, "0")}d ${String(hours).padStart(
      2,
      "0"
    )}h ${String(minutes).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`;
  };

  const socialLinks = [
    {
      title: "Twitter - Pix on Chain",
      url: "https://x.com/pixonchain_com",
      icon: <FaTwitter />,
    },
    {
      title: "LinkedIn - Pix on Chain",
      url: "https://linkedin.com/company/pixonchain",
      icon: <FaLinkedin />,
    },
    {
      title: "LinkedIn - Pedro Magalhães",
      url: "https://www.linkedin.com/in/pemagalhaes/",
      icon: <FaLinkedin />,
    },
    {
      title: "Instagram - Pix on Chain",
      url: "https://instagram.com/pixonchain",
      icon: <FaInstagram />,
    },
    {
      title: "Discord - Pix on Chain",
      url: "https://discord.gg/tJ8zEprjs6",
      icon: <FaDiscord />,
    },
    {
      title: "Canal do YouTube - Iora Labs",
      url: "https://www.youtube.com/@pedro_dapps",
      icon: <FaYoutube />,
    },
  ];

  const mainLinks = [
    {
      title: "Website Oficial",
      url: "https://pixonchain.com",
      animated: true,
    },
    {
      title: "Apresentação Comercial",
      url: "/business_presentation",
      animated: false,
    },
  ];

  const policyLinks = [
    {
      title: "Política de Privacidade",
      url: "/policies/privacypolicy",
    },
    {
      title: "Termos de Serviço",
      url: "policies/termo",
    },
    {
      title: "Política de Exclusão de Dados",
      url: "/policies/userdatadeletionpolicy",
    },
    {
      title: "Entre em Contato",
      url: "mailto:contact@pixonchain.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Head>
        <title>Pix on Chain - Links Úteis</title>
        <meta
          name="description"
          content="Encontre todos os links úteis da Pix on Chain em um só lugar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="mb-8">
        <Image src={logo} alt="Pix on Chain Logo" width={250} height={250} />
      </div>

      <div className="w-full max-w-md bg-black text-white rounded-lg p-4 mb-6 shadow-lg flex items-center gap-3">
        <span className="font-bold text-lg">⚠️ Atenção:</span>
        <p className="text-sm">
          Nova endpoint para cadastrar webhooks: agora você pode receber até 10 webhooks por chamadas em diferentes URLs.
        </p>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-bold mb-4">🚀 Pix on Chain - Whitelabel</h2>
        <a
          href="https://pixonchain.com/checkout"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#7747ff] text-white font-bold py-6 px-8 rounded-lg hover:bg-purple-700 transition-colors shadow-lg animate-pulse"
        >
          Aproveite Early Adoption - Pix On Chain - Plataforma Whitelabel
          <br />
          <span className="text-yellow-300 text-sm block mt-2">
            Faltam {formatTime(timeRemaining)} para acabar o desconto!
          </span>
        </a>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-bold mb-4">📄 Área de Desenvolvedores</h2>
        <p className="text-sm text-gray-400 mb-4">
          Documentação das APIs para usuários que desejam consumir as APIs do
          Pix on Chain.
        </p>
        <a
          href="/mobile/developer_sections"
          onClick={() =>
            trackEvent({
              action: "view_developer_section",
              category: "Navigation",
              label: "Área de Desenvolvedores",
            })
          }
          className="flex items-center justify-center gap-2 bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          📄 Acessar Documentação
        </a>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-bold mb-4">🔗 Links Importantes</h2>
        <div className="space-y-4">
          {mainLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#7747ff] text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-bold mb-4">🌐 Redes Sociais</h2>
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent({
                  action: "click_social_link",
                  category: "Social Links",
                  label: link.title,
                })
              }
              className="flex items-center gap-3 bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl">{link.icon}</span>
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-bold mb-4">📜 Termos e Serviços</h2>
        <div className="space-y-4">
          {policyLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Pix on Chain - Todos os direitos
        reservados.
      </footer>
    </div>
  );
};

export default Linktree;
