"use client"

import React from "react"
import { FaBook, FaCode, FaRocket, FaShieldAlt } from "react-icons/fa"

import Image from "next/image"

export default function Home() {

  const apiUrl = "uat.pixley.app";

  const endpoints = [
    // TRADE ENDPOINTS
    {
      name: "Off-Ramp (Saque Crypto para PIX)",
      subtitle: "Processa transação off-ramp",
      description: "Processa uma transação off-ramp (saque de crypto para PIX)",
      method: "POST",
      url: `https://${apiUrl}/trade/off-ramp`,
      exampleRequest: `POST https://${apiUrl}/trade/off-ramp?simulation=false
Authorization: Bearer <your-jwt-token>
x-user-id: <user-id>
x-tenant-id: <tenant-id>
{
  "source_currency": "USDT",
  "source_amount": 50.00,
  "target_currency": "PIX",
  "pix_key": "user@example.com",
  "pix_key_type": "email",
  "recipient_name": "João Silva",
  "recipient_document": "12345678901",
  "network": "Polygon",
  "externalId": "ext-withdrawal-123"
}`,
      exampleResponse: `{
  "withdrawal_id": "withdrawal_1234567890_abc123",
  "status": "processing",
  "source_currency": "USDT",
  "source_amount": 50.00,
  "target_currency": "PIX",
  "estimated_amount_received": 49.00,
  "estimated_completion": "2024-01-15T10:30:00Z",
  "message": "Withdrawal is being processed. Blockchain operations have been queued and PIX transfer will be initiated shortly."
}`,
      labels: [
        {
          text: "OFF-RAMP",
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: "PIX",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Headers obrigatórios:
• Authorization: Bearer <token>
• x-user-id: <user-id>
• x-tenant-id: <tenant-id> (opcional)

Query Parameters:
• simulation: (boolean, opcional) Se true, retorna apenas dados de simulação

Campos do corpo da requisição:
• source_currency: Moeda de origem (ex.: "USDT")
• source_amount: Valor a ser sacado
• target_currency: "PIX"
• pix_key: Chave PIX do destinatário
• pix_key_type: Tipo da chave PIX ("email", "cpf", etc.)
• recipient_name: Nome do destinatário
• recipient_document: Documento do destinatário
• network: Rede blockchain (ex.: "Polygon")
• externalId: ID externo da transação`,
    },
    {
      name: "On-Ramp (Compra Crypto com PIX)",
      subtitle: "Processa transação on-ramp",
      description: "Processa uma transação on-ramp (compra de crypto com PIX)",
      method: "POST",
      url: `https://${apiUrl}/trade/on-ramp`,
      exampleRequest: `POST https://${apiUrl}/trade/on-ramp?simulation=false
Authorization: Bearer <your-jwt-token>
x-user-id: <user-id>
x-tenant-id: <tenant-id>
{
  "source_currency": "BRL",
  "source_amount": 100.00,
  "target_currency": "USDT",
  "wallet_address": "0x742d35Cc6634C0532925a3b8D4C9db96590c6C87",
  "network": "Polygon"
}`,
      exampleResponse: `{
  "id": "trade-123",
  "status": "pending",
  "qr_code": "00020126580014br.gov.bcb.pix...",
  "source_currency": "BRL",
  "source_amount": 100.00,
  "target_currency": "USDT",
  "target_amount": 18.52,
  "wallet_address": "0x742d35Cc6634C0532925a3b8D4C9db96590c6C87",
  "network": "Polygon",
  "created_at": "2024-01-15T10:30:00Z"
}`,
      labels: [
        {
          text: "ON-RAMP",
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
        {
          text: "PIX",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Headers obrigatórios:
• Authorization: Bearer <token>
• x-user-id: <user-id>
• x-tenant-id: <tenant-id> (opcional)

Query Parameters:
• simulation: (boolean, opcional) Se true, retorna apenas dados de simulação

Campos do corpo da requisição:
• source_currency: "BRL"
• source_amount: Valor em BRL a ser convertido
• target_currency: Moeda de destino (ex.: "USDT")
• wallet_address: Endereço da carteira de destino
• network: Rede blockchain (ex.: "Polygon")`,
    },
    {
      name: "Buscar Transação On-Ramp",
      subtitle: "Consulta detalhes de transação",
      description: "Busca detalhes de uma transação on-ramp específica",
      method: "GET",
      url: `https://${apiUrl}/trade/on-ramp/{transactionId}`,
      exampleRequest: `GET https://${apiUrl}/trade/on-ramp/{transactionId}
Authorization: Bearer <your-jwt-token>
x-user-id: <user-id>
x-tenant-id: <tenant-id>`,
      exampleResponse: `{
  "qrCode": {
    "id": "qr-123",
    "uuid": "550e8400-e29b-41d4-a716-446655440000",
    "qr_code": "00020126580014br.gov.bcb.pix...",
    "source_currency": "cPix",
    "source_amount": 100.00,
    "target_currency": "USDT",
    "target_amount": 18.52,
    "network": "Polygon",
    "wallet_address": "0x742d35Cc6634C0532925a3b8D4C9db96590c6C87",
    "fees": 5.00,
    "pix_status": "pending",
    "trade_price": 5.40,
    "net_amount": 95.00,
    "updated_at": "2024-01-15T10:30:00Z",
    "tx_hash": "0xabc123...",
    "explorer_url": "https://polygonscan.com/tx/0xabc123..."
  }
}`,
      labels: [
        {
          text: "ON-RAMP",
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
        {
          text: "QUERY",
          bgColor: "bg-[#10b981]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Headers obrigatórios:
• Authorization: Bearer <token>
• x-user-id: <user-id>
• x-tenant-id: <tenant-id> (opcional)

Path Parameters:
• transactionId: ID da transação a ser consultada

Observação:
• Este endpoint não requer corpo da requisição`,
    },
    {
      name: "Consultar Limites do Usuário",
      subtitle: "Limites e uso atual",
      description: "Permite que usuários autenticados consultem seus próprios limites e uso atual",
      method: "GET",
      url: `https://${apiUrl}/api/users/me/limits`,
      exampleRequest: `GET https://${apiUrl}/api/users/me/limits
x-user-id: <user-id>`,
      exampleResponse: `{
  "dailyLimits": {
    "amount": 1000.00,
    "count": 10,
    "active": true
  },
  "monthlyLimits": {
    "amount": 30000.00,
    "count": 100,
    "active": true
  },
  "dailyUsage": {
    "amount": 250.00,
    "count": 3
  },
  "monthlyUsage": {
    "amount": 5500.00,
    "count": 25
  },
  "remainingLimits": {
    "daily": {
      "amount": 750.00,
      "count": 7
    },
    "monthly": {
      "amount": 24500.00,
      "count": 75
    }
  }
}`,
      labels: [
        {
          text: "LIMITS",
          bgColor: "bg-[#f59e0b]",
          textColor: "text-white",
        },
        {
          text: "USER",
          bgColor: "bg-[#8b5cf6]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Headers obrigatórios:
• x-user-id: <user-id>

Observação:
• Nenhum parâmetro adicional necessário`,
    },
  ]

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
      description: "Exemplo de webhook enviado quando uma solicitação de pagamento é criada",
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">API Documentation - Pixley Crypto Transactions</h2>
            <p className="text-slate-600">Esta documentação descreve os principais endpoints da API do sistema Pixley Crypto Transactions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <FaCode className="w-5 h-5 mr-2 text-purple-600" />
                Base URL
              </h4>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100">
                https://uat.pixley.app
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <FaShieldAlt className="w-5 h-5 mr-2 text-purple-600" />
                Autenticação
              </h4>
              <p className="text-slate-600 mb-4 text-sm">
                Todos os endpoints requerem autenticação via JWT token:
              </p>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100">
                <div>Authorization: Bearer &lt;your-jwt-token&gt;</div>
                <div>x-user-id: &lt;user-id&gt;</div>
              </div>
            </div>
          </div>

          {/* Detailed Endpoints */}
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{endpoint.name}</h4>
                    <p className="text-slate-600 text-sm sm:text-base">{endpoint.subtitle}</p>
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
              
              <p className="text-slate-700 mb-6 leading-relaxed">{endpoint.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <FaCode className="w-4 h-4 mr-2 text-purple-600" />
                    Requisição
                  </h5>
                  <div className="bg-white border border-purple-200 rounded-xl p-4 sm:p-6 font-mono text-sm shadow-sm">
                    <div className="mb-4">
                      <span className="text-purple-600 font-semibold">{endpoint.method}</span> 
                      <span className="text-slate-700 break-all"> {endpoint.url}</span>
                    </div>
                    {endpoint.exampleRequest && endpoint.exampleRequest.includes('{') && (
                      <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200 overflow-x-auto">
                        <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">{endpoint.exampleRequest.split('\n').slice(1).join('\n')}</pre>
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
                      <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">{endpoint.exampleResponse}</pre>
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
                    {endpoint.bodyExplanation.split('\n\n').map((section, sectionIndex) => {
                      const lines = section.split('\n');
                      const title = lines[0];
                      const items = lines.slice(1);
                      
                      return (
                        <div key={sectionIndex} className="bg-white/60 rounded-lg p-4 border border-purple-200/50">
                          <h7 className="font-semibold text-slate-800 text-sm mb-3 block">{title}</h7>
                          <div className="space-y-2">
                            {items.map((item, itemIndex) => {
                              if (item.trim().startsWith('•')) {
                                const [param, ...descParts] = item.replace('•', '').trim().split(':');
                                const description = descParts.join(':').trim();
                                return (
                                  <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                    <code className="text-purple-700 bg-purple-100 px-2 py-1 rounded text-xs font-medium shrink-0">
                                      {param.trim()}
                                    </code>
                                    <span className="text-slate-600 text-sm leading-relaxed">{description}</span>
                                  </div>
                                );
                              }
                              return null;
                            }).filter(Boolean)}
                          </div>
                        </div>
                      );
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Webhooks</h2>
            <p className="text-slate-600">O sistema envia notificações via webhook para eventos importantes. Todos os webhooks são enviados via POST com assinatura HMAC-SHA256 no header X-Signature.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Eventos Suportados</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">DEPOSIT</h4>
                <p className="text-green-700 text-sm">Quando um depósito é recebido</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">WITHDRAWAL</h4>
                <p className="text-orange-700 text-sm">Quando um saque é processado</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">PAYMENT REQUEST</h4>
                <p className="text-purple-700 text-sm">Quando uma solicitação de pagamento é criada</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Estrutura Base do Webhook</h3>
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
            <h3 className="text-xl font-bold text-slate-900 mb-4">Exemplos de Webhooks</h3>
            {webhookExamples.map((webhook, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{webhook.name}</h4>
                    <p className="text-slate-600 text-sm sm:text-base">{webhook.description}</p>
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
                      <pre className="whitespace-pre-wrap text-xs leading-relaxed text-slate-800 break-words">{webhook.example}</pre>
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
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/pixley_logo.svg"
              alt="Pixley Logo"
              width={48}
              height={48}
              className="mr-3"
            />
            <span className="text-xl font-semibold text-slate-800">Pixley</span>
          </div>
          <p className="text-slate-600 mb-2">&copy; {new Date().getFullYear()} Pixley. Todos os direitos reservados.</p>
          <p className="text-sm text-slate-500 mb-8">uat.pixley.app</p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-slate-800 mb-3">Corporate Address</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                30 N Gould St Ste R Sheridan,<br />
                WY 82801, Wyoming, MI, United States.
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="font-semibold text-slate-800 mb-3">Contact Us</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                <a href="tel:+1-321-352-3332" className="hover:text-purple-600 transition-colors block mb-1">
                  +1-(321)-352-3332
                </a>
                <a href="mailto:contact@pixley.app" className="hover:text-purple-600 transition-colors block">
                  contact@pixley.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
}