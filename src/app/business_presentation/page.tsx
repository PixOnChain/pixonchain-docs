"use client"

import React from "react"

const ApresentacaoComercial = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <a
        href="/apresentacao.pdf"
        download="Apresentacao_Comercial_PixOnChain.pdf"
        className={`block text-center bg-[#7747ff] text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-500 transition-colors animate-pulse hover:animate-none py-4 px-10 mt-6 mb-6`}
      >
        Fazer Download da Apresentação Comercial
      </a>
      <h2 className="mb-4 text-center text-lg">
        Veja abaixo nossa apresentação comercial detalhada.
      </h2>
      <div className="w-full max-w-4xl h-[70vh] bg-gray-800 p-4 rounded-lg shadow-lg">
        <iframe
          src="/apresentacao.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full rounded-lg"
          title="Apresentação Comercial"
        />
      </div>

      <footer className="mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Pix on Chain - Todos os direitos
        reservados.
      </footer>
    </div>
  )
}

export default ApresentacaoComercial
