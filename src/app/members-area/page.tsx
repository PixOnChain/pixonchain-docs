"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import logo from "@/app/assets/logo-pixonchain.png"
import { FaImage, FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"
import { SiTether } from "react-icons/si"

const MembersArea = () => {
  const [balance, setBalance] = useState({ BRLA: 0, USDT: 0 })
  const [lockedBalance, setLockedBalance] = useState({ BRLA: 0, USDT: 0 })
  const [transactions, setTransactions] = useState([
    {
      description: "Depósito",
      date: "2025-01-20",
      amount: "+500.00",
      currency: "BRLA",
    },
    {
      description: "Saque",
      date: "2025-01-19",
      amount: "-200.00",
      currency: "BRLA", 
    },
    {
    description: "Depósito",
      date: "2025-01-18",
      amount: "+300.00",
      currency: "USDT",
    },
    {
      description: "Pagamento",
      date: "2025-01-17",
      amount: "-150.00",
      currency: "USDT",
    },
  ])

  interface NftCollection {
    name: string
    description: string
  }
  const [nftCollections, setNftCollections] = useState<NftCollection[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/members-data")
        if (response.ok) {
          const data = await response.json()
          setBalance(data.balance)
          setLockedBalance(data.lockedBalance)
          setNftCollections(data.nftCollections)
          setTransactions(data.transactions || [])
        } else {
          setError("Erro ao carregar dados da área de membros.")
        }
      } catch (err) {
        console.error(err)
        setError("Erro ao conectar ao servidor.")
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13121C] to-[#392178] text-white flex flex-col items-center p-6">
      <Head>
        <title>Pix on Chain - Área de Membros</title>
        <meta
          name="description"
          content="Acesso exclusivo para membros Pix on Chain."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="mb-8">
        <Image src={logo} alt="Pix on Chain Logo" width={250} height={250} />
      </div>

      <h1 className="text-4xl font-bold mb-8 text-[#F5F3FF]">
        Área de Membros
      </h1>

      {error && (
        <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4 shadow-md">
          {error}
        </div>
      )}

      <div className="w-full max-w-md mb-6 bg-[#502FAA] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl text-[#E8E4FF]">💵</div>
          <div className="flex gap-2">
            <button className="flex items-center bg-[#623AD0] text-white px-3 py-2 rounded-lg hover:bg-[#7143F0] text-sm shadow-md">
              <FaArrowCircleUp className="mr-2" /> Depositar
            </button>
            <button className="flex items-center bg-[#7747FF] text-white px-3 py-2 rounded-lg hover:bg-[#B29EFE] text-sm shadow-md">
              <FaArrowCircleDown className="mr-2" /> Sacar
            </button>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-2 text-[#F5F3FF]">Saldo - BRLA</h2>
        <p className="text-sm text-[#CEC4FF]">
          <span>Disponível:</span> {balance.BRLA.toFixed(2)}
        </p>
        <p className="text-sm text-[#CEC4FF]">
          Bloqueado: {lockedBalance.BRLA.toFixed(2)}
        </p>
      </div>

      <div className="w-full max-w-md mb-6 bg-[#502FAA] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl text-[#F3F3F3]">
            <SiTether />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center bg-[#623AD0] text-white px-3 py-2 rounded-lg hover:bg-[#7143F0] text-sm shadow-md">
              <FaArrowCircleUp className="mr-2" /> Depositar
            </button>
            <button className="flex items-center bg-[#7747FF] text-white px-3 py-2 rounded-lg hover:bg-[#B29EFE] text-sm shadow-md">
              <FaArrowCircleDown className="mr-2" /> Sacar
            </button>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-2 text-[#F5F3FF]">Saldo - USDT</h2>
        <p className="text-sm text-[#CEC4FF]">
          Disponível: {balance.USDT.toFixed(2)}
        </p>
        <p className="text-sm text-[#CEC4FF]">
          Bloqueado: {lockedBalance.USDT.toFixed(2)}
        </p>
      </div>

      <div className="w-full max-w-md mb-6 bg-[#392178] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#F5F3FF]">
          <FaImage className="text-[#B29EFE]" />
          Coleções de NFTs
        </h2>
        {nftCollections.length > 0 ? (
          <ul className="space-y-2">
            {nftCollections.map((nft, index) => (
              <li
                key={index}
                className="bg-[#502FAA] p-2 rounded-lg text-[#F3F3F3]"
              >
                <p className="text-sm font-bold">{nft.name}</p>
                <p className="text-xs text-[#CEC4FF]">{nft.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[#CEC4FF]">Nenhum NFT encontrado.</p>
        )}
      </div>

      <div className="w-full max-w-md bg-[#502FAA] p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-bold text-[#F5F3FF] mb-4">Extrato</h2>
        {transactions.length > 0 ? (
          <ul className="space-y-2">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className="bg-[#392178] p-4 rounded-lg text-[#F3F3F3] shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-base font-bold">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-[#CEC4FF]">
                    {new Date(transaction.date).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.amount.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {transaction.amount} {transaction.currency}
                  </p>
                  <button className="mt-2 text-sm bg-[#7143F0] text-white px-3 py-1 rounded-lg hover:bg-[#B29EFE] transition">
                    Ver Transação
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[#CEC4FF]">
            Nenhuma transação encontrada.
          </p>
        )}
      </div>

      <footer className="mt-10 text-sm text-[#CEC4FF]">
        © {new Date().getFullYear()} Pix on Chain - Todos os direitos
        reservados.
      </footer>
    </div>
  )
}

export default MembersArea
