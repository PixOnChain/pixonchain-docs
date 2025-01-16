"use client"

import React from "react"
import Image from "next/image"
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa"
import logo from "@/app/assets/logo-pixonchain.png"

const Linktree = () => {
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
  ]

  const mainLinks = [
    {
      title: "Website Oficial",
      url: "https://pixonchain.com",
      animated: false,
    },
    {
      title: "Apresentação Comercial",
      url: "/business_presentation",
      animated: false,
    },
  ]

  const pedroLinks = [
    {
      title: "Reentrancy Attack Example no GitHub",
      url: "https://github.com/pedrosgmagalhaes/reentrancy_attack_example",
    },
    {
      title: "GitHub de Pedro Magalhães",
      url: "https://github.com/pedrosgmagalhaes",
    },
    {
      title:
        "Projeto-piloto de CBDC do Brasil contém código que pode congelar ou subtrair fundos de usuários, afirma desenvolvedor - CoinTelegraph",
      url: "https://br.cointelegraph.com/news/brazil-cbdc-pilot-source-code-can-freeze-funds",
    },
    {
      title:
        "Drex: o que é o “real digital” e por que a direita está em campanha contra ele - Gazeta do Povo",
      url: "https://www.gazetadopovo.com.br/economia/drex-o-que-e-o-real-digital-e-por-que-a-direita-esta-em-campanha-contra-ele/",
    },
    {
      title: "Criptomoedas e Grupos Internacionais - Gazeta do Povo",
      url: "https://www.gazetadopovo.com.br/ideias/hamas-e-outros-grupos-terroristas-usam-criptomoedas-para-burlar-sancoes-financeiras-internacionais/",
    },
  ]

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
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="mb-8">
        <Image src={logo} alt="Pix on Chain Logo" width={250} height={250} />
      </div>

      <h1 className="text-2xl font-bold mb-6">Pix on Chain - Links</h1>

      <div className="w-full max-w-md mb-8">
        <a
          href="https://discordapp.com/events/1324916112982282332/1329558171206811709/1331933950771200000"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#7747ff] text-white font-bold py-6 px-8 rounded-lg hover:bg-purple-700 transition-colors shadow-lg animate-pulse"
        >
          🔴 Live no Discord - Hoje às 19:30 (Como montar sua corretora de criptomoedas?)
        </a>
      </div>

      <div className="w-full max-w-md mb-10">
        <div className="space-y-4">
          {mainLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center bg-[#7747ff] text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors ${
                link.animated ? "animate-pulse hover:animate-none" : ""
              }`}
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
              className="flex items-center gap-3 bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl">{link.icon}</span>
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mb-10">
        <h2 className="text-lg font-bold mb-4">📚 Sobre Pedro Magalhães</h2>
        <div className="space-y-4">
          {pedroLinks.map((link, index) => (
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

      <div className="w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">📜 Políticas</h2>
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
  )
}

export default Linktree
