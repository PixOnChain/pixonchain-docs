"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo-pixonchain.png";

const CheckoutPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    document: "",
    email: "",
    whatsapp: "",
    paymentMethod: "",
    product: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(18 * 24 * 3600 + 6 * 3600 + 34 * 60 + 55);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [paymentMade, setPaymentMade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`;
  };

  interface FormData {
    fullName: string;
    document: string;
    email: string;
    whatsapp: string;
    paymentMethod: string;
    product: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      const maskedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d{1,5})(\d{1,4})$/, "($1) $2-$3").substring(0, 15);
      setFormData((prevData: FormData) => ({ ...prevData, [name]: maskedValue }));
    } else {
      setFormData((prevData: FormData) => ({ ...prevData, [name]: value }));
    }
  };

  const handlePayment = () => {
    setShowQrModal(false);
    setShowThankYouModal(true);
    setPaymentMade(true);
  };

  const handleInvoice = () => {
    window.open("https://buy.stripe.com/3csbJHdUG5SK2CA3cc", "_blank");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, document, email, whatsapp, paymentMethod, product } = formData;
    if (fullName && document && email && whatsapp && paymentMethod && product) {
      if (paymentMethod === "pix") {
        setShowQrModal(true);
      } else {
        setSubmitted(true);
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative">
      <div className="mb-8">
        <Image src={logo} alt="Pix on Chain Logo" width={250} height={250} />
      </div>
      {!submitted ? (
        <>
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <div className="mb-6">
              <div className="bg-purple-600 p-4 rounded-lg text-center shadow-lg text-white font-bold text-lg">
                Early Adoption Pass<br />
                De <span className="line-through">R$ 3.567,00</span> por <span className="text-2xl">R$ 657,00</span><br />
                Promoção termina em: <span className="text-yellow-300">🔥 {formatTime(timeRemaining)}</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Digite seu nome completo"
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite seu e-mail"
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">WhatsApp</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="Digite seu WhatsApp"
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-sm font-medium mb-2">Forma de Pagamento</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white"
              >
                <option value="">Selecione uma opção</option>
                <option value="pix">Pix</option>
                <option value="stripe">Cartão de Crédito (Stripe)</option>
              </select>
            </div>
            <button
              type="button"
              onClick={
                paymentMade
                  ? handleInvoice
                  : formData.paymentMethod === "pix"
                  ? () => setShowQrModal(true)
                  : () => {
                      const syntheticEvent = {
                        preventDefault: () => {},
                        target: { elements: {} },
                      } as unknown as React.FormEvent<HTMLFormElement>;
                      handleSubmit(syntheticEvent);
                    }
              }
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {paymentMade
                ? "Emitir Nota Fiscal"
                : formData.paymentMethod === "pix"
                ? "Gerar QR Code"
                : "Quero garantir!"}
            </button>
          </form>
          {showQrModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900 text-center">
                <h2 className="text-lg font-bold mb-4">QR Code para Pagamento</h2>
                <Image src="/qrcode.png" alt="QR Code Pix" width={200} height={200} className="mx-auto mb-4" />
                <p className="text-sm font-bold">Nome: IORA PROCESSAMENTO DE DADOS LTDA</p>
                <p className="text-sm font-bold mb-4">Chave Pix: 7bda06fb-55ac-4132-b6ef-8e5dd6a4d51e</p>
                <button
                  onClick={handlePayment}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Paguei!
                </button>
              </div>
            </div>
          )}
          {showThankYouModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900 text-center">
                <h2 className="text-lg font-bold mb-4">Obrigado pelo seu pagamento!</h2>
                <p className="text-sm">Seu pagamento foi será analisado.</p>
                <button
                  onClick={() => setShowThankYouModal(false)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mt-4"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Obrigado pelo seu pedido!</h1>
          <p className="mb-4">Produto: {formData.product}</p>
          <p className="mb-4">Forma de pagamento: {formData.paymentMethod === "pix" ? "Pix" : "Stripe"}</p>
          <p className="mb-4">E-mail: {formData.email}</p>
          <p className="mb-4">WhatsApp: {formData.whatsapp}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
