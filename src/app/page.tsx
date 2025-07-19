"use client"

import React from "react"
import { FaBook, FaCode, FaRocket, FaEnvelope, FaShieldAlt, FaMoneyBill, FaHeartbeat, FaServer, FaLink, FaCalendarAlt, FaKey } from "react-icons/fa"

import Image from "next/image"

export default function Home() {

  const apiUrl = "uat.pixley.app";

  const eventsData = [
    {
      eventId: "6ec9d5f2-f64d-4280-9244-293f3065bd16",
      eventType: "PAYMENT REQUEST",
      eventVersion: "1.0",
      source: "https://uat.pixley.app",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:08:33Z",
      details: {
        status: "CREATED",
        value: "15",
        qrCode:
          "00020126580014br.gov.bcb.pix0136fd276f0c-9945-49b9-aab9-4a2ff48ad72b520400005303986540515.005802BR5917Acme Pay Inc.6009Sao Paulo622505210000Ki7ad1bec0585e4816304E7CF",
        currency: "CPIX",
        idempotencyKey: "4ca54dba-8a22-4fe2-a88f-d7e12db4db34",
      },
    },
    {
      eventId: "6d2748d1-4826-4393-98a1-652229e4040c",
      eventType: "PAYMENT",
      eventVersion: "1.0",
      source: "https://uat.pixley.app",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:09:02Z",
      details: {
        status: "QUEUE",
        paymentPayload: {
          type: "CHAVE",
          valor: "1.01",
          descricao: "Payment for invoice #1234",
          destinatario: {
            chave: "13113124719",
          },
        },
        currency: "cPix",
        idempotencyKey: "09770527-9e89-4cc6-87cb-338fc125286e",
      },
    },
    {
      eventId: "54158180-b07f-4382-b040-0c400dbadb9e",
      eventType: "PAYMENT",
      eventVersion: "1.0",
      source: "https://uat.pixley.app",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:09:06Z",
      details: {
        type: "WITHDRAWAL",
        status: "CONFIRMED",
        paymentPayload: {
          type: "CHAVE",
          valor: "1.01",
          descricao: "Payment for invoice #1234",
          destinatario: {
            chave: "13113124719",
          },
        },
        txId: "7272e5ddae8d488a8457a770d5494987",
        amount: 0.37,
        currency: "cPix",
        endToEndId: "E05491616202502170009052554e019a",
        eventDate: "2025-02-17T00:09:05.255+00:00",
        paymentAmount: 0.37,
        idempotencyKey: "a7d7afce-789b-4da0-bd01-e672ebbfdcbf",
      },
    },
    {
      eventId: "2a1ed281-4d3e-4890-bdd4-f3759b04e73b",
      eventType: "PAYMENT REQUEST",
      eventVersion: "1.0",
      source: "https://uat.pixley.app",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:10:53Z",
      details: {
        status: "CREATED",
        value: "1.01",
        qrCode:
          "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/ba55e02b-6fef-48b5-9873-3edbfc646b4b5204000053039865802BR5923VIRTUAL_FINANCE_CORP6008CONTAGEM62070503***630466E6",
        currency: "cPix",
        externalId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
        txid: "f56313b59c0f4b9e80a4cc348a775b40",
        expiration: 3600,
        network: "Hathor",
        idempotencyKey: "87a2d30b-db3d-4aa5-9112-3fe29c02cb0f",
      },
    },
    {
      eventId: "3afacb85-a159-4db3-83fa-fde611bc5325",
      eventType: "DEPOSIT",
      eventVersion: "1.0",
      source: "https://uat.pixley.app",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:30:32Z",
      details: {
        amount: 1.01,
        currency: "cPix",
        txId: "76ac0d48f96744f88c33b0763be25599",
        type: "DEPOSIT",
        status: "COMPLETED",
        totalAmount: 0.359799,
        feeAmount: 0.650201,
        walletAddress: "HS7FMTgjzNw7AYgFPCyK1GLfhzeYUM1L1F",
        network: "Hathor",
        hashExplorerUrl:
          "https://explorer.hathor.network/transaction/00002016e957cf21de12560b464325f440e3f90b2957602d0576a863566f3664",
        txHash:
          "00002016e957cf21de12560b464325f440e3f90b2957602d0576a863566f3664",
        idempotencyKey: "66ad2db5-2d5c-4c4c-9391-250387b57883",
      },
    },
    {
      eventId: "d0fe0227-1641-4cf8-857b-5e0d0d44fc18",
      eventType: "PAYMENT REQUEST",
      eventVersion: "1.0",
      source: "https://uat.pixley.app",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:12:43Z",
      details: {
        status: "CREATED",
        value: "1.01",
        qrCode: "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/98ad8638-54a0-47e5-a906-391bb5b073f85204000053039865802BR5923VIRTUAL_FINANCE_CORP6008CONTAGEM62070503***6304F5F3",
        currency: "cPix",
        externalId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
        txid: "a5dea817d81b4daa837c80a78fcf2b7d",
        expiration: 3600,
        network: "Hathor",
        idempotencyKey: "a6c2ae82-72dc-4694-8efb-4990953c1cf6",
      },
    },
  ]


  const endpoints = [
    // AUTENTICAÇÃO
    {
      name: "Gerar Chaves de API",
      subtitle: "Geração de Chaves de API",
      description: "Gera novas chaves de API para autenticação.",
      method: "POST",
      url: `https://${apiUrl}/api/auth/keys/generate-api-keys`,
      exampleRequest: `POST https://${apiUrl}/api/auth/keys/generate-api-keys
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
            exampleResponse: `{
  "message": "API keys generated successfully",
  "apiKey": "a1b2c3d4-e5f6-7890-abcd-123456789012",
  "secretKey": "f8e7d6c5b4a398765432109876543210abcdef1234567890abcdef1234567890"
}`,
      labels: [
        {
          text: "API KEYS",
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: "SECURITY",
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Validação de Chaves",
      subtitle: "Validação de Chaves de API",
      description: "Valida as chaves de API fornecidas para garantir acesso às APIs.",
      method: "POST",
      url: `https://${apiUrl}/api/auth/keys/key-validate`,
      exampleRequest: `POST https://${apiUrl}/api/auth/keys/key-validate
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}`,
      labels: [
        {
          text: "API KEYS",
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: "SECURITY",
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },

    // CONVERSÕES E CRIPTOMOEDAS
    {
      name: "Converter Moeda",
      subtitle: "Conversão de Moedas",
      description: "Converte um valor de uma moeda de origem para uma moeda de destino, com opção de simulação ou execução real.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/convert`,
      exampleRequest: `POST https://${apiUrl}/api/banking/convert
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6
{
  "fromCurrency": "cPix",
  "toCurrency": "USDT",
  "amount": 800,
  "simulation": false
}`,
      exampleResponse: `{
  "message": "Conversion successful",
  "fromCurrency": "cPix",
  "toCurrency": "USDT",
  "price": "5.9491",
  "feeAmount": "0.7000",
  "fromAmount": "8.0000",
  "toAmount": "0.9943"
}`,
      labels: [
        {
          text: "CONVERSION",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- fromCurrency: Moeda de origem (ex.: "cPix").
- toCurrency: Moeda de destino (ex.: "USDT").
- amount: Valor a ser convertido em centavos (ex.: 800 = 8.00).
- simulation: Booleano indicando se é uma simulação (true) ou execução real (false).`,
    },
    {
      name: "Sacar Criptomoeda",
      subtitle: "Saque de Criptomoedas",
      description: "Solicita o saque de uma quantidade de criptomoeda para um endereço de carteira especificado, com opção de simulação.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/withdraw-crypto`,
      exampleRequest: `POST https://${apiUrl}/api/banking/withdraw-crypto
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6
{
  "currency": "USDT",
  "receiverAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "amount": 100,
  "network": "Polygon",
  "simulation": false
}`,
      exampleResponse: `{
"message": "Withdrawal request submitted successfully",
"jobId": "2663"
}`,
      labels: [
        {
          text: "WITHDRAWAL",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
    
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- currency: Moeda a ser sacada (ex.: "USDT").
- receiverAddress: Endereço da carteira de destino.
- amount: Valor a ser sacado em centavos (ex.: 100 = 1.00).
- network: Rede blockchain utilizada (ex.: "Polygon").
- simulation: Booleano indicando se é uma simulação (true) ou execução real (false).`,
    },

    // PIX E PAGAMENTOS
    {
      name: "Obter Pix Copia e Cola",
      subtitle: "Recuperação de Pix Copia e Cola",
      description: "Recupera os detalhes de um Pix Copia e Colagerado anteriormente.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/brcodes/:uuid`,
      exampleRequest: `GET https://${apiUrl}/api/banking/brcodes/:uuid
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "amount": "0.51",
  "fees": null,
  "network": null,
  "token": null,
  "qr_code": "00020101021226930014BR.GOV.BCB.PIX2571spi-qrcode.bancocryptoex.com.br/spi/pj/v2/a050b96223b54048a80a2ad57afbd2ed52040000530398654040.515802BR5901*6013CAPITAL_CITY61088803200562070503***6304BEB5",
  "wallet_address": null,
  "created_at": "2025-02-05T21:54:42.883Z",
  "pix_status": "pending",
  "tx_hash": null
}`,
      labels: [
        {
          text: "PIX",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Transação Cripto (Pix para USDT)",
      subtitle: "Cotação e Execução de Transação Pix para USDT",
      description: "Obtém uma cotação para uma transação ou executa uma transação real. Receben valores em USDT diretamente na carteira do usuário.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/quote-transaction`,
      exampleRequest: `POST https://${apiUrl}/api/banking/quote-transaction
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6
{
  "value": 800,
  "simulation": false,
  "receiverAddress": "0x9876543210fedcba9876543210fedcba98765432"
}`,
      exampleResponse: `{
  "id": "36fecd02-0af1-4c55-9c67-acd08bd2d187",
  "uuid": "d1459d07e3a643e3aead579a90c18669",
  "value": 800,
  "receiverAddress": "0x9876543210fedcba9876543210fedcba98765432",
  "status": "pending",
  "created_at": "2025-02-16T21:10:53Z",
  "updated_at": "2025-02-16T21:10:53Z"
}`,
      labels: [
  
        {
          text: "CONVERSION",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- value: Valor em centavos a ser convertido (ex.: 800 = 8.00).
- simulation: Booleano indicando se é uma simulação (true) ou execução real (false).
- receiverAddress: Endereço da carteira de destino para receber USDT.`,
    },
    {
      name: "Obter Cotação de Transação",
      subtitle: "Consulta de Cotação de Transação",
      description: "Recupera os detalhes de uma cotação de transação específica.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/quote-transaction/:transactionId`,
      exampleRequest: `GET https://${apiUrl}/api/banking/quote-transaction/:transactionId
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "id": "36fecd02-0af1-4c55-9c67-acd08bd2d187",
  "uuid": "d1459d07e3a643e3aead579a90c18669",
  "value": 800,
  "receiverAddress": "0x9876543210fedcba9876543210fedcba98765432",
  "status": "completed",
  "created_at": "2025-02-16T21:10:53Z",
  "updated_at": "2025-02-16T21:11:02Z"
}`,
      labels: [

        {
          text: "CONVERSION",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },

    // SALDOS E EXTRATOS
    {
      name: "Obter Saldo",
      subtitle: "Recuperação de Saldo",
      description: "Recupera os saldos de moedas fiduciárias e criptomoedas.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/balance`,
      exampleRequest: `GET https://${apiUrl}/api/banking/balance
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "fiat": {
    "BRL": "100.50",
    "USD": "25.00"
  },
  "crypto": {
    "USDT": "0.00",
    "BTC": "0.0001"
  }
}`,
      labels: [
        {
          text: "BALANCE",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Pagamento",
      subtitle: "Pagamento",
      description: "Realiza um pagamento via chave PIX.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/payment`,
      exampleRequest: `POST https://${apiUrl}/api/banking/payment
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6
{
  "type": "CHAVE",
  "valor": "1.01",
  "descricao": "Payment for invoice #1234",
  "destinatario": {
    "chave": "12345678901"
  }
}`,
      exampleResponse: `{
  "message": "Payment processed successfully",
  "transactionId": "abc123",
  "status": "completed"
}`,
      labels: [
        {
          text: "PAYMENT",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
        {
          text: "BANKING",
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- type: Tipo de pagamento (ex.: "CHAVE").
- valor: Valor a ser pago (ex.: "1.01").
- descricao: Descrição do pagamento.
- destinatario: Objeto com a chave do destinatário.`,
    },
    {
      name: "Obter Extrato",
      subtitle: "Recuperação de Extrato",
      description: "Recupera o extrato de transações.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/statement`,
      exampleRequest: `GET https://${apiUrl}/api/banking/statement
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "transactions": [
    {
      "id": "123",
      "type": "payment",
      "amount": "10.50",
      "currency": "BRL",
      "status": "completed",
      "created_at": "2025-02-16T21:10:53Z"
    }
  ]
}`,
      labels: [
        {
          text: "STATEMENT",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Obter Transação",
      subtitle: "Consulta de Transação",
      description: "Recupera os detalhes de uma transação específica.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/transaction/:transactionId`,
      exampleRequest: `GET https://${apiUrl}/api/banking/transaction/:transactionId
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "id": "123",
  "type": "payment",
  "amount": "10.50",
  "currency": "BRL",
  "status": "completed",
  "created_at": "2025-02-16T21:10:53Z",
      "details": {
      "description": "Payment for invoice #1234",
      "recipient": "12345678901"
    }
}`,
      labels: [
        {
          text: "TRANSACTION",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },

    // CARTEIRAS
    {
      name: "Obter Carteira do Usuário",
      subtitle: "Consulta de Carteira por Tipo de Rede",
      description: "Recupera a carteira do usuário para um tipo específico de rede blockchain.",
      method: "GET",
      url: `https://${apiUrl}/api/wallet/user-wallet`,
      exampleRequest: `GET https://${apiUrl}/api/wallet/user-wallet?networkType=EVM
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "wallet_address": "0x1234567890abcdef1234567890abcdef12345678",
  "network_type": "EVM",
  "created_at": "2025-03-13T21:31:38.319Z",
  "updated_at": "2025-03-13T21:31:38.319Z"
}`,
      labels: [
   
        {
          text: "WALLET",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Parâmetros de consulta:
- networkType: Tipo de rede blockchain (EVM, BTC, Hathor, TRON, etc.)`,
    },
    {
      name: "Obter Carteiras do Usuário",
      subtitle: "Consulta de Todas as Carteiras do Usuário",
      description: "Recupera todas as carteiras blockchain do usuário autenticado.",
      method: "GET",
      url: `https://${apiUrl}/api/wallet/user-wallets`,
      exampleRequest: `GET https://${apiUrl}/api/wallet/user-wallets
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "EVM": {
    "wallet_address": "0x1234567890abcdef1234567890abcdef12345678",
    "created_at": "2025-03-13T21:31:38.319Z",
    "updated_at": "2025-03-13T21:31:38.319Z"
  },
  "BTC": {
    "wallet_address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    "created_at": "2025-03-13T01:56:28.663Z",
    "updated_at": "2025-03-13T01:56:28.663Z"
  },
  "Hathor": {
    "wallet_address": "HThi8YqGqKjvK8K8K8K8K8K8K8K8K8K8K8K8K8",
    "created_at": "2025-03-13T22:13:09.601Z",
    "updated_at": "2025-03-13T22:13:09.601Z"
  },
  "TRON": {
    "wallet_address": "TQn9Y2khDD95J42FQtQTdwVVRqKqJqKqKqK",
    "created_at": "2025-03-13T22:00:49.432Z",
    "updated_at": "2025-03-13T22:00:49.432Z"
  }
}`,
      labels: [
        {
          text: "WALLET",
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Não é necessário enviar parâmetros para esta requisição.`,
    },

    // SISTEMA
    {
      name: "Verificar Saúde",
      subtitle: "Verificação de Saúde do Servidor",
      description: "Verifica o status de saúde do servidor.",
      method: "GET",
      url: `https://${apiUrl}/health`,
      exampleRequest: `GET https://${apiUrl}/health
x-api-key: 94b0f31b-b740-4735-af0f-5e841f32c457
x-secret-key: b7e24c4d2e8956c153c3d0bada964842109f279e1f5b77687b050ae4ce3071e6`,
      exampleResponse: `{
  "status": "healthy",
  "timestamp": "2025-02-16T21:10:53Z",
  "version": "1.0.0"
}`,
      labels: [
        {
          text: "HEALTH",
          bgColor: "bg-[#10b981]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Referência da API</h2>
            <p className="text-slate-600">Documentação completa dos endpoints disponíveis</p>
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
                Inclua suas credenciais no header:
              </p>
              <div className="bg-white/60 rounded-xl p-4 font-mono text-sm border border-purple-100">
                <div>X-API-Key: SEU_API_KEY</div>
                <div>X-Secret-Key: SEU_SECRET_KEY</div>
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
                                              <h6 className="font-semibold text-slate-800 mb-3 flex items-center">
                          <FaBook className="w-4 h-4 mr-2 text-purple-600" />
                          Campos do Corpo da Requisição
                        </h6>
                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{endpoint.bodyExplanation}</p>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Primeiros Passos</h2>
            <p className="text-slate-600">Comece a integrar em 3 passos simples</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Obtenha credenciais</h4>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Entre em contato para obter suas chaves de API.
              </p>
                              <a 
                  href="mailto:support@pixley.app" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                >
                <FaEnvelope className="w-4 h-4 mr-2" />
                Solicitar credenciais
              </a>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Teste a API</h4>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Use os exemplos para testar sua integração.
              </p>
              <div className="bg-slate-100 rounded-xl p-3 font-mono text-xs">
                curl -X POST https://uat.pixley.app/payments
              </div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Configure webhooks</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Configure webhooks para receber notificações em tempo real.
              </p>
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