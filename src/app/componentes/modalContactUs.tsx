import React from "react";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "@/app/assets/pixonchain.png";
import bg from "@/app/assets/bg-modal.png";
import vip from "@/app/assets/cartao-vip.png";
import check from "@/app/assets/check.png";
import { FaWhatsapp } from "react-icons/fa";

interface ModalContactUsProps {
  setIsOpenModal: (isOpen: boolean) => void;
}

const ModalContactUs = ({ setIsOpenModal }: ModalContactUsProps) => {
  const whatsappNumber = "554731705121";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-40 overflow-y-auto bg-black bg-opacity-50"
      onClick={() => setIsOpenModal(false)}
    >
      <div
        className="relative w-full max-w-[984px] bg-[#7747FF] text-white rounded-lg shadow-lg z-50 flex flex-col overflow-y-auto mt-2 lg:mb-2 sm:mt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={bg}
          alt="Imagem de fundo"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-30 opacity-5"
          priority
        />
        <button
          className="absolute top-4 right-4 z-50"
          onClick={() => setIsOpenModal(false)} 
          aria-label="Fechar Modal"
        >
          <IoIosCloseCircle className="h-8 w-8 text-white" />
        </button>

        <div className="w-full flex flex-col px-5 sm:py-5 lg:px-[127px] md:px-[80px] sm:px-[40px] z-50 relative lg:p-8">
        <div className="flex flex-col">
          <div className="w-full flex items-center justify-center mb-6">
            <Image
              src={logo}
              alt="Logo Pix On Chain"
              width={102}
              height={45}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="text-center font-bold lg:text-xl md:text-lg sm:text-base text-sm">
              Acesso Exclusivo ao Club do Pix on Chain
            </h1>
            <p className="text-xs lg:text-sm 2xl:text-base font-normal text-justify">
              <span className="text-black font-extrabold">Pix on Chain</span> é
              uma plataforma inovadora que possibilita a{" "}
              <span className="font-bold">
                criação de corretoras de criptomoedas
              </span>{" "}
              no formato <span className="font-bold">launchpad</span> e{" "}
              <span className="font-bold">marketplace</span>, de forma acessível
              e personalizada. Construída sobre a network{" "}
              <span className="font-bold">Hathor</span>, a plataforma é
              projetada para oferecer compatibilidade com diversas{" "}
              <span className="font-bold">
                redes blockchain, incluindo EVM (Ethereum, Polygon e BSC), além
                de Tron e Bitcoin.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <h1 className="flex gap-2 font-bold lg:text-lg md:text-base text-sm">
              <Image src={vip} alt="Logo Pix On Chain" width={32} height={22} />
              Garanta seu acesso ao{" "}
              <span className="text-black">Early Adoption Pass</span>
            </h1>
            <p className="text-xs lg:text-sm font-medium">
              Seja um dos pioneiros na transformação do mercado de criptomoedas.
              Ao adquirir o passe, você se tornará parte de um grupo exclusivo
              no universo cripto.
            </p>
          </div>

          <div className="bg-white rounded-xl p-7 flex flex-col gap-3 text-black mb-6">
            <h1 className="font-normal lg:text-lg md:text-base text-sm">
              Com o <span className="font-bold">Pix on Chain,</span> você
              poderá:
            </h1>
            {[
              "Gerenciar carteiras digitais de criptomoedas com eficiência.",
              "Realizar transações de forma segura de cripto (Hathor, Bitcoin, Ethereum, USDT, USDC).",
              "Receber comissões por transações blockchain, criando novas oportunidades de monetização.",
              "Lançar seus próprios tokens de criptomoedas e NFTs. Perfeito para plataformas tokenizadoras!",
            ].map((benefit, index) => (
              <div key={index} className="flex gap-2">
                <Image
                  src={check}
                  alt="Imagem de Check"
                  width={16}
                  height={16}
                  className="max-w-[16px] max-h-[16px]"
                />
                <h2 className="text-xs uppercase">{benefit}</h2>
              </div>
            ))}
          </div>

          <p className="text-xs mb-6">
            DISCLAMER:{" "}
            <span className="text-black font-bold">PIX ON CHAIN</span> É UMA
            PLATAFORMA CONSTRUÍDA COM{" "}
            <span className="font-bold">
              TECNOLOGIA DE CORRETORAS DE CRIPTOMOEDAS COM O USO DE BLOCKCHAIN
            </span>
            , MAS{" "}
            <span className="font-bold">
              NÃO VENDEMOS INVESTIMENTOS NEM PROMETEMOS RETORNOS FINANCEIROS DE
              QUALQUER NATUREZA
            </span>
            . A NEGOCIAÇÃO E O USO DE CRIPTOATIVOS ENVOLVEM
            <span className="font-bold"> ALTO RISCO</span>, E É ESSENCIAL QUE OS
            USUÁRIOS REALIZEM SUAS PRÓPRIAS ANÁLISES ANTES DE SE ENVOLVEREM
            NESSE TIPO DE ATIVIDADE.
          </p>
          <a
            href={whatsappLink}
            className="bg-[#25d366] rounded-lg gap-2 flex items-center justify-center text-white font-medium py-3 animate-pulse"
          >
            FALAR COM UM ESPECIALISTA
            <FaWhatsapp className="text-white w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalContactUs;
