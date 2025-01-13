import React from "react";
import logo from "@/app/assets/logo-pixonchain.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full h-screen px-[90px] bg-gray-900 py-[70px] text-white">
      <Image src={logo} alt="Logo" width={365} height={47} />
      <div className="w-full h-full flex flex-col justify-center">
        <div className="">Crie sua própria corretora de criptomoedas</div>
      </div>
    </div>
  );
};

export default Hero;
