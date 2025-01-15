"use client"

import React, { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"

import logo from "@/app/assets/logo-pixonchain.png"
import vipCard from "@/app/assets/cartao-vip.png"
import discord from "@/app/assets/discord.png"
import bg from "@/app/assets/bg.png"
import phone from "@/app/assets/phone.png"
import instagram from "@/app/assets/instagram.png"
import twitter from "@/app/assets/twitter.png"
import linkedin from "@/app/assets/linkedin.png"
import whatsapp from "@/app/assets/whatsapp.png"
import ModalContactUs from "./modalContactUs"

interface SocialLink {
  id: number
  name: string
  src: StaticImageData
  width: number
  height: number
  href: string
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Whatsapp",
    src: whatsapp,
    width: 19,
    height: 19,
    href: "https://wa.me/554731705121",
  },
  {
    id: 2,
    name: "Twitter",
    src: twitter,
    width: 19,
    height: 19,
    href: "https://x.com/pixonchain_com",
  },
  {
    id: 3,
    name: "Instagram",
    src: instagram,
    width: 19,
    height: 19,
    href: "https://instagram.com/pixonchain",
  },
  {
    id: 4,
    name: "LinkedIn",
    src: linkedin,
    width: 19,
    height: 19,
    href: "https://linkedin.com/company/pixonchain",
  },
]

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  useEffect(() => {
    const endDate = new Date("2025-02-04T23:59:59").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = endDate - now

      if (difference > 0) {
        const dias = Math.floor(difference / (1000 * 60 * 60 * 24))
        const horas = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutos = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const segundos = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ dias, horas, minutos, segundos })
      } else {
        clearInterval(interval)
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="w-full min-h-screen flex flex-col px-4 sm:px-6 md:px-12 xl:px-[186px] py-[33px] text-white relative bg-black overflow-hidden">
        <Image src={bg} alt="Background" fill className="z-10 object-cover" />
        {isOpenModal && <ModalContactUs setIsOpenModal={setIsOpenModal} />}

        <div className="w-full h-full flex flex-col flex-1">
          <div className="flex justify-between gap-2 z-20 relative">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                width={252}
                height={32}
                className="sm:w-[252px] w-[150px]"
              />
            </div>
            <a
              href="https://wa.me/554731705121"
              className="font-bold font-montserrat flex justify-center items-center text-sm sm:text-base leading-6 bg-[#7747FF] rounded-lg px-2 sm:px-4 md:px-6 h-[52px] transition-all duration-300 hover:bg-[#5E34CC] hover:scale-105"
            >
              Entre em contato
            </a>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-6 justify-center items-center flex-1 z-20 relative pt-4">
            <div className="flex flex-col justify-center gap-6 flex-1">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F3F3F3] max-w-[924px] leading-snug sm:leading-tight md:leading-[50px] lg:leading-[60px] xl:leading-[68px]">
                Crie sua própria corretora de criptomoedas
              </h1>
              <p className="max-w-[800px] font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-[32px] leading-relaxed sm:leading-[28px] md:leading-[32px] lg:leading-[38px]">
                Garanta seu{" "}
                <span className="font-bold">Early Adoption Pass</span> e
                torne-se um dos pioneiros na adoção dessa tecnologia. Ao
                adquirir o passe, você fará parte de um{" "}
                <span className="font-bold">grupo seleto e exclusivo</span> no
                universo cripto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <button
                  onClick={toggleModal}
                  className="font-montserrat font-medium text-start text-sm sm:text-base leading-6 bg-[#7747FF] rounded-lg px-4 h-[50px] sm:h-[60px] max-w-[262px] sm:max-w-[278px] transition-all duration-300 hover:bg-[#5E34CC] hover:shadow-lg hover:scale-105"
                >
                  <div className="flex gap-3 items-center justify-center">
                    <span>
                      Garantir{" "}
                      <span className="font-extrabold">exclusividade</span>
                    </span>
                    <Image
                      src={vipCard}
                      alt="Imagem de Cartão Vip"
                      width={45}
                      height={45}
                    />
                  </div>
                </button>
                <button className="font-medium text-sm sm:text-base leading-6 bg-[#7747FF] bg-opacity-15 rounded-lg px-4 h-[50px] sm:h-[60px] max-w-[256px] text-start">
                  <a
                    href="https://discord.gg/tJ8zEprjs6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 items-center justify-center"
                  >
                    <span>
                      Fazer parte da{" "}
                      <span className="font-extrabold">comunidade grátis </span>
                    </span>
                    <Image
                      src={discord}
                      alt="Imagem de Discord"
                      width={45}
                      height={45}
                    />
                  </a>
                </button>
              </div>
              <span className="font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-normal sm:leading-relaxed md:leading-6 lg:leading-6 xl:leading-6 max-w-[476px]">
                A <span className="font-bold">oportunidade</span> para entrar na{" "}
                <span className="font-bold">lista de espera</span> encerrará em{" "}
                <span className="font-bold">{timeLeft.dias} dias</span>,{" "}
                <span className="font-bold">{timeLeft.horas} horas</span>,{" "}
                <span className="font-bold">{timeLeft.minutos} minutos</span> e{" "}
                <span className="font-bold">{timeLeft.segundos} segundos</span>.
              </span>
              <span className="font-light text-gray-300 text-xs sm:text-sm md:text-base leading-normal sm:leading-relaxed md:leading-6 lg:leading-6 xl:leading-6 max-w-[476px]">
                *Atualmente, temos {" "}
                <span className="font-bold text-[#7747FF]">
                  138 pessoas
                </span>{" "}
                na fila de espera. Não fique de fora!
              </span>
            </div>
          </div>

          <div className="flex gap-2 relative z-30 pb-6 pt-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={social.width}
                  height={social.height}
                />
              </a>
            ))}
          </div>
        </div>

        <Image
          src={phone}
          alt="Imagem de Celular"
          width={872}
          height={797}
          className="absolute z-10 right-0 bottom-0 max-w-[50vw] w-[40%] md:w-[35%] lg:w-[32%] xl:w-[32%] 2xl:w-[36%] max-h-screen"
        />
      </div>
    </>
  )
}

export default Hero
