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
  FaYoutube,
} from "react-icons/fa"
import { useTenant } from './context/TenantContext';
import { useTenantApiUrl } from "./context/TenantUrlContext";

// const allowedCryptos = ['cBRL', 'USDT', 'ETH', 'BTC', 'POL', 'SOL', 'USDC', 'HTR'];

interface EventDetailsProps {
  event: {
    eventId: string
    eventType: string
    eventVersion: string
    source: string
    userId: string
    timestamp: string
    details: {
      status: string
      value?: string
      qrCode?: string
      currency: string
      idempotencyKey: string
      easterEgg?: string
      paymentPayload?: {
        type: string
        valor: string
        descricao: string
        destinatario: {
          chave: string
        }
      }
      txId?: string
      amount?: number
      endToEndId?: string
      eventDate?: string
      paymentAmount?: number
      externalId?: string
      txid?: string
      expiration?: number
      network?: string
    }
  }
}

interface EventTypeSectionProps {
  events: EventDetailsProps["event"][]
  type: string
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => (
  <details className="mb-3">
    <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
      {event.eventType} - {event.details.status}
    </summary>
    <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
      <code>{JSON.stringify(event, null, 2)}</code>
    </pre>
  </details>
)

const EventTypeSection: React.FC<EventTypeSectionProps> = ({
  events,
  type,
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold mb-3">{type}</h3>
    {events.map((event, index) => (
      <EventDetails key={index} event={event} />
    ))}
  </div>
)

const DeveloperSections = () => {
  const { tenantConfig } = useTenant();
  const apiUrl = useTenantApiUrl();

  const eventsData = [
    {
      eventId: "6ec9d5f2-f64d-4280-9244-293f3065bd16",
      eventType: "PAYMENT REQUEST",
      eventVersion: "1.0",
      source: tenantConfig?.docs_source || "",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:08:33Z",
      details: {
        status: "CREATED",
        value: "15",
        qrCode:
          "00020126580014br.gov.bcb.pix0136fd276f0c-9945-49b9-aab9-4a2ff48ad72b520400005303986540515.005802BR5917Brla Digital Ltda6009Sao Paulo622505210000Ki7ad1bec0585e4816304E7CF",
        currency: "BRLA",
        idempotencyKey: "4ca54dba-8a22-4fe2-a88f-d7e12db4db34",
      },
    },
    {
      eventId: "6d2748d1-4826-4393-98a1-652229e4040c",
      eventType: "PAYMENT",
      eventVersion: "1.0",
      source: tenantConfig?.docs_source || "",
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
      source: tenantConfig?.docs_source || "",
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
      source: tenantConfig?.docs_source || "",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:10:53Z",
      details: {
        status: "CREATED",
        value: "1.01",
        qrCode:
          "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/ba55e02b-6fef-48b5-9873-3edbfc646b4b5204000053039865802BR5923ETHER_PRIVATE_BANK_LTDA6008CONTAGEM62070503***630466E6",
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
      source: tenantConfig?.docs_source || "",
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
      source: tenantConfig?.docs_source || "",
      userId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      timestamp: "2025-02-16T21:12:43Z",
      details: {
        status: "CREATED",
        value: "1.01",
        qrCode: "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/98ad8638-54a0-47e5-a906-391bb5b073f85204000053039865802BR5923ETHER_PRIVATE_BANK_LTDA6008CONTAGEM62070503***6304F5F3",
        currency: "cPix",
        externalId: "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
        txid: "a5dea817d81b4daa837c80a78fcf2b7d",
        expiration: 3600,
        network: "Hathor",
        idempotencyKey: "a6c2ae82-72dc-4694-8efb-4990953c1cf6",
      },
    },
  ]

  type EventType = {
    [key: string]: typeof eventsData
  }

  const groupedEvents: EventType = eventsData.reduce(
    (acc: { [key: string]: typeof eventsData }, event) => {
      if (!acc[event.eventType]) {
        acc[event.eventType] = []
      }
      acc[event.eventType].push(event)
      return acc
    },
    {}
  )

  const endpoints = [
    {
      name: "Login",
      subtitle: "Autenticação de Usuário",
      description: "Autentica o usuário e retorna tokens de acesso.",
      method: "POST",
      url: `https://${apiUrl}/api/auth/login`,
      exampleRequest: `POST https://${apiUrl}/api/auth/login\n{
"email": "user@example.com",
"password": "strongpassword123"
}`,
      exampleResponse: `{
"accessToken": "string",
"refreshToken": "string",
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
      url: `https://${apiUrl}/api/auth/signup`,
      exampleRequest: `POST https://${apiUrl}/api/auth/signup
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
      url: `https://${apiUrl}/api/auth/keys/generate-api-keys`,
      exampleRequest: `POST https://${apiUrl}/api/auth/keys/generate-api-keys`,
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
      description:
        "Valida as chaves de API fornecidas para garantir acesso às APIs.",
      method: "POST",
      url: `https://${apiUrl}/api/auth/keys/key-validate`,
      exampleRequest: `POST https://${apiUrl}/api/auth/keys/key-validate`,
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
    {
      name: "Convert Currency",
      subtitle: "Conversão de Moedas",
      description:
        "Converte um valor de uma moeda de origem para uma moeda de destino, com opção de simulação ou execução real.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/convert`,
      exampleRequest: `POST https://${apiUrl}/api/banking/convert
{
  "fromCurrency": "cPix",
  "toCurrency": "USDT",
  "amount": 800,
  "simulation": false
}`,
      exampleResponse:
        `{
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
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              CONVERSION
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-red-500 text-lg">🔥</span>
              CRYPTO
            </span>
          ),
          bgColor: "bg-[#13121C]",
          textColor: "text-[red]",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- fromCurrency: Moeda de origem (ex.: "cPix").
- toCurrency: Moeda de destino (ex.: "USDT").
- amount: Valor a ser convertido em centavos (ex.: 800 = 8.00).
- simulation: Booleano indicando se é uma simulação (true) ou execução real (false).`,
    },
    {
      name: "Withdraw Crypto",
      subtitle: "Saque de Criptomoedas",
      description:
        "Solicita o saque de uma quantidade de criptomoeda para um endereço de carteira especificado, com opção de simulação.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/withdraw-crypto`,
      exampleRequest: `POST https://${apiUrl}/api/banking/withdraw-crypto
{
  "currency": "USDT",
  "receiverAddress": "0xaabaafcd77d1828689bf2f196bb4fe6c9e5e2bb7",
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
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-green-500 text-lg p-1">
                <FaMoneyBill className="text-lg text-white" />
              </span>
              WITHDRAWAL
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-red-500 text-lg">🔥</span>
              CRYPTO
            </span>
          ),
          bgColor: "bg-[#13121C]",
          textColor: "text-[red]",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- currency: Moeda a ser sacada (ex.: "USDT").
- receiverAddress: Endereço da carteira de destino.
- amount: Valor a ser sacado em centavos (ex.: 100 = 1.00).
- network: Rede blockchain utilizada (ex.: "Polygon").
- simulation: Booleano indicando se é uma simulação (true) ou execução real (false).`,
    },
    {
      name: "Generate QR Code",
      subtitle: "Geração de QR Code",
      description: "Gera um QR Code para pagamento via Pix.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/generate-cpix-qrcode`,
      exampleRequest: `POST https://${apiUrl}/api/banking/generate-cpix-qrcode
{
  "value": "0.51"
}`,
      exampleResponse: `{
  "qrCode": "00020126580014br.gov.bcb.pix0136fd276...000530398654040.515802BR5901*60...088803200562070503***6304BEB5",
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
      url: `https://${apiUrl}/api/banking/brcodes/:uuid`,
      exampleRequest: `GET https://${apiUrl}/api/banking/brcodes/:uuid`,
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
      name: "Crypto Transaction (Pix to USDT)",
      subtitle: "Cotação e Execução de Transação Pix para USDT",
      description:
        "Obtém uma cotação para uma transação ou executa uma transação real. Receben valores em USDT diretamente na carteira do usuário.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/quote-transaction`,
      exampleRequest: `POST https://${apiUrl}/api/banking/quote-transaction
{
  "value": 601,
  "simulation": true,
  "receiverAddress": "0x78f71eA0f0e7d5CEb742963CbdbCb60607bE890C"
}`,
      exampleResponse: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbW91bnRCcmwiOiI2LjAxIiwiYW1vdW50VXNkIjoiMC45NyIsImJhc2VGZWUiOiIwIiwiYmFzZVByaWNlIjoiNS43NjM5IiwiY2hhaW4iOiJQb2x5Z29uIiwiZXhwIjoxNzM5Mzc5MTQ0LCJnYXNGZWUiOiIwIiwiaW5wdXRDb2luIjoiQlJMQSIsIm1hcmt1cEZlZSI6IjAiLCJvcGVyYXRpb24iOiJwaXgtdG8tdXNkIiwib3V0cHV0Q29pbiI6IlVTRFQiLCJzdWIiOiIwNWUxOWM0YS02OGQyLTQ3NGMtYTg1Ni1jMmQ4Mzc0YTI2NzYiLCJzdWJhY2NvdW50SWQiOiIiLCJ0b2tlbklkIjoiOTE1ZTNkODAtYjg1Yy00NDMxLWExNTItOWU2Y2EzZDkzNWVhIn0.n7gTXi129JLL_LkxFbuqDz4kBKMprZdQYjtEs2hRGGY",
  "basePrice": "5.7639",
  "sub": "05e19c4a-68d2-474c-a856-c2d8374a2676",
  "operation": "pix-to-usd",
  "amountBrl": "6.01",
  "amountUsd": "0.97",
  "amountToken": "0",
  "baseFee": "0",
  "gasFee": "0",
  "markupFee": "0",
  "markupToken": "USDT",
  "inputCoin": "BRLA",
  "outputCoin": "USDT",
  "chain": "Polygon"
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
              CRYPTO
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `O corpo da requisição deve conter os seguintes campos:
- value: Valor da transação.
- simulation: Booleano indicando se é uma simulação. Se for false, a transação será processada.
- receiverAddress: Endereço do destinatário.`,
    },
    {
      name: "Get Crypto Transaction",
      subtitle: "Recuperação de Cotação de Transação",
      description: "Recupera os detalhes de uma cotação de transação.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/quote-transaction/:transactionId`,
      exampleRequest: `GET https://${apiUrl}/api/banking/quote-transaction/:transactionId`,
      exampleResponse: `{
  "depositsLogs": [
    {
      "id": "72760ed0-3f06-4955-a5f3-f8491dc5f5c1",
      "chain": "Polygon",
      "walletAddress": "0xAAbAAfCD77d1828689BF2f196Bb4fE6C9e5e2bb7",
      "receiverAddress": "0xAAbAAfCD77d1828689BF2f196Bb4fE6C9e5e2bb7",
      "coin": "USDT",
      "amountBrl": 600,
      "amountUsd": 97,
      "taxId": "12345678901",
      "due": "2025-02-11T21:01:28.101093Z",
      "createdAt": "2025-02-11T20:56:28.101122Z",
      "status": "PAID",
      "updatedAt": "2025-02-11T20:56:54.614427Z",
      "payerName": "Nome Fictício",
      "referenceLabel": "P2Ut3puGLdbZb",
      "externalId": "7ad1bec0585e48138c05ebfd3a78753c",
      "pixToUsdOps": [
        {
          "id": "0d1ac23f-a362-4b1f-831f-b050c43c15d5",
          "brlaAmount": 600,
          "usdAmount": 97,
          "coin": "USDT",
          "createdAt": "2025-02-11T20:56:54.654908Z",
          "smartContractOps": [
            {
              "id": "04f4040a-22f6-4645-911a-736be1d9dbea",
              "operationName": "PIX-TO-USD",
              "posted": true,
              "tx": "0x67870297b28ec8730432d3f3498ff3cb656f1916cddc884967d620dedf67b64b",
              "notPostedReason": "",
              "createdAt": "2025-02-11T20:56:54.719537Z",
              "isRetry": false,
              "feedback": {
                "id": "81d4dafd-31e4-4c63-a17c-e16d31037015",
                "success": true,
                "errorMsg": "",
                "createdAt": "2025-02-11T20:56:58Z"
              }
            }
          ]
        }
      ]
    }
  ]
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
              CRYPTO
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
      name: "Get Balance",
      subtitle: "Recuperação de Saldo",
      description: "Recupera os saldos de moedas fiduciárias e criptomoedas.",
      method: "GET",
      url: `https://${apiUrl}/api/banking/balance`,
      exampleRequest: `GET https://${apiUrl}/api/banking/balance`,
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
      url: `https://${apiUrl}/api/banking/payment`,
      exampleRequest: `POST https://${apiUrl}/api/banking/payment
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
      description:
        "Processa um pagamento utilizando um código Pix Copia e Cola.",
      method: "POST",
      url: `https://${apiUrl}/api/banking/payment`,
      exampleRequest: `POST https://${apiUrl}/api/banking/payment
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
      url: `https://${apiUrl}/api/banking/payment`,
      exampleRequest: `POST https://${apiUrl}/api/banking/payment
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
      url: `https://${apiUrl}/api/banking/statement`,
      exampleRequest: `GET https://${apiUrl}/api/banking/statement`,
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
      url: `https://${apiUrl}/health`,
      exampleRequest: `GET https://${apiUrl}/health`,
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
      description:
        "Adiciona um novo webhook para monitoramento de eventos na plataforma.",
      method: "POST",
      url: `https://${apiUrl}/api/webhooks`,
      exampleRequest: `POST https://${apiUrl}/api/webhooks
{
  "urls": [
    "https://webhook.site/12345678-1234-1234-1234-123456789012"
  ]
}`,
      exampleResponse: `{
  "success": true,
  "id": "webhook-id",
  "urls": [
    "https://webhook.site/12345678-1234-1234-1234-123456789012"
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
- urls: Lista de URLs do webhook.`,
    },
    {
      name: "List all Webhooks",
      subtitle: "Listagem de Webhooks",
      description: "Lista todos os webhooks cadastrados na plataforma.",
      method: "GET",
      url: `https://${apiUrl}/api/webhooks`,
      exampleRequest: `GET https://${apiUrl}/api/webhooks`,
      exampleResponse: `{
    "success": true,
    "webhooks": [
        {
            "id": "cf38411a-8638-4243-8ea6-ac9bea6e7c60",
            "user_id": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
            "urls": [
                "https://webhook.site/8ea591c7-0786-4e81-9cdb-872ebadb6e82"
            ],
            "created_at": "2025-02-17T00:07:10.694Z",
            "updated_at": "2025-02-17T00:07:10.694Z"
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
      url: `https://${apiUrl}/api/webhooks/:id`,
      exampleRequest: `DELETE https://${apiUrl}/api/webhooks/:id`,
      exampleResponse: `{
  "success": true,
  "webhook": {
    "id": 1,
    "user_id": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
    "urls": [
      "https://webhook.site/f9927649-cfde-4507-b648-94f2371defca"
    ],
    "created_at": "2025-02-16T20:05:43.956Z",
    "updated_at": "2025-02-16T20:05:43.956Z"
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
    {
      name: "Event Types",
      subtitle: "Tipos de Events",
      description:
        "Lista os tipos de eventos que podem ser monitorados via webhooks.",
      method: "GET",
      url: `https://${apiUrl}/api/events`,
      exampleRequest: `GET https://${apiUrl}/api/events`,
      exampleResponse: `[
  {
    "eventId": "6ec9d5f2-f64d-4280-9244-293f3065bd16",
    "eventType": "PAYMENT REQUEST",
    "eventVersion": "1.0",
    "source": ${tenantConfig?.docs_source || ""},
    "userId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
    "timestamp": "2025-02-16T21:08:33Z",
    "details": {
      "status": "CREATED",
      "value": "15",
      "qrCode": "00020126580014br.gov.bcb.pix0136fd276f0c-9945-49b9-aab9-4a2ff48ad72b520400005303986540515.005802BR5917Brla Digital Ltda6009Sao Paulo622505210000Ki7ad1bec0585e4816304E7CF",
      "currency": "BRLA",
      "idempotencyKey": "4ca54dba-8a22-4fe2-a88f-d7e12db4db34"
    }
  },
  {
    "eventId": "6d2748d1-4826-4393-98a1-652229e4040c",
    "eventType": "PAYMENT",
    "eventVersion": "1.0",
    "source": ${tenantConfig?.docs_source || ""},
    "userId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
    "timestamp": "2025-02-16T21:09:02Z",
    "details": {
      "status": "QUEUE",
      "paymentPayload": {
        "type": "CHAVE",
        "valor": "1.01",
        "descricao": "Payment for invoice #1234",
        "destinatario": {
          "chave": "13113124719"
        }
      },
      "currency": "cPix",
      "idempotencyKey": "09770527-9e89-4cc6-87cb-338fc125286e"
    }
  },
  {
    "eventId": "54158180-b07f-4382-b040-0c400dbadb9e",
    "eventType": "PAYMENT",
    "eventVersion": "1.0",
    "source": ${tenantConfig?.docs_source || ""},
    "userId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
    "timestamp": "2025-02-16T21:09:06Z",
    "details": {
      "type": "WITHDRAWAL",
      "status": "CONFIRMED",
      "paymentPayload": {
        "type": "CHAVE",
        "valor": "1.01",
        "descricao": "Payment for invoice #1234",
        "destinatario": {
          "chave": "13113124719"
        }
      },
      "txId": "7272e5ddae8d488a8457a770d5494987",
      "amount": 0.37,
      "currency": "cPix",
      "endToEndId": "E05491616202502170009052554e019a",
      "eventDate": "2025-02-17T00:09:05.255+00:00",
      "paymentAmount": 0.37,
      "idempotencyKey": "a7d7afce-789b-4da0-bd01-e672ebbfdcbf"
    }
  },
  {
    "eventId": "2a1ed281-4d3e-4890-bdd4-f3759b04e73b",
    "eventType": "PAYMENT REQUEST",
    "eventVersion": "1.0",
    "source": ${tenantConfig?.docs_source || ""},
    "userId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
    "timestamp": "2025-02-16T21:10:53Z",
    "details": {
      "status": "CREATED",
      "value": "1.01",
      "qrCode": "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/ba55e02b-6fef-48b5-9873-3edbfc646b4b5204000053039865802BR5923ETHER_PRIVATE_BANK_LTDA6008CONTAGEM62070503***630466E6",
      "currency": "cPix",
      "externalId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      "txid": "f56313b59c0f4b9e80a4cc348a775b40",
      "expiration": 3600,
      "network": "Hathor",
      "idempotencyKey": "87a2d30b-db3d-4aa5-9112-3fe29c02cb0f"
    }
  },
  {
    "eventId": "d0fe0227-1641-4cf8-857b-5e0d0d44fc18",
    "eventType": "PAYMENT REQUEST",
    "eventVersion": "1.0",
    "source": ${tenantConfig?.docs_source || ""},
    "userId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
    "timestamp": "2025-02-16T21:12:43Z",
    "details": {
      "status": "CREATED",
      "value": "1.01",
      "qrCode": "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/98ad8638-54a0-47e5-a906-391bb5b073f85204000053039865802BR5923ETHER_PRIVATE_BANK_LTDA6008CONTAGEM62070503***6304F5F3",
      "currency": "cPix",
      "externalId": "7ad1bec0-585e-4813-8c05-ebfd3a78753c",
      "txid": "a5dea817d81b4daa837c80a78fcf2b7d",
      "expiration": 3600,
      "network": "Hathor",
      "idempotencyKey": "a6c2ae82-72dc-4694-8efb-4990953c1cf6"
    }
  }
]`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-purple-500 text-lg p-1">
                <FaLink className="text-lg text-white" />
              </span>
              WEBHOOKS
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
      name: "Get User Wallet",
      subtitle: "Consulta de Carteira por Tipo de Rede",
      description: "Recupera a carteira do usuário para um tipo específico de rede blockchain.",
      method: "GET",
      url: `https://${apiUrl}/api/wallet/user-wallet`,
      exampleRequest: `GET https://${apiUrl}/api/wallet/user-wallet?networkType=EVM`,
      exampleResponse: `{
  "wallet_address": "0xC4F792cB4B259EC3E8a9433550F12028284FF0d4",
  "network_type": "EVM",
  "created_at": "2025-03-13T21:31:38.319Z",
  "updated_at": "2025-03-13T21:31:38.319Z"
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-red-500 text-lg">🔥</span>
              CRYPTO
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
              WALLET
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Parâmetros de consulta:
- networkType: Tipo de rede blockchain (EVM, BTC, Hathor, TRON, etc.)`,
    },
    {
      name: "Get User Wallets",
      subtitle: "Consulta de Todas as Carteiras do Usuário",
      description: "Recupera todas as carteiras blockchain do usuário autenticado.",
      method: "GET",
      url: `https://${apiUrl}/api/wallet/user-wallets`,
      exampleRequest: `GET https://${apiUrl}/api/wallet/user-wallets`,
      exampleResponse: `{
  "EVM": {
    "wallet_address": "0xC4F792cB4B259EC3E8a9433550F12028284FF0d4",
    "created_at": "2025-03-13T21:31:38.319Z",
    "updated_at": "2025-03-13T21:31:38.319Z"
  },
  "BTC": {
    "wallet_address": "16eBPAHMmMcVshmkRDurPuZwoeCwU2djNy",
    "created_at": "2025-03-13T01:56:28.663Z",
    "updated_at": "2025-03-13T01:56:28.663Z"
  },
  "Hathor": {
    "wallet_address": "HGfYRC4rkA4TMCbBsywyNwRS5DdbTyqnVg",
    "created_at": "2025-03-13T22:13:09.601Z",
    "updated_at": "2025-03-13T22:13:09.601Z"
  },
  "TRON": {
    "wallet_address": "TXThyYPQ4uSvo92b9y3dDomJj1fPwLqGK7",
    "created_at": "2025-03-13T22:00:49.432Z",
    "updated_at": "2025-03-13T22:00:49.432Z"
  }
}`,
      labels: [
        {
          text: (
            <span className="flex items-center gap-1 mr-2">
              <span className="text-red-500 text-lg">🔥</span>
              CRYPTO
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
              WALLET
            </span>
          ),
          bgColor: "bg-[#00cc66]",
          textColor: "text-white",
        },
      ],
      bodyExplanation: `Não é necessário enviar parâmetros para esta requisição.`,
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
            <b className="text-yellow-300">x-api-key</b>:{" "}
            <span className="text-green-300">********</span>
          </span>
          <span className="block">
            <b className="text-yellow-300">x-secret-key</b>:{" "}
            <span className="text-green-300">********</span>
          </span>
        </p>

        {/* Exemplo com Curl */}
        <div className="mt-4 bg-gray-700 p-4 rounded-lg">
          <h3 className="text-md font-bold text-white mb-2">
            Exemplo com Curl:
          </h3>
          <pre className="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm overflow-x-auto">
            <code>
              {`curl -X GET "https://${apiUrl}/health" \\\n  -H "x-api-key: `}
              <span className="text-green-300">SEU_API_KEY</span>
              {`" \\\n  -H "x-secret-key: `}
              <span className="text-green-300">SEU_SECRET_KEY</span>
              {`"`}
            </code>
          </pre>
          <p className="text-xs text-gray-400 mt-2">
            Substitua <code className="text-green-300">SEU_API_KEY</code>, e{" "}
            <code className="text-green-300">SEU_SECRET_KEY</code> pelos valores
            fornecidos.
          </p>
        </div>

        <div className="flex justify-center align-center mt-4">
          <a
            href="https://www.youtube.com/watch?v=LSOUfZd930k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#7747ff] text-white font-medium py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FaYoutube className="text-lg" />
            Como obter minhas credenciais
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
                  <code>{endpoint.exampleRequest}</code>
                </pre>
              </details>
              <details className="mb-3">
                <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                  Exemplo de Resposta
                </summary>
                <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
                  <code>{endpoint.exampleResponse}</code>
                </pre>
              </details>
              {endpoint.bodyExplanation && (
                <details>
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Explicação do Corpo da Requisição
                  </summary>
                  <pre className="bg-gray-900 text-gray-300 p-2 rounded-lg text-sm mt-2 overflow-x-auto">
                    <code>{endpoint.bodyExplanation}</code>
                  </pre>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Listagem de Eventos */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl bg-gray-800 rounded-lg p-6 shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-6">📅 Tipos de Events</h2>
        {Object.keys(groupedEvents).map((type, index) => (
          <EventTypeSection
            key={index}
            events={groupedEvents[type]}
            type={type}
          />
        ))}
      </div>

    </div>
  )
}

export default DeveloperSections
