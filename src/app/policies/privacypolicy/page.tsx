"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Política de Privacidade
      </h1>
      <div className="w-full max-w-4xl text-justify space-y-4">
        <h2 className="text-xl font-bold">1. Introdução</h2>
        <p>
          A PIX ON CHAIN - INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS
          LTDA, inscrita no CNPJ sob o nº 58.850.762/0001-67, com sede na Rua
          Vereador Nereu Liberato Nunes, nº 588, Centro, Navegantes (SC), CEP:
          88370-232, está comprometida com a proteção de dados pessoais e
          informações confidenciais de seus usuários. Esta Política de
          Privacidade descreve como coletamos, utilizamos, armazenamos e
          protegemos os dados fornecidos pelos nossos clientes e parceiros.
        </p>

        <h2 className="text-xl font-bold">2. Coleta de Dados</h2>
        <p>
          Coletamos os seguintes dados pessoais para garantir a prestação dos
          nossos serviços:
        </p>
        <ul className="list-disc list-inside">
          <li>Nome completo, CPF/CNPJ, endereço, telefone e e-mail;</li>
          <li>Dados bancários e informações de pagamento;</li>
          <li>
            Dados de transações realizadas na plataforma, como valores e
            destinatários;
          </li>
          <li>
            Informações de navegação, como endereço IP, localização e
            dispositivos utilizados.
          </li>
        </ul>

        <h2 className="text-xl font-bold">3. Uso de Dados</h2>
        <p>Os dados coletados são utilizados para:</p>
        <ul className="list-disc list-inside">
          <li>Processamento de transações financeiras;</li>
          <li>Identificação e autenticação de usuários;</li>
          <li>
            Melhorar a experiência dos usuários na plataforma e personalizar
            serviços oferecidos;
          </li>
          <li>Atendimento ao cliente e suporte técnico;</li>
          <li>
            Cumprimento de obrigações legais e regulatórias, como a Lei Geral de
            Proteção de Dados (LGPD).
          </li>
        </ul>

        <h2 className="text-xl font-bold">4. Compartilhamento de Dados</h2>
        <p>
          A Pix on Chain não vende ou compartilha dados pessoais de seus
          clientes, exceto nos seguintes casos:
        </p>
        <ul className="list-disc list-inside">
          <li>Com autoridades competentes, conforme exigido por lei;</li>
          <li>
            Com parceiros e fornecedores de serviços contratados, estritamente
            para fins operacionais, como processadores de pagamento;
          </li>
          <li>
            Em casos de fusões, aquisições ou reestruturações societárias, com
            devida notificação aos usuários.
          </li>
        </ul>

        <h2 className="text-xl font-bold">5. Segurança e Armazenamento</h2>
        <p>
          Adotamos medidas rigorosas para proteger os dados pessoais contra
          acessos não autorizados, alterações, divulgações ou destruições,
          incluindo:
        </p>
        <ul className="list-disc list-inside">
          <li>Criptografia de dados em repouso e em trânsito;</li>
          <li>Controle de acesso com autenticação de dois fatores (2FA);</li>
          <li>
            Monitoramento contínuo e auditorias periódicas para identificar e
            corrigir vulnerabilidades.
          </li>
        </ul>
        <p>
          Os dados coletados são armazenados por um período mínimo de 5 anos,
          conforme regulamentações aplicáveis, e podem ser excluídos mediante
          solicitação do usuário, exceto quando necessário para cumprimento
          legal.
        </p>

        <h2 className="text-xl font-bold">6. Direitos do Usuário</h2>
        <p>
          Os usuários têm os seguintes direitos em relação aos seus dados
          pessoais:
        </p>
        <ul className="list-disc list-inside">
          <li>Acesso, correção e exclusão de seus dados pessoais;</li>
          <li>
            Revogação do consentimento para tratamento de dados, quando
            aplicável;
          </li>
          <li>
            Solicitação de informações sobre o uso e compartilhamento de seus
            dados.
          </li>
        </ul>
        <p>
          Para exercer esses direitos, entre em contato pelo e-mail:{" "}
          <a
            href="mailto:contact@pixonchain.com"
            className="text-blue-500 underline"
          >
            contact@pixonchain.com
          </a>
          .
        </p>

        <h2 className="text-xl font-bold">7. Alterações nesta Política</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente para
          refletir mudanças nas práticas de proteção de dados ou nas
          regulamentações aplicáveis. Recomendamos que os usuários revisem esta
          página regularmente para se manterem informados sobre as atualizações.
        </p>

        <h2 className="text-xl font-bold">8. Contato</h2>
        <p>
          Em caso de dúvidas ou preocupações sobre esta Política de
          Privacidade, entre em contato conosco:
        </p>
        <p>
          E-mail:{" "}
          <a
            href="mailto:contact@pixonchain.com"
            className="text-blue-500 underline"
          >
            contact@pixonchain.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
