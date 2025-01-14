"use client"

import React, { useState } from "react";
import Hero from "./componentes/hero";
import Head from "next/head";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Head>
        <title>Pix on Chain - A Corretora de Criptomoedas.</title>
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1Z1WTP4GWX"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Z1WTP4GWX');
          `,
        }}
      />
      <main>
        <Hero />
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleDropdown}
            className="bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            aria-label="Toggle WhatsApp Dropdown"
          >
            <FaWhatsapp className="text-white w-10 h-10" />
          </button>

          {isDropdownOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-lg p-4 w-48 text-black">
              <p className="text-sm font-medium">Entre em contato:</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://wa.me/554731705121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:underline"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@pixonchain.com"
                    className="flex items-center gap-2 text-gray-600 hover:underline"
                  >
                    ✉️ Email
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
