"use client"

import React, { useState } from "react"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe })
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login attempt")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-saira">
      {/* Branding Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {/* Pixelated Logo */}
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
          </div>
          <h1 className="text-3xl font-bold text-purple-600">PIXLEY</h1>
        </div>
        <p className="text-gray-600 text-lg">Entre na sua conta para continuar</p>
      </div>

      {/* Login Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Lembrar de mim
              </label>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:text-purple-500 font-medium">
              Esqueceu a senha?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            Entrar
          </button>
        </form>

              {/* Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors flex items-center justify-center mt-4"
      >
        <FaGoogle className="h-5 w-5 mr-3" />
        Continuar com Google
      </button>

        {/* Registration Link */}
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-purple-600 hover:text-purple-500 font-medium">
            Não tem cadastro? Cadastre agora
          </a>
        </div>
      </div>

      {/* Domain Info */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">uat.pixley.app</p>
      </div>
    </div>
  )
} 