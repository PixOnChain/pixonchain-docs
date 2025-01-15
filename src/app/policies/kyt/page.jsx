"use client"

import React from "react"

const KYTPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Política de KYT</h1>
      <div className="w-full max-w-4xl text-justify space-y-4">
        <h2 className="text-xl font-bold">1. Introdução</h2>
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
          Compreendemos que uma Política de KYT robusta é essencial para
          garantir a segurança das transações, a conformidade regulatória e a
          prevenção de atividades ilícitas. Esta política descreve os
          procedimentos e diretrizes para monitoramento de transações, prevenção
          à lavagem de dinheiro (AML) e combate ao financiamento do terrorismo
          (CFT), utilizando tecnologias de ponta como blockchain privada,
          ferramentas avançadas da Hyperledger Besu e soluções de HSM.
        </p>

        <h2 className="text-xl font-bold">2. Objetivos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Garantir Conformidade Regulatória:</strong> Atender às
            exigências legais brasileiras, como a Lei nº 9.613/1998 (Lei de
            Lavagem de Dinheiro), e normas internacionais aplicáveis.
          </li>
          <li>
            <strong>Prevenir Crimes Financeiros:</strong> Identificar e mitigar
            riscos associados a atividades ilícitas.
          </li>
          <li>
            <strong>Estabelecer Padrões de Transações:</strong> Implementar
            monitoramento baseado em inteligência artificial para identificação
            de anomalias.
          </li>
          <li>
            <strong>Futuro como Custodiante:</strong> Posicionar a plataforma
            para atuar como agente custodiante de criptoativos no Brasil,
            garantindo segurança por meio de integração com HSM da Dinamo
            Networks.
          </li>
        </ul>

        <h2 className="text-xl font-bold">3. Escopo</h2>
        <p>
          Esta política aplica-se a todos os clientes, colaboradores, parceiros
          e terceiros envolvidos nas operações do Pix on Chain, abrangendo:
        </p>
        <ul className="list-disc list-inside">
          <li>Todas as transações financeiras realizadas na plataforma.</li>
          <li>Processos internos de validação e auditoria.</li>
          <li>
            Integração com tecnologias de blockchain, HSM e ferramentas de
            monitoramento.
          </li>
        </ul>

        <h2 className="text-xl font-bold">4. Monitoramento de Transações</h2>
        <h3 className="text-lg font-semibold">4.1. Blockchain Privada</h3>
        <ul className="list-disc list-inside">
          <li>
            Todas as transações na plataforma são registradas em uma blockchain
            privada, onde os dados são hasheados, garantindo imutabilidade e
            segurança.
          </li>
          <li>
            Utilizamos ferramentas da Hyperledger Besu, como:
            <ul className="list-disc list-inside ml-6">
              <li>
                <strong>Orion:</strong> Para criptografia de dados confidenciais
                e manutenção de privacidade.
              </li>
              <li>
                <strong>EthSigner:</strong> Para autenticação e assinaturas
                seguras de transações.
              </li>
              <li>
                <strong>Besu Analytics:</strong> Para análise de dados e
                visualização de padrões transacionais.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-semibold">4.2. Classificação e Padrões</h3>
        <ul className="list-disc list-inside">
          <li>
            Transações são classificadas em níveis de risco (baixo, médio e
            alto) com base em padrões históricos e comportamento.
          </li>
          <li>
            Transações acima de valores pré-definidos passam por análise manual
            e verificação cruzada em bases confiáveis.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">
          4.3. Integração com Inteligência Artificial
        </h3>
        <ul className="list-disc list-inside">
          <li>
            Sistemas de inteligência artificial identificam anomalias em tempo
            real, cruzando dados de transações com padrões estabelecidos.
          </li>
          <li>
            Alertas automáticos são gerados para atividades suspeitas,
            permitindo resposta imediata.
          </li>
        </ul>

        <h2 className="text-xl font-bold">5. Proteção de Dados</h2>
        <ul className="list-disc list-inside">
          <li>
            Todos os dados coletados são armazenados com criptografia e
            monitoramento constante de acesso.
          </li>
          <li>
            Apenas pessoal autorizado tem acesso a dados sensíveis, respeitando
            a LGPD (Lei Geral de Proteção de Dados).
          </li>
          <li>
            Registros de transações são mantidos por no mínimo 5 anos, conforme
            legislação aplicável.
          </li>
        </ul>

        <h2 className="text-xl font-bold">6. Conformidade e Governança</h2>
        <ul className="list-disc list-inside">
          <li>
            O Comitê de Conformidade supervisiona a implementação e a eficácia
            desta política.
          </li>
          <li>Auditorias internas e externas são realizadas periodicamente.</li>
          <li>
            Incidentes de KYT são reportados às autoridades competentes,
            conforme legislação vigente.
          </li>
        </ul>

        <h2 className="text-xl font-bold">7. Revisão e Atualização</h2>
        <p>
          Esta política será revisada anualmente ou sempre que houver mudanças
          relevantes em regulamentações ou tecnologias.
        </p>
      </div>
    </div>
  )
}

export default KYTPolicy
