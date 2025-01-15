"use client";

import React from "react";

const KYCPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Política de KYC</h1>
      <div className="w-full max-w-4xl text-justify space-y-4">
        <h2 className="text-xl font-bold">1. Introdução</h2>
        <p>
          O Pix on Chain é uma representação de um produto da IORA PROCESSAMENTO
          DE DADOS LTDA, inscrita no CNPJ sob o nº 45.783.959/0001-89, com sede
          na Rua Vereador Nereu Liberato Nunes, nº 588, Sala 306, Andar 3,
          Centro, Navegantes (SC), CEP: 88370-232, e-mail:{" "}
          <a
            href="mailto:contact@ioralabs.com"
            className="text-blue-500 underline"
          >
            contact@ioralabs.com
          </a>
          .
        </p>
        <p>
          No Pix on Chain, entendemos que a implementação de uma Política de KYC
          (Know Your Customer) robusta é essencial para garantir a segurança, a
          conformidade regulatória e a confiança de nossos clientes e parceiros.
          Esta política descreve os procedimentos e diretrizes para verificação
          de identidade, prevenção à lavagem de dinheiro (AML) e combate ao
          financiamento do terrorismo (CFT).
        </p>

        <h2 className="text-xl font-bold">2. Objetivos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Garantir Conformidade Regulatória:</strong> Atender às
            exigências legais brasileiras, como a Lei nº 9.613/1998 (Lei de
            Lavagem de Dinheiro), e normas internacionais aplicáveis.
          </li>
          <li>
            <strong>Prevenir Crimes Financeiros:</strong> Mitigar riscos
            associados a atividades ilícitas, como lavagem de dinheiro e
            financiamento do terrorismo.
          </li>
          <li>
            <strong>Proteger os Usuários:</strong> Assegurar que os dados dos
            clientes sejam tratados com confidencialidade e em conformidade com
            a LGPD (Lei Geral de Proteção de Dados).
          </li>
        </ul>

        <h2 className="text-xl font-bold">3. Escopo</h2>
        <p>Esta política aplica-se a todos os clientes, colaboradores, parceiros e terceiros envolvidos nas operações do Pix on Chain, incluindo:</p>
        <ul className="list-disc list-inside">
          <li>Criação de contas de clientes.</li>
          <li>Realização de transações financeiras na plataforma.</li>
          <li>Processos internos de validação e auditoria.</li>
        </ul>

        <h2 className="text-xl font-bold">4. Procedimentos de KYC</h2>
        <h3 className="text-lg font-semibold">4.1. Cadastro de Clientes</h3>
        <p>
          - Todos os clientes devem fornecer informações básicas, incluindo nome
          completo, CPF/CNPJ, endereço, e-mail e número de telefone.
        </p>
        <p>
          - O processo de KYC será realizado através da integração com a
          plataforma da Naat.Tech, garantindo a validação dos dados em bases
          confiáveis e seguras.
        </p>

        <h3 className="text-lg font-semibold">4.2. Verificação de Identidade</h3>
        <p>
          - É obrigatório o envio de documentos de identificação válidos (RG,
          CNH ou passaporte) e, quando aplicável, comprovante de endereço.
        </p>
        <p>
          - A verificação biométrica será utilizada como uma camada adicional de
          segurança.
        </p>

        <h3 className="text-lg font-semibold">4.3. Classificação de Risco</h3>
        <p>
          - Clientes serão classificados em níveis de risco (baixo, médio e
          alto) com base em suas atividades e histórico.
        </p>
        <p>
          - Transações acima de valores específicos estarão sujeitas a uma
          análise manual detalhada.
        </p>

        <h3 className="text-lg font-semibold">4.4. Monitoramento Contínuo</h3>
        <p>
          - Todas as transações realizadas na plataforma serão monitoradas para
          identificar padrões suspeitos.
        </p>
        <p>
          - Alertas automáticos serão gerados em caso de atividades que
          indiquem possíveis riscos.
        </p>

        <h2 className="text-xl font-bold">5. Proteção de Dados</h2>
        <ul className="list-disc list-inside">
          <li>
            Dados coletados serão armazenados de forma segura, utilizando
            criptografia e controle de acesso rigoroso.
          </li>
          <li>
            Apenas pessoal autorizado terá acesso às informações sensíveis,
            respeitando os princípios da LGPD.
          </li>
          <li>
            Todos os registros serão mantidos por no mínimo 5 anos, conforme
            exigência regulatória.
          </li>
        </ul>

        <h2 className="text-xl font-bold">6. Conformidade e Governança</h2>
        <ul className="list-disc list-inside">
          <li>
            Um Comitê de Conformidade será responsável por supervisionar a
            implementação desta política.
          </li>
          <li>
            Auditorias internas e externas serão realizadas periodicamente para
            garantir aderência às normas.
          </li>
          <li>
            Incidentes relacionados ao KYC serão reportados às autoridades
            competentes conforme previsto em legislação.
          </li>
        </ul>

        <h2 className="text-xl font-bold">7. Revisão e Atualização</h2>
        <p>
          Esta política será revisada anualmente ou sempre que houver alterações
          significativas em regulamentações ou tecnologias.
        </p>

        <h2 className="text-xl font-bold">8. Contato</h2>
        <p>
          Em caso de dúvidas ou para mais informações sobre a Política de KYC,
          entre em contato com nossa equipe de conformidade pelo e-mail:{" "}
          <a
            href="mailto:compliance@pixonchain.com"
            className="text-blue-500 underline"
          >
            compliance@pixonchain.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default KYCPolicy;
