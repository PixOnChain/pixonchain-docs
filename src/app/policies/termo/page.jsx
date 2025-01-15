"use client"

import React from "react"

const TermosDeServico = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Termos de Serviço da Pix on Chain
      </h1>
      <div className="w-full max-w-4xl text-white text-justify space-y-4">
        <p className="text-sm text-gray-500">
          Última atualização: 15 de Janeiro de 2025
        </p>
        <p>
          O Pix on Chain é um produto desenvolvido pela PIX ON CHAIN -
          INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS LTDA, inscrita
          no CNPJ sob o nº 58.850.762/0001-67, com sede na Rua Vereador Nereu
          Liberato Nunes, nº 588, Centro, Navegantes (SC), CEP: 88370-232,
          e-mail:{" "}
          <a
            href="mailto:contact@pixonchain.com"
            className="text-blue-500 underline"
          >
            contact@pixonchain.com
          </a>
          .
        </p>
        <p>
          Estes Termos de Serviço descrevem as condições para utilização da
          plataforma Pix on Chain, incluindo APIs e outras ferramentas digitais
          voltadas para operações financeiras e integração de pagamentos. Ao
          acessar ou utilizar nossos serviços, você concorda com as condições
          aqui descritas. Caso não concorde, interrompa imediatamente o uso da
          plataforma.
        </p>
        <h2 className="text-xl font-bold mt-6">1. Definições</h2>
        <p>
          <strong>Plataforma:</strong> O sistema digital disponibilizado pela
          Pix on Chain, incluindo APIs, ferramentas de integração e
          infraestrutura tecnológica.
        </p>
        <p>
          <strong>Cliente:</strong> Pessoa física ou jurídica que utiliza os
          serviços da Pix on Chain.
        </p>
        <p>
          <strong>API:</strong> Interface de programação fornecida para
          integração com sistemas de terceiros.
        </p>
        <p>
          <strong>Transações:</strong> Movimentações financeiras realizadas por
          meio da plataforma, como pagamentos, transferências e conversões.
        </p>

        <h2 className="text-xl font-bold mt-6">2. Objeto do Serviço</h2>
        <p>A Pix on Chain disponibiliza soluções digitais para:</p>
        <ul className="list-disc list-inside">
          <li>
            Processamento de pagamentos e transferências financeiras via APIs;
          </li>
          <li>Gerenciamento de transações em tempo real;</li>
          <li>Integração simplificada com sistemas próprios do cliente;</li>
          <li>Suporte a soluções baseadas em blockchain.</li>
        </ul>
        <p>
          Todos os serviços são fornecidos com foco em segurança, eficiência e
          facilidade de uso.
        </p>

        <h2 className="text-xl font-bold mt-6">
          3. Obrigações da Pix on Chain
        </h2>
        <p>A Pix on Chain compromete-se a:</p>
        <ul className="list-disc list-inside">
          <li>Disponibilizar APIs e documentação técnica para integração;</li>
          <li>
            Garantir a disponibilidade da plataforma, salvo interrupções
            programadas ou por motivos de força maior;
          </li>
          <li>
            Proteger a confidencialidade dos dados dos clientes e seus usuários
            finais;
          </li>
          <li>
            Prestar suporte técnico em caso de problemas relacionados aos
            serviços.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6">4. Obrigações do Cliente</h2>
        <p>O Cliente é responsável por:</p>
        <ul className="list-disc list-inside">
          <li>
            Garantir que as integrações realizadas com as APIs estejam em
            conformidade com normas vigentes;
          </li>
          <li>
            Manter as credenciais de acesso à API protegidas contra acessos não
            autorizados;
          </li>
          <li>
            Assegurar que todas as transações realizadas estejam de acordo com
            as regulamentações aplicáveis;
          </li>
          <li>
            Fornecer informações precisas e atualizadas para uso da plataforma.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-6">
          5. Planos, Tarifas e Pagamentos
        </h2>
        <p>
          O uso dos serviços está sujeito às tarifas descritas no painel
          administrativo ou em comunicações específicas enviadas ao Cliente;
        </p>
        <p>
          A cobrança poderá ser realizada com base em transações, assinaturas
          mensais ou outros modelos previamente informados;
        </p>
        <p>As faturas serão emitidas e disponibilizadas eletronicamente.</p>

        <h2 className="text-xl font-bold mt-6">6. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo da plataforma, incluindo APIs, software e
          documentação, é propriedade exclusiva da Pix on Chain. O Cliente
          recebe uma licença limitada, não exclusiva e revogável para utilizar
          os serviços enquanto estiver em conformidade com os Termos.
        </p>

        <h2 className="text-xl font-bold mt-6">
          7. Limitação de Responsabilidade
        </h2>
        <p>A Pix on Chain não será responsável por:</p>
        <ul className="list-disc list-inside">
          <li>Perdas ou danos causados pelo uso indevido da plataforma;</li>
          <li>
            Falhas originadas de terceiros ou fora do controle da Pix on Chain.
          </li>
        </ul>
        <p>
          A responsabilidade máxima da Pix on Chain, em qualquer hipótese, está
          limitada ao valor pago pelo Cliente nos últimos 3 meses.
        </p>

        <h2 className="text-xl font-bold mt-6">8. Contato</h2>
        <p>
          E-mail:{" "}
          <a
            href="mailto:contact@pixonchain.com"
            className="text-blue-500 underline"
          >
            contact@pixonchain.com
          </a>
        </p>
        <p>Telefone: (47) 3170-5121</p>
      </div>
    </div>
  )
}

export default TermosDeServico
