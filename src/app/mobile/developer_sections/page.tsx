"use client"

import React from "react"
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa"
import { useRouter } from "next/navigation"

const DeveloperSections = () => {
  const router = useRouter()

  const endpoints = [
    {
      name: "Health Check",
      description: "Verifica o status de saúde do servidor.",
      method: "GET",
      url: "https://api.pixonchain.com/health",
      exampleRequest: `
        GET {{baseUrl}}/health
      `,
      exampleResponse: `
        {
          "status": "OK",
          "service": {
            "name": "pix-on-chain",
            "version": "1.0.1"
          },
          "uptime": 2468.431,
          "timestamp": "2025-01-19T18:46:06.751Z"
        }
      `,
    },
    {
      name: "Generate API Keys",
      description: "Gera novas chaves de API para autenticação.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/keys/generate-api-keys",
      exampleRequest: `
        POST {{baseUrl}}/api/auth/keys/generate-api-keys
      `,
      exampleResponse: `
        {
          "message": "API keys generated successfully",
          "apiKey": "example-api-key",
          "secretKey": "example-secret-key"
        }
      `,
    },
    {
      name: "Key Validation",
      description:
        "Valida as chaves de API fornecidas para garantir acesso às APIs.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/keys/key-validate",
      exampleRequest: `
        POST {{baseUrl}}/api/auth/keys/key-validate
      `,
      exampleResponse: `
        {
          "accessToken": "example-access-token"
        }
      `,
    },
    {
      name: "Quote/Purchase Token",
      description:
        "Solicita um orçamento para a compra de tokens com base no valor e endereço do destinatário.",
      method: "POST",
      url: "https://api.pixonchain.com/api/banking/quote-transaction",
      exampleRequest: `
        POST {{baseUrl}}/api/banking/quote-transaction
        {
          "value": 602,
          "simulation": false,
          "receiverAddress": "0xexampleaddress"
        }
      `,
      exampleResponse: `
        {
          "id": "transaction-id",
          "due": "2025-01-19T18:21:36.972Z",
          "brCode": "example-br-code"
        }
      `,
    },
    {
      name: "Quote Execution",
      description: "Executa um orçamento utilizando o ID da transação.",
      method: "GET",
      url: "https://api.pixonchain.com/api/banking/quote-transaction/:transactionId",
      exampleRequest: `
        GET {{baseUrl}}/api/banking/quote-transaction/:transactionId
      `,
      exampleResponse: `
        {
          "depositsLogs": []
        }
      `,
    },
    {
      name: "Add Webhook",
      description:
        "Adiciona um novo webhook para monitoramento de eventos na plataforma.",
      method: "POST",
      url: "https://api.pixonchain.com/api/webhooks",
      exampleRequest: `
        POST {{baseUrl}}/api/webhooks
        {
          "url": "https://webhook.example.com"
        }
      `,
      exampleResponse: `
        {
          "success": true,
          "id": "webhook-id",
          "url": "https://webhook.example.com"
        }
      `,
    },
    {
      name: "List all Webhooks",
      description: "Lista todos os webhooks cadastrados na plataforma.",
      method: "GET",
      url: "https://api.pixonchain.com/api/webhooks",
      exampleRequest: `
        GET {{baseUrl}}/api/webhooks
      `,
      exampleResponse: `
        {
          "success": true,
          "webhooks": [
            {
              "id": "webhook-id",
              "url": "https://webhook.example.com",
              "event_provider": "example-provider"
            }
          ]
        }
      `,
    },
    {
      name: "Delete Webhook",
      description: "Exclui um webhook específico com base no ID fornecido.",
      method: "DELETE",
      url: "https://api.pixonchain.com/api/webhooks/:id",
      exampleRequest: `
        DELETE {{baseUrl}}/api/webhooks/:id
      `,
      exampleResponse: `
        {
          "success": true,
          "message": "Webhook successfully deleted.",
          "faasResponse": {
            "success": true,
            "deletedId": "webhook-id"
          }
        }
      `,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">📄 Área de Desenvolvedores</h1>
      <p className="text-sm text-gray-400 mb-6 text-center">
        Explore os endpoints disponíveis para integrar-se à plataforma Pix on
        Chain.
      </p>

      <div className="w-full max-w-md bg-gray-800 rounded-lg p-4 shadow-lg mb-6">
        <h2 className="text-lg font-bold mb-3">⚠️ Importante!</h2>
        <p className="text-sm text-gray-300 mb-3">
          Para utilizar as APIs do Pix on Chain, é necessário obter as
          credenciais de acesso. Entre em contato com nosso suporte para
          solicitar suas credenciais.
        </p>
        <p className="text-sm text-gray-300 font-mono bg-gray-700 p-3 rounded-lg">
          Exemplo de credenciais:
          <br />
          <span className="block mt-2">
            <b>x-api-key</b>: ********
          </span>
          <span className="block">
            <b>x-secret-key</b>: ********
          </span>
          <span className="block">
            <b>x-tenant-id</b>: ********
          </span>
        </p>
        <div className="mt-4">
          <a
            href="https://wa.me/554731705121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#7747ff] text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            Quero obter minhas credenciais
          </a>
        </div>
      </div>
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-4 shadow-lg">
  <div className="w-full max-w-4xl space-y-6">
    {endpoints.map((endpoint, index) => (
      <div key={index} className="bg-gray-800 rounded-lg p-4 text-left">
        <h2 className="text-lg font-bold mb-2">{endpoint.name}</h2>
        <p className="text-sm text-gray-300 mb-3">
          {endpoint.description}
        </p>
        <div className="mb-4">
          <span
            className="block text-sm text-yellow-300 font-mono break-words"
            style={{ wordWrap: 'break-word', maxWidth: '200px' }}
          >
            <b>Method:</b> {endpoint.method}
          </span>
          <span
            className="block text-sm text-yellow-300 font-mono break-words"
            style={{ wordWrap: 'break-word', maxWidth: '300px' }}
          >
            <b>URL:</b> {endpoint.url}
          </span>
        </div>
        <details className="mb-3">
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Exemplo de Requisição
          </summary>
          <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
            {endpoint.exampleRequest}
          </pre>
        </details>
        <details>
          <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
            Exemplo de Resposta
          </summary>
          <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
            {endpoint.exampleResponse}
          </pre>
        </details>
      </div>
    ))}
  </div>
</div>
      
      <button
        onClick={() => router.back()}
        className="mt-8 flex items-center justify-center gap-2 bg-gray-700 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
      >
        <FaArrowLeft className="text-lg" />
        Voltar
      </button>
    </div>
  )
}

export default DeveloperSections
