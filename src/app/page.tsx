"use client"

import React, { useState } from "react"
import Hero from "./componentes/hero"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"
import { FaWhatsapp } from "react-icons/fa"
import Footer from "./componentes/footer"

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <Head>
        <title>Pix on Chain - A Corretora de Criptomoedas.</title>
        <meta
          name="description"
          content="Pix on Chain, sua corretora de criptomoedas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Google Analytics */}
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

      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1142699687389974');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <Image
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1142699687389974&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>

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
      <Footer />
    </>
  )
}
