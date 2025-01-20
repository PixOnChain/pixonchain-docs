"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import logo from "@/app/assets/logo-pixonchain_gray.png"
import Head from "next/head"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const policyLinks = [
    {
      title: "Política de Privacidade",
      url: "/policies/privacypolicy",
    },
    {
      title: "Termos de Serviço",
      url: "/policies/termo",
    },
  ]

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    try {
      const response = await fetch(
        "https://api.pixonchain.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        router.push("/members-area")
      } else {
        setError("E-mail ou senha inválidos.")
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      setError("Erro ao conectar ao servidor. Tente novamente.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13121C] to-[#1C1B29] flex items-center justify-center">
      <Head>
        <title>Pix on Chain - Área de Membros</title>
        <meta
          name="description"
          content="Acesso exclusivo para membros Pix on Chain."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <form
        onSubmit={handleLogin}
        className="bg-[#1C1B29] p-8 rounded-xl max-w-md w-full transform transition-all hover:scale-105 shadow-lg"
      >
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="Pix on Chain Logo"
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Área de Membros
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Acesse conteúdos e ferramentas exclusivas para membros Pix on Chain.
        </p>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
            className="w-full p-3 bg-[#2A2936] rounded-lg text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
            className="w-full p-3 bg-[#2A2936] rounded-lg text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#6A5ACD] hover:bg-purple-700 hover:scale-105 p-3 rounded-lg font-bold text-white transition-all shadow-lg hover:shadow-2xl"
        >
          Entrar
        </button>
        <div className="flex mt-6 justify-between items-center">
          {policyLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              {link.title}
            </a>
          ))}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
