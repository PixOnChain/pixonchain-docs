"use client"

import React from "react"
import {
  FaCalendarAlt,
  FaHeartbeat,
  FaKey,
  FaLink,
  FaMoneyBill,
  FaServer,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa"

const allowedCryptos = ['cBRL', 'USDT', 'ETH', 'BTC', 'POL', 'SOL', 'USDC', 'HTR'];

const DeveloperSections = () => {
  const endpoints = [
    {
      name: "Login",
      subtitle: "Autenticação de Usuário",
      description: "Autentica o usuário e retorna tokens de acesso.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/login",
      exampleRequest: `POST https://api.pixonchain.com/api/auth/login
{
  "email": "user@example.com",
  "password": "strongpassword123"
}`,
      exampleResponse: `{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjE2MjM5MDIyLCJleHAiOjE2MTYyNDI2MjJ9.sflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4gdXNlZCBmb3IgcmVmcmVzaGluZyB0aGUgYWNjZXNzIHRva2Vu",
  "userId": "12345678-1234-1234-1234-123456789012"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-purple-500 text-lg p-1">
                <FaKey className="text-lg text-white" />
              </span>
              LOGIN
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- email: Email do usuário.
- password: Senha do usuário.`,
    },
    {
      name: "Signup",
      subtitle: "Registro de Usuário",
      description: "Registra um novo usuário na plataforma.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/signup",
      exampleRequest: `POST https://api.pixonchain.com/api/auth/signup
{
  "fullName": "John Doe",
  "tax_id": "12345678909",
  "birthDate": "1990-01-01",
  "email": "john.doe@example.com",
  "phone": "5511999999999",
  "whatsapp": "5511999999999",
  "telegram": "5511999999999",
  "userType": "PF",
  "password": "securepassword123",
  "tenant_id": "12345678-1234-1234-1234-123456789012",
  "type": "PF"
}`,
      exampleResponse: `{
  "message": "User registered successfully"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-purple-500 text-lg p-1">
                <FaKey className="text-lg text-white" />
              </span>
              SIGNUP
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- fullName: Nome completo do usuário.
- tax_id: CPF do usuário.
- birthDate: Data de nascimento do usuário.
- email: Email do usuário.
- phone: Telefone do usuário.
- whatsapp: Número do WhatsApp do usuário.
- telegram: Número do Telegram do usuário.
- userType: Tipo de usuário (PF ou PJ).
- password: Senha do usuário.
- tenant_id: ID do tenant.
- type: Tipo de usuário (PF ou PJ).`,
    },
    {
      name: "Generate API Keys",
      subtitle: "Geração de Chaves de API",
      description: "Gera novas chaves de API para autenticação.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/keys/generate-api-keys",
      exampleRequest: `POST https://api.pixonchain.com/api/auth/keys/generate-api-keys`,
      exampleResponse: `{
  "message": "API keys generated successfully",
  "apiKey": "example-api-key",
  "secretKey": "example-secret-key"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-purple-500 text-lg p-1">
                <FaKey className="text-lg text-white" />
              </span>
              API KEYS
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-yellow-500 text-lg p-1">
                <FaShieldAlt className="text-lg text-white" />
              </span>
              SECURITY
            </span>
          ),
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Key Validation",
      subtitle: "Validação de Chaves de API",
      description: "Valida as chaves de API fornecidas para garantir acesso às APIs.",
      method: "POST",
      url: "https://api.pixonchain.com/api/auth/keys/key-validate",
      exampleRequest: `POST https://api.pixonchain.com/api/auth/keys/key-validate`,
      exampleResponse: `{
  "accessToken": "example-access-token"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-purple-500 text-lg p-1">
                <FaKey className="text-lg text-white" />
              </span>
              API KEYS
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-yellow-500 text-lg p-1">
                <FaShieldAlt className="text-lg text-white" />
              </span>
              SECURITY
            </span>
          ),
          bgColor: "bg-[#3b82f6]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    // Banking e Transações
    {
      name: "Generate QR Code",
      subtitle: "Geração de QR Code",
      description: "Gera um QR Code para pagamento via Pix.",
      method: "POST",
      url: "https://api.pixonchain.com/api/banking/generate-qrcode",
      exampleRequest: `POST https://api.pixonchain.com/api/banking/generate-qrcode
{
  "value": "0.51"
}`,
      exampleResponse: `{
  "qrCode": "00020101021226930014BR.GOV.BCB.PIX2571spi-qrcode.bancointer.com.br/spi/pj/v2/a050b96223b54048a80a2ad57afbd2ed52040000530398654040.515802BR5901*6013FLORIANOPOLIS61088803200562070503***6304BEB5",
  "value": "0.51",
  "expiration": 3600,
  "txid": "09a8d6b9b8df46ee9627c55b8d835e80"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              QR CODE
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- value: Valor do pagamento.`,
    },
    {
      name: "Get BR Code",
      subtitle: "Recuperação de BR Code",
      description: "Recupera os detalhes de um BR Code gerado anteriormente.",
      method: "GET",
      url: "https://api.pixonchain.com/api/banking/brcodes/:uuid",
      exampleRequest: `GET https://api.pixonchain.com/api/banking/brcodes/:uuid`,
      exampleResponse: `{
  "amount": "0.51",
  "fees": null,
  "network": null,
  "token": null,
  "qr_code": "00020101021226930014BR.GOV.BCB.PIX2571spi-qrcode.bancointer.com.br/spi/pj/v2/a050b96223b54048a80a2ad57afbd2ed52040000530398654040.515802BR5901*6013FLORIANOPOLIS61088803200562070503***6304BEB5",
  "wallet_address": null,
  "created_at": "2025-02-05T21:54:42.883Z",
  "pix_status": "pending",
  "tx_hash": null
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              BR CODE
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Create Order",
      subtitle: "Criação de Ordem",
      description: `Cria uma nova ordem de compra ou venda. As moedas aceitas são: ${allowedCryptos.join(', ')}. O cBRL é uma stablecoin em reais, também chamada de real tokenizado da Pix on Chain.`,
      method: "POST",
      url: "https://api.pixonchain.com/api/orders/create",
      exampleRequest: `POST https://api.pixonchain.com/api/orders/create
{
  "orderType": "buy",
  "sourceCurrency": "cBRL",
  "targetCurrency": "USDT",
  "sourceAmount": 7.00,
  "network": "MATIC",
  "generatePixCode": true,
  "walletAddress": "0xexampleaddress"
}`,
      exampleResponse: `{
  "id": 197,
  "order_type": "buy",
  "source_currency": "cBRL",
  "target_currency": "USDT",
  "source_amount": "7.00000000",
  "target_amount": "1.16279070",
  "network": "MATIC",
  "status": "PENDING",
  "created_at": "2025-02-05T22:12:06.258Z",
  "approved": false,
  "wallet_address": "0xexampleaddress",
  "basePrice": 6.02,
  "qrCodeData": {
    "qrCode": "00020101021226930014BR.GOV.BCB.PIX2571spi-qrcode.bancointer.com.br/spi/pj/v2/f03c5e356d294f1c8856ddf3af660e9c52040000530398654047.005802BR5901*6013FLORIANOPOLIS61088803200562070503***630495E1",
    "value": "7.00",
    "expiration": 3600,
    "txid": "7e3bce64404f45f9af7abd9069c763a8"
  }
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-red-500 text-lg">🔥</span>
              HOT
            </span>
          ),
          bgColor: "bg-[#13121C]",
          textColor: "text-[red]",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              ORDER
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- orderType: Tipo da ordem (buy ou sell).
- sourceCurrency: Moeda de origem.
- targetCurrency: Moeda de destino.
- sourceAmount: Quantidade da moeda de origem.
- network: Rede utilizada para a transação.
- generatePixCode: Booleano indicando se deve gerar um código Pix.
- walletAddress: Endereço da carteira para a transação.`,
    },
    {
      name: "Get Balance",
      subtitle: "Recuperação de Saldo",
      description: "Recupera os saldos de moedas fiduciárias e criptomoedas.",
      method: "GET",
      url: "https://api.pixonchain.com/api/banking/balance",
      exampleRequest: `GET https://api.pixonchain.com/api/banking/balance`,
      exampleResponse: `{
  "fiatBalances": [
    {
      "currency": "cBRL",
      "balance": 317.63905
    }
  ],
  "cryptoBalances": [
    {
      "currency": "BTC",
      "balance": 0
    },
    {
      "currency": "ETH",
      "balance": 0
    },
    {
      "currency": "HTR",
      "balance": 0
    },
    {
      "currency": "POLY",
      "balance": 0
    },
    {
      "currency": "USDC",
      "balance": 0
    },
    {
      "currency": "USDT",
      "balance": 0
    }
  ]
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              BALANCE
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Process Payment (CHAVE)",
      subtitle: "Processamento de Pagamento via Chave Pix",
      description: "Processa um pagamento utilizando uma chave Pix.",
      method: "POST",
      url: "https://api.pixonchain.com/api/banking/payment",
      exampleRequest: `POST https://api.pixonchain.com/api/banking/payment
{
  "type": "CHAVE",
  "valor": 0.01,
  "descricao": "Payment for invoice #1234",
  "destinatario": {
    "chave": "CHAVE_PIX_AQUI"
  }
}`,
      exampleResponse: `{
  "status": "success",
  "message": "Payment processed successfully",
  "transactionId": "txn_1234567890"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              PAYMENT
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- type: Tipo de pagamento (CHAVE).
- valor: Valor do pagamento.
- descricao: Descrição do pagamento.
- destinatario: Objeto contendo a chave Pix do destinatário.`,
    },
    {
      name: "Process Payment (PIX_COPIA_E_COLA)",
      subtitle: "Processamento de Pagamento via Pix Copia e Cola",
      description: "Processa um pagamento utilizando um código Pix Copia e Cola.",
      method: "POST",
      url: "https://api.pixonchain.com/api/banking/payment",
      exampleRequest: `POST https://api.pixonchain.com/api/banking/payment
{
  "type": "PIX_COPIA_E_COLA",
  "descricao": "Payment for service subscription",
  "destinatario": {
    "pixCopiaECola": "00020126580014br.gov.bcb.pix0136fd276f0c-9945-49b9-aab9-4a2ff48ad72b52040000530398654045.005802BR5917Brla Digital Ltda6009Sao Paulo621605120000Kiref1236304E61E"
  }
}`,
      exampleResponse: `{
  "status": "success",
  "message": "Payment processed successfully",
  "transactionId": "txn_1234567890"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              PAYMENT
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- type: Tipo de pagamento (PIX_COPIA_E_COLA).
- descricao: Descrição do pagamento.
- destinatario: Objeto contendo o código Pix Copia e Cola do destinatário.`,
    },
    {
      name: "Process Payment (DADOS_BANCARIOS)",
      subtitle: "Processamento de Pagamento via Dados Bancários",
      description: "Processa um pagamento utilizando dados bancários.",
      method: "POST",
      url: "https://api.pixonchain.com/api/banking/payment",
      exampleRequest: `POST https://api.pixonchain.com/api/banking/payment
{
  "type": "DADOS_BANCARIOS",
  "valor": 0.1,
  "descricao": "Withdrawal order 45",
  "destinatario": {
    "tipo": "DADOS_BANCARIOS",
    "nome": "Pedro Sergio Gonçalves Magalhaes",
    "contaCorrente": "54076358",
    "tipoConta": "CONTA_CORRENTE",
    "banco": "077",
    "agencia": "0001"
  }
}`,
      exampleResponse: `{
  "status": "success",
  "message": "Payment processed successfully",
  "transactionId": "txn_1234567890"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              PAYMENT
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- type: Tipo de pagamento (DADOS_BANCARIOS).
- valor: Valor do pagamento.
- descricao: Descrição do pagamento.
- destinatario: Objeto contendo os dados bancários do destinatário.`,
    },
    {
      name: "Get Statement",
      subtitle: "Recuperação de Extrato",
      description: "Recupera o extrato de transações.",
      method: "GET",
      url: "https://api.pixonchain.com/api/banking/statement",
      exampleRequest: `GET https://api.pixonchain.com/api/banking/statement`,
      exampleResponse: `{
  "transactions": [
    {
      "transaction_id": "0076a43e-69e3-44d3-aa4d-950e27d2f0ec",
      "status": "COMPLETED",
      "amount": "100.00",
      "currency": "cBRL",
      "end_to_end_id": null,
      "created_at": "2025-02-09T01:42:06.898Z",
      "creditor_name": null,
      "creditor_document": null,
      "debtor_name": null,
      "debtor_document": null
    },
    // ...more transactions...
  ],
  "total": 9,
  "page": 1,
  "limit": 10
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              STATEMENT
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Health Check",
      subtitle: "Verificação de Saúde do Servidor",
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
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaHeartbeat className="text-lg text-white" />
              </span>
              HEALTH
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-blue-500 text-lg p-1">
                <FaServer className="text-lg text-white" />
              </span>
              SERVER
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Add Webhook",
      subtitle: "Adição de Webhook",
      description: "Adiciona um novo webhook para monitoramento de eventos na plataforma.",
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
              <span className="text-purple-500 text-lg p-1">
                <FaLink className="text-lg text-white" />
              </span>
              WEBHOOK
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-blue-500 text-lg p-1">
                <FaCalendarAlt className="text-lg text-white" />
              </span>
              EVENTS
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- url: URL do webhook.`,
    },
    {
      name: "List all Webhooks",
      subtitle: "Listagem de Webhooks",
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
              <span className="text-purple-500 text-lg p-1">
                <FaLink className="text-lg text-white" />
              </span>
              WEBHOOK
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-blue-500 text-lg p-1">
                <FaCalendarAlt className="text-lg text-white" />
              </span>
              EVENTS
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
    {
      name: "Delete Webhook",
      subtitle: "Exclusão de Webhook",
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
              <span className="text-purple-500 text-lg p-1">
                <FaLink className="text-lg text-white" />
              </span>
              WEBHOOK
            </span>
          ),
          bgColor: "bg-[#7747FF]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-blue-500 text-lg p-1">
                <FaCalendarAlt className="text-lg text-white" />
              </span>
              EVENTS
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- Nenhum campo necessário.`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">📄 Área de Desenvolvedores</h1>
      <p className="text-sm text-gray-400 mb-6 text-center">
        Explore os endpoints disponíveis para integrar-se à plataforma Pix on
        Chain.
      </p>

      {/* Card de Informações Importantes */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
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
            <b className="text-yellow-300">x-api-key</b>: <span className="text-green-300">********</span>
          </span>
          <span className="block">
            <b className="text-yellow-300">x-secret-key</b>: <span className="text-green-300">********</span>
          </span>
        </p>

        {/* Exemplo com Curl */}
        <div className="mt-4 bg-gray-700 p-4 rounded-lg">
          <h3 className="text-md font-bold text-white mb-2">
            Exemplo com Curl:
          </h3>
          <pre className="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm overflow-x-auto">
            <code>
              {`curl -X GET "https://api.pixonchain.com/health" \\\n  -H "x-api-key: `}
              <span className="text-green-300">SEU_API_KEY</span>
              {`" \\\n  -H "x-secret-key: `}
              <span className="text-green-300">SEU_SECRET_KEY</span>
              {`"`}
            </code>
          </pre>
          <p className="text-xs text-gray-400 mt-2">
            Substitua <code className="text-green-300">SEU_API_KEY</code>, e{" "}
            <code className="text-green-300">SEU_SECRET_KEY</code> pelos valores fornecidos.
          </p>
        </div>

        <div className="flex justify-center align-center mt-4">
          <a
            href="https://wa.me/5547992134469"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#7747ff] text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            Quero obter minhas credenciais
          </a>
        </div>
      </div>

      {/* Listagem de Endpoints */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="space-y-6">
          {endpoints.map((endpoint, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-left">
              <h2 className="text-lg font-bold">{endpoint.name}</h2>
              {endpoint.subtitle && (
                <p className="text-sm text-gray-400 font-medium mt-1">
                  {endpoint.subtitle}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-3 mt-2">
                {endpoint.labels?.map((label, labelIndex) => (
                  <span
                    key={labelIndex}
                    className={`flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-full ${label.bgColor} ${label.textColor} w-full sm:w-auto`}
                  >
                    {label.text}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-3">
                {endpoint.description}
              </p>
              <div className="mb-4">
                <span className="block text-sm text-yellow-300 font-mono break-words">
                  <b>Method:</b> {endpoint.method}
                </span>
                <span className="block text-sm text-yellow-300 font-mono break-words">
                  <b>URL:</b> {endpoint.url}
                </span>
              </div>
              <details className="mb-3">
                <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                  Exemplo de Requisição
                </summary>
                <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
                  <code>
                    {endpoint.exampleRequest}
                  </code>
                </pre>
              </details>
              <details className="mb-3">
                <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                  Exemplo de Resposta
                </summary>
                <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
                  <code>
                    {endpoint.exampleResponse}
                  </code>
                </pre>
              </details>
              {endpoint.bodyExplanation && (
                <details>
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Explicação do Corpo da Requisição
                  </summary>
                  <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
                    <code>
                      {endpoint.bodyExplanation}
                    </code>
                  </pre>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeveloperSections
