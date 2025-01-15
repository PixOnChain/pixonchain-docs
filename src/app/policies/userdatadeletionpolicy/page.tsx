"use client";

import React from "react";

const UserDataDeletionPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Política de Exclusão de Dados do Usuário
      </h1>
      <div className="w-full max-w-4xl text-justify space-y-4">
        <h2 className="text-xl font-bold">1. Introdução</h2>
        <p>
          A PIX ON CHAIN - INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS
          LTDA, inscrita no CNPJ sob o nº 58.850.762/0001-67, com sede na Rua
          Vereador Nereu Liberato Nunes, nº 588, Centro, Navegantes (SC), CEP:
          88370-232, está comprometida em garantir aos seus usuários o direito
          à exclusão de seus dados pessoais, conforme estabelecido pela Lei
          Geral de Proteção de Dados (LGPD) e outras regulamentações aplicáveis.
        </p>

        <h2 className="text-xl font-bold">2. Direito à Exclusão de Dados</h2>
        <p>
          Os usuários têm o direito de solicitar a exclusão de seus dados
          pessoais armazenados pela Pix on Chain, desde que:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Os dados não sejam mais necessários para os fins pelos quais foram
            coletados ou tratados.
          </li>
          <li>
            O consentimento para o tratamento de dados tenha sido revogado e
            não exista outra base legal para o processamento.
          </li>
          <li>
            A exclusão não conflite com obrigações legais ou regulatórias, como
            requisitos de retenção de registros financeiros.
          </li>
        </ul>

        <h2 className="text-xl font-bold">3. Procedimento para Solicitar a Exclusão</h2>
        <p>
          Para solicitar a exclusão de dados pessoais, o usuário deve enviar um
          e-mail para o endereço abaixo, contendo as seguintes informações:
        </p>
        <ul className="list-disc list-inside">
          <li>Nome completo do solicitante;</li>
          <li>CPF ou CNPJ associado à conta;</li>
          <li>E-mail de registro na plataforma;</li>
          <li>
            Descrição clara dos dados que deseja excluir (opcional, se não
            quiser excluir todos os dados).
          </li>
        </ul>
        <p>
          E-mail para solicitações:{" "}
          <a
            href="mailto:compliance@pixonchain.com"
            className="text-blue-500 underline"
          >
            compliance@pixonchain.com
          </a>
        </p>

        <h2 className="text-xl font-bold">4. Prazo para Processamento</h2>
        <p>
          Após o recebimento da solicitação, a Pix on Chain processará o pedido
          dentro de um prazo de até **15 dias úteis**, conforme estipulado pela
          LGPD. Durante esse período, o usuário será notificado sobre o
          progresso da solicitação e quaisquer impedimentos legais ou técnicos.
        </p>

        <h2 className="text-xl font-bold">5. Dados Não Elegíveis para Exclusão</h2>
        <p>
          Alguns dados podem não ser elegíveis para exclusão imediata devido a
          obrigações legais e regulatórias. Exemplos incluem:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Registros financeiros relacionados a transações realizadas na
            plataforma, que devem ser mantidos por pelo menos 5 anos.
          </li>
          <li>
            Informações necessárias para cumprir com auditorias, investigações
            ou exigências legais.
          </li>
        </ul>

        <h2 className="text-xl font-bold">6. Garantia de Exclusão</h2>
        <p>
          Após a conclusão do processo de exclusão, a Pix on Chain enviará uma
          confirmação ao usuário informando que os dados foram apagados de seus
          sistemas. Esta exclusão incluirá:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Dados pessoais armazenados em bancos de dados ativos da plataforma;
          </li>
          <li>Backups, onde tecnicamente viável;</li>
          <li>
            Revogação de acessos e remoção de informações em sistemas de
            terceiros, quando aplicável.
          </li>
        </ul>

        <h2 className="text-xl font-bold">7. Segurança e Confidencialidade</h2>
        <p>
          Durante todo o processo de exclusão, a Pix on Chain assegura a
          confidencialidade das informações e adota medidas de segurança para
          proteger os dados de acessos não autorizados ou usos indevidos.
        </p>

        <h2 className="text-xl font-bold">8. Contato</h2>
        <p>
          Para dúvidas ou mais informações sobre a política de exclusão de
          dados, entre em contato conosco:
        </p>
        <p>
          E-mail:{" "}
          <a
            href="mailto:compliance@pixonchain.com"
            className="text-blue-500 underline"
          >
            compliance@pixonchain.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserDataDeletionPolicy;
