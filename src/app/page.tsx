"use client"

import React, { useState } from "react"
import {
  FaCalendarAlt,
  FaHeartbeat,
  FaKey,
  FaLink,
  FaMoneyBill,
  FaServer,
  FaShieldAlt,
  FaComments,
  FaTimes
} from "react-icons/fa"
import { useTenant } from './context/TenantContext';
import { useTenantUrl } from "./context/TenantUrlContext";
import { useLanguage } from "./utils/languageContext";
import LanguageSelector from "./componentes/LanguageSelector";
import ChatPrompt from "./componentes/ChatPrompt";

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

export default function Home() {
  const { t } = useLanguage();
  const { tenantConfig, isLoading: isTenantLoading } = useTenant();
  const { apiUrl, isLoading: isApiUrlLoading } = useTenantUrl();
  const [activeSection, setActiveSection] = useState('developers');
  const [mobileChat, setMobileChat] = useState(false);

  // Loading state while contexts are being loaded
  if (isTenantLoading || isApiUrlLoading || !tenantConfig || !apiUrl) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          <p className="text-lg">Carregando documentação...</p>
        </div>
      </div>
    );
  }

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

  const DeveloperSections = () => {
    return (
      <div className="space-y-8">
        {/* Introduction Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4">{t('welcome_to_api')}</h2>
              <p className="text-gray-300 mb-4">
                {t('api_intro_text')}
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  <span className="mr-2">🚀</span>
                  {t('getting_started')}
                </h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-2">
                  <li>{t('register_account')}</li>
                  <li>{t('generate_api_keys')}</li>
                  <li>{t('integrate_api')}</li>
                  <li>{t('test_integration')}</li>
                </ol>
              </div>
            </div>
            <div className="w-full md:w-64 flex flex-col gap-4">
              <div className="bg-gray-800/70 rounded-lg p-4 border border-gray-700">
                <h3 className="text-md font-semibold text-blue-400 mb-2">
                  <span className="mr-2">ℹ️</span>
                  {t('api_details')}
                </h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><span className="text-gray-400">{t('base_url')}:</span> {apiUrl}</li>
                  <li><span className="text-gray-400">{t('version')}:</span> v1</li>
                  <li><span className="text-gray-400">{t('format')}:</span> JSON</li>
                  <li><span className="text-gray-400">{t('auth')}:</span> API Key + Secret</li>
                </ul>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-800/30">
                <h3 className="text-md font-semibold text-blue-400 mb-2">
                  <span className="mr-2">💡</span>
                  {t('need_help')}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {t('contact_support_text')}
                </p>
                <a
                  href="mailto:support@pixonchain.com"
                  className="text-blue-400 text-sm hover:text-blue-300 flex items-center"
                >
                  {tenantConfig?.email_suporte}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Informações Importantes */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4 flex items-center text-white">
            <span className="text-yellow-400 mr-2">⚠️</span>
            {t('important')}
          </h2>
          <p className="text-gray-300 mb-4">
            {t('api_credentials_info_full')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">{t('authentication')}</h3>
              <p className="text-sm text-gray-300 mb-3">
                {t('header_credentials_info')}
              </p>
              <div className="font-mono bg-gray-800 p-4 rounded-lg text-sm">
                <div className="text-gray-400 mb-1">{t('header_example')}:</div>
                <div className="flex items-center mb-1">
                  <span className="text-yellow-300 mr-2">x-api-key:</span>
                  <span className="text-green-400">********</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">x-secret-key:</span>
                  <span className="text-green-400">********</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-5 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">{t('curl_example')}</h3>
              <p className="text-sm text-gray-300 mb-3">
                {t('curl_example_desc')}
              </p>
              <pre className="bg-gray-800 text-gray-300 p-3 rounded-lg text-sm overflow-x-auto">
                <code>
                  {`curl -X GET "https://${apiUrl}/health" \\\n  -H "x-api-key: `}
                  <span className="text-green-400">{t('your_api_key')}</span>
                  {`" \\\n  -H "x-secret-key: `}
                  <span className="text-green-400">{t('your_secret_key')}</span>
                  {`"`}
                </code>
              </pre>
            </div>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3 mt-1">💡</span>
              <div>
                <h4 className="text-blue-400 font-medium mb-1">{t('security_tip')}</h4>
                <p className="text-sm text-gray-300">
                  {t('security_tip_text')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Listagem de Endpoints */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-white">{t('api_endpoints')}</h3>
          <div className="grid grid-cols-1 gap-6">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-700 transition-all hover:border-gray-600"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">{endpoint.name}</h2>
                    {endpoint.subtitle && (
                      <p className="text-gray-400 font-medium">
                        {endpoint.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.labels?.map((label, labelIndex) => (
                      <span
                        key={labelIndex}
                        className={`flex items-center px-3 py-1 text-xs font-bold rounded-full ${label.bgColor} ${label.textColor}`}
                      >
                        {label.text}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 border-l-4 border-blue-500 pl-3 py-1">
                  {endpoint.description}
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-400 block mb-1">{t('method')}:</span>
                    <span className={`inline-block px-3 py-1 rounded-md text-sm font-mono ${endpoint.method === 'GET' ? 'bg-green-900/50 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-900/50 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-900/50 text-yellow-400' :
                          endpoint.method === 'DELETE' ? 'bg-red-900/50 text-red-400' : 'bg-gray-700 text-white'
                      }`}>
                      {endpoint.method}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-blue-400 block mb-1">{t('url')}:</span>
                    <span className="block text-sm text-white font-mono bg-gray-900 p-2 rounded break-all">
                      {endpoint.url}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <details className="bg-gray-800 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer p-3 bg-gray-800 hover:bg-gray-750 text-blue-400 hover:text-blue-300 font-medium">
                      {t('request_example')}
                    </summary>
                    <pre className="bg-gray-900 text-gray-300 p-4 text-sm overflow-x-auto border-t border-gray-700">
                      <code>{endpoint.exampleRequest}</code>
                    </pre>
                  </details>
                  <details className="bg-gray-800 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer p-3 bg-gray-800 hover:bg-gray-750 text-blue-400 hover:text-blue-300 font-medium">
                      {t('response_example')}
                    </summary>
                    <pre className="bg-gray-900 text-gray-300 p-4 text-sm overflow-x-auto border-t border-gray-700">
                      <code>{endpoint.exampleResponse}</code>
                    </pre>
                  </details>
                </div>
                {endpoint.bodyExplanation && (
                  <details className="bg-gray-800 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer p-3 bg-gray-800 hover:bg-gray-750 text-blue-400 hover:text-blue-300 font-medium">
                      {t('request_body_explanation')}
                    </summary>
                    <div className="bg-gray-900 text-gray-300 p-4 text-sm border-t border-gray-700">
                      <code className="whitespace-pre-wrap">{endpoint.bodyExplanation}</code>
                    </div>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto py-3 px-3 sm:px-6 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-400">
                {tenantConfig.name} <span className="text-white">Docs</span>
              </h1>
            </div>

            <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
              <button
                onClick={() => setActiveSection('developers')}
                className={`px-2 py-1 text-sm sm:text-base rounded transition ${activeSection === 'developers' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                {t('developers')}
              </button>
              <button
                onClick={() => setActiveSection('events')}
                className={`px-2 py-1 text-sm sm:text-base rounded transition ${activeSection === 'events' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                {t('events')}
              </button>
              <LanguageSelector />
            </nav>
          </div>
        </div>
      </header>

      {/* Main content with sidebar layout */}
      <div className="flex-1 flex relative">
        {/* Documentation side - takes remaining space with padding for the fixed sidebar */}
        <div className="w-full lg:w-2/3 xl:w-3/4 overflow-y-auto pb-16 pt-4 sm:pt-6 px-3 sm:px-6">
          <div className="container mx-auto max-w-full">
            {activeSection === 'developers' ? (
              <section className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400">{t('api_documentation')}</h2>
                <DeveloperSections />
              </section>
            ) : (
              <section className="bg-gray-900 rounded-lg p-4 sm:p-6 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400">{t('event_examples')}</h2>
                <div className="space-y-6">
                  {Object.entries(groupedEvents).map(([eventType, events]) => (
                    <EventTypeSection key={eventType} type={eventType} events={events} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Chat area - fixed to the right side on desktop */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/4 fixed top-[4rem] right-0 bottom-0 border-l border-gray-700 bg-gray-800">
          <div className="h-full">
            <ChatPrompt />
          </div>
        </div>

        {/* Mobile chat toggle button */}
        <button
          onClick={() => setMobileChat(true)}
          className="lg:hidden fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50 animate-pulse-slow"
          aria-label="Open chat"
        >
          <FaComments className="text-lg sm:text-xl" />
        </button>

        {/* Mobile chat overlay */}
        {mobileChat && (
          <div className="lg:hidden fixed inset-0 bg-gray-900/95 z-50 flex flex-col">
            <div className="bg-gray-800 p-3 sm:p-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold text-white">{t('ask_question')}</h3>
              <button
                onClick={() => setMobileChat(false)}
                className="text-gray-400 hover:text-white p-2"
                aria-label="Close chat"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ChatPrompt />
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-900 border-t border-gray-700 py-3 sm:py-4 px-4 sm:px-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} {tenantConfig.name}. {t('all_rights_reserved')}</p>
        </div>
      </footer>
    </div>
  );
}
