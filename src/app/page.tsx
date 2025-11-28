"use client"

import React from "react"
import { FaBook, FaCode, FaRocket, FaShieldAlt } from "react-icons/fa"

import Image from "next/image"

export default function Home() {
  const apiUrl = "crypto.pixley.app"

  const endpoints = [
    // BOLETO ENDPOINTS
    {
      name: "Pagamento de Boleto",
      subtitle: "Processa pagamento de boleto",
      description:
        "Processa o pagamento de um boleto através da fila de processamento assíncrono",
      method: "POST",
      url: `https://${apiUrl}/api/boletos/pay`,
      exampleRequest: `POST https://${apiUrl}/api/boletos/pay
Authorization: Bearer {seu_token_jwt}
x-api-key: <your-api-key>
x-secret-key: <your-secret-key>
Content-Type: application/json

{
  "codBarraLinhaDigitavel": "34191790010104351004791020150008291070026000",
  "valorPagar": 260.00,
  "dataVencimento": "2024-12-31"
}`,
      exampleResponse: `{
  "success": true,
  "message": "Boleto adicionado à fila de processamento",
  "data": {
    "boleto": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "txId": "34191790010104351004791020150008291070026000",
      "nominalValue": 260.00,
      "dueDate": "2024-12-31",
      "status": "PENDING",
      "transactionId": "tx_123456789",
      "createdAt": "2024-01-15T10:30:00Z"
    },
    "queueInfo": {
      "jobId": "job_987654321",
      "position": 1
    }
  }
}`,
      labels: [
        {
          text: "BOLETO",
          bgColor: "bg-[#f59e0b]",
          textColor: "text-white",
        },
        {
          text: "PAGAMENTO",
          bgColor: "bg-[#ef4444]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Autenticação (escolha 1):
• Authorization: Bearer {seu_token_jwt}
• x-api-key: <your-api-key>
• x-secret-key: <your-secret-key>

Campos da requisição:
• codBarraLinhaDigitavel: Código de barras ou linha digitável do boleto (obrigatório)
• valorPagar: Valor a ser pago (opcional - será extraído do código se não fornecido)
• dataVencimento: Data de vencimento no formato YYYY-MM-DD (opcional)

Status disponíveis:
• PENDING: Boleto criado, aguardando pagamento
• PAID: Boleto pago com sucesso
• EXPIRED: Boleto vencido
• CANCELLED: Boleto cancelado

🔄 Processamento Assíncrono:
• Os pagamentos são processados via fila (boletoPaymentQueue)
• Retorna informações da posição na fila
• Status atualizado automaticamente após processamento`,
    },
    {
      name: "Listar Boletos do Usuário",
      subtitle: "Lista boletos do usuário autenticado",
      description:
        "Lista os boletos do usuário autenticado com filtros e paginação",
      method: "GET",
      url: `https://${apiUrl}/api/boletos`,
      exampleRequest: `GET https://${apiUrl}/api/boletos?page=1&limit=10&status=PENDING
Authorization: Bearer {seu_token_jwt}
x-api-key: <your-api-key>
x-secret-key: <your-secret-key>`,
      exampleResponse: `{
  "success": true,
  "data": {
    "boletos": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "txId": "34191790010104351004791020150008291070026000",
        "nominalValue": 260.00,
        "dueDate": "2024-12-31",
        "status": "PENDING",
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 5,
      "totalPages": 1,
      "hasNext": false,
      "hasPrev": false
    }
  }
}`,
      labels: [
        {
          text: "BOLETO",
          bgColor: "bg-[#f59e0b]",
          textColor: "text-white",
        },
        {
          text: "CONSULTA",
          bgColor: "bg-[#10b981]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Autenticação (escolha 1):
• Authorization: Bearer {seu_token_jwt}
• x-api-key: <your-api-key>
• x-secret-key: <your-secret-key>

Parâmetros de Query (opcionais):
• page: Número da página (padrão: 1)
• limit: Itens por página (padrão: 20)
• status: Filtrar por status (PENDING, PAID, EXPIRED, CANCELLED)
• startDate: Data inicial (YYYY-MM-DD)
• endDate: Data final (YYYY-MM-DD)

🔍 Funcionalidades:
• Paginação automática
• Filtros por status e período
• Acesso apenas aos boletos do usuário autenticado
• Informações completas de cada boleto`,
    },
    {
      name: "Listar Carteiras",
      subtitle: "Lista carteiras vinculadas ao usuário",
      description:
        "Retorna as carteiras do usuário autenticado e suas blockchains suportadas",
      method: "GET",
      url: `https://${apiUrl}/api/wallet/list`,
      exampleRequest: `GET https://${apiUrl}/api/wallet/list
Authorization: Bearer {seu_token_jwt}
x-api-key: <your-api-key>
x-secret-key: <your-secret-key>`,
      exampleResponse: `{
  "success": true,
  "data": {
    "wallets": [
      {
        "id": 1001,
        "address": "0x7B14e8c72a989B0Ae3D95036E4c5F1DdC23Fa6f8",
        "blockchains": [
          "Ethereum",
          "BSC",
          "Polygon"
        ]
      },
      {
        "id": 1002,
        "address": "0xA3f92c1b4C7F8e52E63B1d4C9C5Fb27E9B8A71d2",
        "blockchains": [
          "Ethereum",
          "Polygon"
        ]
      }
    ]
  }
}`,
      labels: [
        { text: "CARTEIRA", bgColor: "bg-[#f59e0b]", textColor: "text-white" },
        { text: "CONSULTA", bgColor: "bg-[#10b981]", textColor: "text-white" },
      ],
      bodyExplanation: `Autenticação (escolha 1):
• Authorization: Bearer {seu_token_jwt}
• x-api-key: <your-api-key>
• x-secret-key: <your-secret-key>

Parâmetros de Query (opcionais):
• page: Número da página (padrão: 1)
• limit: Itens por página (padrão: 20)
• blockchain: Filtrar por rede (Ethereum, BSC, Polygon)

🔍 Funcionalidades:
• Retorna carteiras vinculadas ao usuário
• Lista blockchains suportadas por cada carteira`,
    },
    {
      name: "Consultar Saldos do Usuário",
      subtitle: "Retorna saldos por moeda da conta autenticada",
      description:
        "Lista os saldos por moeda do usuário autenticado, com valores disponível, reservado e total",
      method: "GET",
      url: `https://${apiUrl}/api/balance/me`,
      exampleRequest: `GET https://${apiUrl}/api/balance/me
Authorization: Bearer {seu_token_jwt}
x-api-key: <your-api-key>
x-secret-key: <your-secret-key>`,
      exampleResponse: `{
  "success": true,
  "data": {
    "userId": "XXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    "balances": [
      {
        "currency": "BRL",
        "balance": "1250.89",
        "reserved": "300.00",
        "available": "950.89",
        "created_at": "2025-09-15T12:20:45.112Z",
        "updated_at": "2025-11-28T14:55:03.441Z"
      },
      {
        "currency": "USDT",
        "balance": "532.12000000",
        "reserved": "12.50000000",
        "available": "519.62000000",
        "created_at": "2025-09-15T12:20:45.210Z",
        "updated_at": "2025-11-27T18:42:11.882Z"
      },
      {
        "currency": "USDC",
        "balance": "120.00000000",
        "reserved": "0.00000000",
        "available": "120.00000000",
        "created_at": "2025-10-02T08:10:22.951Z",
        "updated_at": "2025-11-20T06:12:30.144Z"
      },
      {
        "currency": "USD",
        "balance": "87.45000000",
        "reserved": "10.00000000",
        "available": "77.45000000",
        "created_at": "2025-10-02T08:10:23.002Z",
        "updated_at": "2025-11-25T10:03:09.210Z"
      },
      {
        "currency": "BTC",
        "balance": "0.00421500",
        "reserved": "0.00000000",
        "available": "0.00421500",
        "created_at": "2025-09-15T12:20:45.330Z",
        "updated_at": "2025-11-26T22:48:55.512Z"
      }
    ],
    "timestamp": "2025-11-28T15:40:12.999Z"
  }
}`,
      labels: [
        { text: "SALDO", bgColor: "bg-[#8b5cf6]", textColor: "text-white" },
        { text: "CONSULTA", bgColor: "bg-[#10b981]", textColor: "text-white" },
      ],
      bodyExplanation: `Autenticação (escolha 1):
• Authorization: Bearer {seu_token_jwt}
• x-api-key: <your-api-key>
• x-secret-key: <your-secret-key>

🔍 Informações retornadas:
• balances: Lista de moedas com balance, reserved e available
• timestamp: Momento da coleta dos saldos
• userId: Identificador do usuário autenticado`,
    },
    {
      name: "Transferência entre Carteiras",
      subtitle: "Transfere fundos entre carteiras ou para endereço externo",
      description:
        "Cria uma transferência de fundos entre carteiras internas ou para um endereço externo em redes suportadas",
      method: "POST",
      url: `https://${apiUrl}/api/wallet/transfer`,
      exampleRequest: `POST https://${apiUrl}/api/wallet/transfer
Authorization: Bearer {seu_token_jwt}
x-api-key: <your-api-key>
x-secret-key: <your-secret-key>
Content-Type: application/json

{
  "tokenSymbol": "USDT",
  "network": "Polygon",
  "amount": "3.2500",
  "toAddress": "0x0a7A5239d352244C0303204c3f5D538ec13EF6CE"
}`,
      exampleResponse: `{
  "success": false,
  "error": "Saldo insuficiente",
  "error_code": "INSUFFICIENT_BALANCE",
  "details": {
    "requested": "3.25000000",
    "available": "0.00000000",
    "currency": "USDT"
  },
  "timestamp": "2025-11-28T15:04:58.674Z",
  "message": "Erro na operação"
}`,
      labels: [
        { text: "CARTEIRA", bgColor: "bg-[#f59e0b]", textColor: "text-white" },
        { text: "TRANSFERÊNCIA", bgColor: "bg-[#8b5cf6]", textColor: "text-white" },
      ],
      bodyExplanation: `Autenticação (escolha 1):
• Authorization: Bearer {seu_token_jwt}
• x-api-key: <your-api-key>
• x-secret-key: <your-secret-key>

Campos da requisição:
• tokenSymbol: Símbolo do token (ex.: USDT)
• network: Rede da transação (Ethereum, BSC, Polygon)
• amount: Valor a transferir (string decimal)
• toAddress: Endereço de destino da carteira

Status disponíveis:
• PENDING: Transferência criada e aguardando processamento
• PROCESSING: Em processamento na rede
• COMPLETED: Confirmada na rede
• FAILED: Falha na execução ou validação`,
    },
    // TRADE ENDPOINTS
  ]

  const priorityOrder = [
    "Listar Carteiras",
    "Consultar Saldos do Usuário",
    "Transferência entre Carteiras",
  ]
  const orderedEndpoints = [...endpoints].sort((a, b) => {
    const ia = priorityOrder.indexOf(a.name)
    const ib = priorityOrder.indexOf(b.name)
    const pa = ia === -1 ? 100 : ia
    const pb = ib === -1 ? 100 : ib
    if (pa !== pb) return pa - pb
    return a.name.localeCompare(b.name)
  })

  const webhookExamples = [
    {
      name: "Webhook - Evento DEPOSIT",
      description: "Exemplo de webhook enviado quando um depósito é recebido",
      example: `{
  "eventId": "evt_123e4567-e89b-12d3-a456-426614174000",
  "eventType": "DEPOSIT",
  "userId": "456e7890-e89b-12d3-a456-426614174000",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "transactionId": "txn_789abc123def456",
    "amount": "100.00",
    "currency": "BRL",
    "status": "completed",
    "pix_key": "user@example.com",
    "sender_name": "João Silva",
    "sender_document": "12345678901"
  }
}`,
      labels: [
        {
          text: "WEBHOOK",
          bgColor: "bg-[#ef4444]",
          textColor: "text-white",
        },
        {
          text: "DEPOSIT",
          bgColor: "bg-[#10b981]",
          textColor: "text-white",
        },
      ],
    },
    {
      name: "Webhook - Evento WITHDRAWAL",
      description: "Exemplo de webhook enviado quando um saque é processado",
      example: `{
  "eventId": "evt_456e7890-e89b-12d3-a456-426614174001",
  "eventType": "WITHDRAWAL",
  "userId": "456e7890-e89b-12d3-a456-426614174000",
  "timestamp": "2024-01-15T10:35:00Z",
  "data": {
    "withdrawal_id": "withdrawal_1234567890_abc123",
    "status": "completed",
    "source_currency": "USDT",
    "source_amount": 50.00,
    "target_currency": "PIX",
    "amount_received": 49.00,
    "tx_hash": "0xabc123def456...",
    "network": "Polygon",
    "pix_key": "user@example.com",
    "recipient_name": "João Silva"
  }
}`,
      labels: [
        {
          text: "WEBHOOK",
          bgColor: "bg-[#ef4444]",
          textColor: "text-white",
        },
        {
          text: "WITHDRAWAL",
          bgColor: "bg-[#f59e0b]",
          textColor: "text-white",
        },
      ],
    },
    {
      name: "Webhook - Evento PAYMENT REQUEST",
      description:
        "Exemplo de webhook enviado quando uma solicitação de pagamento é criada",
      example: `{
  "eventId": "evt_789abc12-e89b-12d3-a456-426614174002",
  "eventType": "PAYMENT_REQUEST",
  "userId": "456e7890-e89b-12d3-a456-426614174000",
  "timestamp": "2024-01-15T10:40:00Z",
  "data": {
    "payment_request_id": "pr_123456789",
    "amount": "250.00",
    "currency": "BRL",
    "status": "pending",
    "qr_code": "00020126580014br.gov.bcb.pix...",
    "expires_at": "2024-01-15T11:40:00Z",
    "description": "Pagamento de serviços"
  }
}`,
      labels: [
        {
          text: "WEBHOOK",
          bgColor: "bg-[#ef4444]",
          textColor: "text-white",
        },
        {
          text: "PAYMENT",
          bgColor: "bg-[#8b5cf6]",
          textColor: "text-white",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-saira">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/pixley_logo.svg"
                alt="Pixley Logo"
                width={84}
                height={84}
                className="mr-3"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* API Reference Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Pixley API Documentation
            </h2>
            <p className="text-slate-600">
              Esta documentação descreve os principais endpoints da API do
              sistema Pixley Crypto Transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <FaCode className="w-5 h-5 mr-2 text-purple-600" />
                Base URL
              </h4>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100">
                https://crypto.pixley.app
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <FaShieldAlt className="w-5 h-5 mr-2 text-purple-600" />
                Autenticação
              </h4>
              <p className="text-slate-600 mb-4 text-sm">
                Todos os endpoints aceitam autenticação via
                <span className="font-mono"> Authorization: Bearer &lt;seu-token-jwt&gt; </span>
                ou via cabeçalhos de API:
              </p>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100">
                <div>Authorization: Bearer &lt;seu-token-jwt&gt;</div>
                <div>x-api-key: &lt;your-api-key&gt;</div>
                <div>x-secret-key: &lt;your-secret-key&gt;</div>
              </div>
              <p className="text-slate-500 mt-3 text-xs">
                💡 As credenciais de API (API key e Secret key) devem ser
                obtidas através do nosso suporte.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 w-full md:col-span-2">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <FaRocket className="w-5 h-5 mr-2 text-purple-600" />
                Health Status (curl)
              </h4>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100">
                curl -s -X GET &quot;https://crypto.pixley.app/api/health&quot; -H &quot;Accept: application/json&quot;
              </div>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100 mt-3">
                <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">{`{
  "status": "OK",
  "environment": "production",
  "service": {
    "name": "pixley-crypto-transactions",
    "version": "2.0.0"
  },
  "uptime": 41027.390472536,
  "timestamp": "2025-11-28T15:22:54.901Z"
}`}</pre>
              </div>
            </div>
          </div>

          {/* Detailed Endpoints */}
          <div className="space-y-8">
            {/* All Endpoints */}
            {orderedEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/80 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {endpoint.name}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {endpoint.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.labels.map((label, labelIndex) => (
                      <span
                        key={labelIndex}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${label.bgColor} ${label.textColor} shadow-sm`}
                      >
                        {label.text}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {endpoint.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <FaCode className="w-4 h-4 mr-2 text-purple-600" />
                      Requisição
                    </h5>
                    <div className="bg-white border border-purple-200 rounded-xl p-4 sm:p-6 font-mono text-sm shadow-sm">
                      <div className="mb-4">
                        <span className="text-purple-600 font-semibold">
                          {endpoint.method}
                        </span>
                        <span className="text-slate-700 break-all">
                          {" "}
                          {endpoint.url}
                        </span>
                      </div>
                      {endpoint.exampleRequest &&
                        endpoint.exampleRequest.split("\n").length > 1 && (
                          <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200 overflow-x-auto">
                            <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">
                              {endpoint.exampleRequest
                                .split("\n")
                                .slice(1)
                                .join("\n")}
                            </pre>
                          </div>
                        )}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <FaRocket className="w-4 h-4 mr-2 text-purple-600" />
                      Resposta
                    </h5>
                    <div className="bg-white border border-purple-200 rounded-xl p-4 sm:p-6 font-mono text-sm shadow-sm">
                      <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200 overflow-x-auto">
                        <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">
                          {endpoint.exampleResponse}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {endpoint.bodyExplanation && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
                    <h6 className="font-semibold text-slate-800 mb-4 flex items-center">
                      <FaBook className="w-4 h-4 mr-2 text-purple-600" />
                      Parâmetros da Requisição
                    </h6>
                    <div className="space-y-4">
                      {endpoint.bodyExplanation
                        .split("\n\n")
                        .map((section, sectionIndex) => {
                          const lines = section.split("\n")
                          const title = lines[0]
                          const items = lines.slice(1)

                          return (
                            <div
                              key={sectionIndex}
                              className="bg-white/60 rounded-lg p-4 border border-purple-200/50"
                            >
                              <h2 className="font-semibold text-slate-800 text-sm mb-3 block">
                                {title}
                              </h2>
                              <div className="space-y-2">
                                {items
                                  .map((item, itemIndex) => {
                                    if (item.trim().startsWith("•")) {
                                      const [param, ...descParts] = item
                                        .replace("•", "")
                                        .trim()
                                        .split(":")
                                      const description = descParts
                                        .join(":")
                                        .trim()
                                      return (
                                        <div
                                          key={itemIndex}
                                          className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3"
                                        >
                                          <code className="text-purple-700 bg-purple-100 px-2 py-1 rounded text-xs font-medium shrink-0">
                                            {param.trim()}
                                          </code>
                                          <span className="text-slate-600 text-sm leading-relaxed">
                                            {description}
                                          </span>
                                        </div>
                                      )
                                    }
                                    return null
                                  })
                                  .filter(Boolean)}
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Webhooks Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Webhooks
              </h2>
              <p className="text-slate-600">
                O sistema envia notificações via webhook para eventos
                importantes. Todos os webhooks são enviados via POST com
                assinatura HMAC-SHA256 no header X-Signature.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Eventos Suportados
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">DEPOSIT</h4>
                  <p className="text-green-700 text-sm">
                    Quando um depósito é recebido
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    WITHDRAWAL
                  </h4>
                  <p className="text-orange-700 text-sm">
                    Quando um saque é processado
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    PAYMENT REQUEST
                  </h4>
                  <p className="text-purple-700 text-sm">
                    Quando uma solicitação de pagamento é criada
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Estrutura Base do Webhook
              </h3>
              <div className="bg-white border border-purple-200 rounded-xl p-4 sm:p-6 font-mono text-sm shadow-sm">
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200 overflow-x-auto">
                  <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">{`{
  "eventId": "evt_123e4567-e89b-12d3-a456-426614174000",
  "eventType": "DEPOSIT",
  "userId": "456e7890-e89b-12d3-a456-426614174000",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    // Dados específicos do evento
  }
}`}</pre>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Exemplos de Webhooks
              </h3>
              {webhookExamples.map((webhook, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                        {webhook.name}
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base">
                        {webhook.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {webhook.labels.map((label, labelIndex) => (
                        <span
                          key={labelIndex}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium ${label.bgColor} ${label.textColor} shadow-sm`}
                        >
                          {label.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <FaCode className="w-4 h-4 mr-2 text-purple-600" />
                      Exemplo de Payload
                    </h5>
                    <div className="bg-white border border-purple-200 rounded-xl p-4 sm:p-6 font-mono text-sm shadow-sm">
                      <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200 overflow-x-auto">
                        <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">
                          {webhook.example}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200/50 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <Image
                src="/pixley_logo.svg"
                alt="Pixley Logo"
                width={128}
                height={48}
                className="mr-3"
              />
              <div className="text-center">
                <p className="text-sm text-slate-600 leading-relaxed mt-4">
                  PIXLEY LLC
                  <br />
                  30 N Gould St Ste R Sheridan,
                  <br />
                  WY 82801, Wyoming, United States.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
