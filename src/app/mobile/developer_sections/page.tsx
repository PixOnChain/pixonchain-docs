"use client"

import React from "react"
import { FaWhatsapp, FaArrowLeft, FaStar } from "react-icons/fa"
import { useRouter } from "next/navigation"

const DeveloperSections = () => {
  const router = useRouter()

  const endpoints = [
    {
      name: "Health Check",
      description: "Verifica o status de saúde do servidor.",
      method: "GET",
      url: "https://api.pixonchain.com/health",
      exampleRequest: `GET https://api.pixonchain.com/health`,
      exampleResponse: `{
    "status": "OK",
    "service": {
      "name": "pix-on-chain",
      "version": "1.0.1"
    },
    "uptime": 2468.431,
    "timestamp": "2025-01-19T18:46:06.751Z"
  }`,
    },
    {
      name: "Generate API Keys",
      description: "Gera novas chaves de API para autenticação.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/keys/generate-api-keys",
      exampleRequest: `POST https://api.pixonchain.com/api/auth/keys/generate-api-keys`,
      exampleResponse: `{
    "message": "API keys generated successfully",
    "apiKey": "example-api-key",
    "secretKey": "example-secret-key"
  }`,
    },
    {
      name: "Key Validation",
      description:
        "Valida as chaves de API fornecidas para garantir acesso às APIs.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/keys/key-validate",
      exampleRequest: `POST https://api.pixonchain.com/api/auth/keys/key-validate`,
      exampleResponse: `{
    "accessToken": "example-access-token"
  }`,
    },
    {
      name: "Quote/Purchase Token",
      subtitle: "Gera o QR Code do Pix para USDT",
      description:
        "Gera o QR Code do Pix para realizar uma cotação com base no valor (em decimais) e no endereço de recebimento USDT na Polygon. Você pode simular ou efetuar a cotação passando o parâmetro `simulation` como true ou false.",
      method: "POST",
      url: "https://api.pixonchain.com/api/banking/quote-transaction",
      exampleRequest: `POST https://api.pixonchain.com/api/banking/quote-transaction
        {
          "value": 600,
          "simulation": false,
          "receiverAddress": "0xexampleaddress"
        }`,
      exampleResponse: `{
          "id": "transaction-id",
          "due": "2025-01-19T18:21:36.972Z",
          "brCode": "example-br-code"
        }`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-red-500 text-lg">🔥</span>
              HOT
            </span>
          ),
          bgColor: "bg-[#E8E4FF]",
          textColor: "text-[red]",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg">💸</span>
              PIX PARA USDT
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
    },
    {
      name: "Get Transaction Quote/Purchase",
      subtitle: "Recupera o ID da ordem gerada do Pix convertida em USDT",
      description:
        "Recupera os detalhes de uma cotação de transação utilizando o ID gerado anteriormente. Permite verificar o status da cotação e os logs de depósitos associados.",
      method: "GET",
      url: "https://api.pixonchain.com/api/banking/quote-transaction/:transactionId",
      exampleRequest: `GET https://api.pixonchain.com/api/banking/quote-transaction/:transactionId`,
      exampleResponse: `{
          "depositsLogs": [
            {
              "timestamp": "2025-01-19T18:30:45.123Z",
              "status": "Completed",
              "amount": "6.00",
              "receiverAddress": "0xexampleaddress"
            }
          ]
        }`,
    },
    {
      name: "Add Webhook",
      description:
        "Adiciona um novo webhook para monitoramento de eventos na plataforma.",
      method: "POST",
      url: "https://api.pixonchain.com/api/webhooks",
      exampleRequest: `POST https://api.pixonchain.com/api/webhooks
  {
    "url": "https://webhook.example.com"
  }`,
      exampleResponse: `{
    "success": true,
    "id": "webhook-id",
    "url": "https://webhook.example.com"
  }`,
  labels: [
    {
      text: (
        <span className="flex items-center gap-1 mr-2">
          <span className="text-yellow-500 text-lg p-1">
            <FaStar />
          </span>
          NOVIDADE
        </span>
      ),
      bgColor: "bg-[#7747ff]",
      textColor: "text-white",
    },
  ],
    },
    {
      name: "List all Webhooks",
      description: "Lista todos os webhooks cadastrados na plataforma.",
      method: "GET",
      url: "https://api.pixonchain.com/api/webhooks",
      exampleRequest: `GET https://api.pixonchain.com/api/webhooks`,
      exampleResponse: `{
    "success": true,
    "webhooks": [
      {
        "id": "webhook-id",
        "url": "https://webhook.example.com",
        "event_provider": "example-provider"
      }
    ]
  }`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-yellow-500 text-lg p-1">
                <FaStar />
              </span>
              NOVIDADE
            </span>
          ),
          bgColor: "bg-[#7747ff]",
          textColor: "text-white",
        },
      ],
    },
    {
      name: "Delete Webhook",
      description: "Exclui um webhook específico com base no ID fornecido.",
      method: "DELETE",
      url: "https://api.pixonchain.com/api/webhooks/:id",
      exampleRequest: `DELETE https://api.pixonchain.com/api/webhooks/:id`,
      exampleResponse: `{
          "success": true,
          "message": "Webhook successfully deleted.",
          "faasResponse": {
            "success": true,
            "deletedId": "webhook-id"
          }
        }`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-yellow-500 text-lg p-1">
                <FaStar />
              </span>
              NOVIDADE
            </span>
          ),
          bgColor: "bg-[#7747ff]",
          textColor: "text-white",
        },
      ],
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
        <p className="text-sm text-gray-300 mb-3">
          As credenciais devem ser enviadas no{" "}
          <b className="text-[#7747ff]">Header</b> de cada requisição para
          autenticação e autorização.
        </p>
        <p className="text-sm text-gray-300 font-mono bg-gray-700 p-3 rounded-lg">
          Exemplo de credenciais no Header:
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
              <div className="flexc-col items-center mb-2">
                <h2 className="text-lg font-bold">{endpoint.name}</h2>
                {endpoint.subtitle && (
                  <p className="text-sm text-gray-400 font-medium mt-1">
                    {endpoint.subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                {endpoint.labels &&
                  endpoint.labels.map((label, labelIndex) => (
                    <span
                      key={labelIndex}
                      className={`flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-full ${label.bgColor} ${label.textColor}`}
                    >
                      {label.text}
                    </span>
                  ))}
              </div>
              <p className="text-sm text-gray-300 mb-3">
                {endpoint.description}
              </p>
              <div className="mb-4">
                <span
                  className="block text-sm text-yellow-300 font-mono break-words"
                  style={{ wordWrap: "break-word", maxWidth: "200px" }}
                >
                  <b>Method:</b> {endpoint.method}
                </span>
                <span
                  className="block text-sm text-yellow-300 font-mono break-words"
                  style={{ wordWrap: "break-word", maxWidth: "300px" }}
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
