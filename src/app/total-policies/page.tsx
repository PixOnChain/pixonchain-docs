import { PRIVACY_AND_POLICY } from "@/app/data/constants";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@/app/style/scrollbar.css";
import Link from "next/link";

const TotalPolicy = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div
          className="flex flex-col md:flex-row px-4 sm:px-6 md:px-16 lg:px-36 gap-[90px] mt-20 max-w-[1920px] mx-auto w-full"
          id="policy"
        >
          <div className="flex flex-col w-full">
            <div className="sm:flex justify-between gap-3 w-full">
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] sm:hidden flex">
                <Link href="/">
                  <u>Página Inicial</u>
                </Link>
              </h1>
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] sm:hidden flex">
                <a href={PRIVACY_AND_POLICY.texts.backToPolicy.href}>
                  <u>{PRIVACY_AND_POLICY.texts.backToPolicy.label.pt}</u>
                </a>
              </h1>
              <h1 className="pb-[52px] font-medium text-[38px] leading-[46px]">
                {PRIVACY_AND_POLICY.texts.policy.pt}
              </h1>
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] hidden sm:flex">
                <Link href="/">
                  <u>Página Inicial</u>
                </Link>
              </h1>
              <h1 className="pb-[52px] font-medium text-[24px] leading-[46px] hidden sm:flex">
                <a href={PRIVACY_AND_POLICY.texts.backToPolicy.href}>
                  <u>{PRIVACY_AND_POLICY.texts.backToPolicy.label.pt}</u>
                </a>
              </h1>
            </div>
            <div className="bg-[#F5F5F5] h-auto rounded-lg mb-24 w-full pdf-viewer-container max-h-[1005px] p-4">
              <div className="pb-20">
                <h1 className="pb-4 text-2xl font-medium">
                  {" "}
                  Política Antissuborno e Anticorrupção
                </h1>
                <div className="w-full text-justify space-y-4">
                  <p className="text-sm text-gray-400">
                    Atualizado em 13 de março de 2024
                  </p>
                  <p>
                    O Pix on Chain é um produto desenvolvido pela PIX ON CHAIN -
                    INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS LTDA,
                    inscrita no CNPJ sob o nº 58.850.762/0001-67, com sede na
                    Rua Vereador Nereu Liberato Nunes, nº 588, Centro,
                    Navegantes (SC), CEP: 88370-232, e-mail:{" "}
                    <a
                      href="mailto:contact@pixonchain.com"
                      className="text-blue-500 underline"
                    >
                      contact@pixonchain.com
                    </a>
                    .
                  </p>
                  <h2 className="text-xl font-bold">
                    1. Introdução e Objetivos
                  </h2>
                  <p>
                    A Pix on Chain reafirma seu compromisso com a ética,
                    transparência e integridade por meio desta política, que
                    estabelece as diretrizes para prevenir práticas de corrupção
                    e suborno em todas as suas operações. Esta política reflete
                    o compromisso da empresa em manter elevados padrões éticos e
                    conformidade com as legislações nacionais e internacionais.
                  </p>
                  <p>
                    A Pix on Chain adota uma abordagem de tolerância zero em
                    relação à corrupção, garantindo que todas as interações
                    sejam conduzidas de maneira honesta e responsável. A recusa
                    em participar de práticas ilícitas é incentivada e
                    valorizada, mesmo que isso implique em perda de
                    oportunidades de negócios.
                  </p>

                  <h2 className="text-xl font-bold">
                    2. Escopo e Aplicabilidade
                  </h2>
                  <p>
                    Esta política se aplica a todos os indivíduos e entidades
                    envolvidas direta ou indiretamente nas operações da Pix on
                    Chain, abrangendo:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Colaboradores permanentes e temporários.</li>
                    <li>Sócios, acionistas e diretores.</li>
                    <li>Estagiários e menores aprendizes.</li>
                    <li>
                      Fornecedores, parceiros e terceiros que atuem em nome da
                      empresa.
                    </li>
                  </ul>
                  <p>
                    A política se aplica tanto a operações realizadas no Brasil
                    quanto no exterior, independentemente da localização
                    geográfica.
                  </p>

                  <h2 className="text-xl font-bold">3. Definições</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Corrupção:</strong> O abuso de poder confiado para
                      obter benefícios indevidos, sejam financeiros ou não,
                      favorecendo interesses próprios ou de terceiros, em
                      detrimento das normas e valores éticos.
                    </li>
                    <li>
                      <strong>Suborno:</strong> A oferta, promessa, solicitação
                      ou aceitação de algo de valor como meio de influenciar
                      ações ou decisões, seja no setor público ou privado,
                      visando vantagens indevidas.
                    </li>
                    <li>
                      <strong>Pagamento de Facilitação:</strong> Pagamentos
                      realizados para acelerar processos ou garantir a execução
                      de atividades rotineiras, que são estritamente proibidos
                      na Pix on Chain.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">4. Diretrizes Gerais</h2>
                  <h3 className="text-lg font-semibold">
                    4.1. Proibição de Práticas Corruptas e Suborno
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      É proibido oferecer, prometer, solicitar ou aceitar
                      qualquer tipo de suborno.
                    </li>
                    <li>
                      Pagamentos de facilitação não são permitidos sob nenhuma
                      circunstância.
                    </li>
                    <li>
                      Presentes ou hospitalidades podem ser aceitos apenas
                      quando forem de valor simbólico, proporcionais e alinhados
                      às práticas comerciais legítimas.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    4.2. Relação com Agentes Públicos
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      É vedada qualquer tentativa de influenciar decisões de
                      agentes públicos por meio de vantagens indevidas.
                    </li>
                    <li>
                      Todas as interações com agentes públicos devem ser
                      transparentes e documentadas.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    4.3. Seleção de Parceiros e Fornecedores
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Todos os parceiros e fornecedores devem ser selecionados
                      com base em critérios claros, éticos e objetivos.
                    </li>
                    <li>
                      Contratos devem conter cláusulas anticorrupção,
                      assegurando que terceiros também cumpram esta política.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    5. Procedimentos de Prevenção
                  </h2>
                  <h3 className="text-lg font-semibold">
                    5.1. Treinamento e Capacitação
                  </h3>
                  <p>
                    Todos os colaboradores receberão treinamento anual
                    obrigatório sobre práticas anticorrupção, abordando cenários
                    reais e condutas proibidas.
                  </p>

                  <h3 className="text-lg font-semibold">
                    5.2. Canal de Denúncias
                  </h3>
                  <p>
                    A Pix on Chain oferece um canal de denúncias seguro e
                    confidencial para reportar possíveis violações desta
                    política. Denúncias podem ser feitas anonimamente, e todos
                    os casos serão investigados com imparcialidade e agilidade.
                  </p>

                  <h2 className="text-xl font-bold">6. Condutas Específicas</h2>
                  <h3 className="text-lg font-semibold">
                    6.1. Gerenciamento de Presentes e Hospitalidades
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>De valor simbólico ou promocional.</li>
                    <li>
                      Não influenciar decisões ou criar conflitos de interesse.
                    </li>
                    <li>Alinhados às práticas comerciais usuais.</li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    7. Consequências do Descumprimento
                  </h2>
                  <p>
                    Qualquer violação desta política será tratada com seriedade
                    e poderá resultar em advertências, suspensão ou desligamento
                    de colaboradores, além de possíveis sanções legais.
                  </p>

                  <h2 className="text-xl font-bold">
                    8. Legislação e Conformidade
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>Lei nº 12.846/2013 (Lei Anticorrupção Brasileira).</li>
                    <li>
                      Decreto nº 8.420/2015 (Regulamentação da Lei
                      Anticorrupção).
                    </li>
                    <li>Foreign Corrupt Practices Act (FCPA).</li>
                    <li>UK Bribery Act.</li>
                  </ul>
                </div>
              </div>

              <div className="pb-20">
                <h1 className="pb-4 text-2xl font-medium">Política de KYC</h1>
                <div className="w-full text-justify space-y-4">
                  <h2 className="text-xl font-bold">1. Introdução</h2>
                  <p>
                    O Pix on Chain é um produto desenvolvido pela PIX ON CHAIN -
                    INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS LTDA,
                    inscrita no CNPJ sob o nº 58.850.762/0001-67, com sede na
                    Rua Vereador Nereu Liberato Nunes, nº 588, Centro,
                    Navegantes (SC), CEP: 88370-232, e-mail:{" "}
                    <a
                      href="mailto:contact@pixonchain.com"
                      className="text-blue-500 underline"
                    >
                      contact@pixonchain.com
                    </a>
                    .
                  </p>
                  <p>
                    No Pix on Chain, entendemos que a implementação de uma
                    Política de KYC (Know Your Customer) robusta é essencial
                    para garantir a segurança, a conformidade regulatória e a
                    confiança de nossos clientes e parceiros. Esta política
                    descreve os procedimentos e diretrizes para verificação de
                    identidade, prevenção à lavagem de dinheiro (AML) e combate
                    ao financiamento do terrorismo (CFT).
                  </p>

                  <h2 className="text-xl font-bold">2. Objetivos</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Garantir Conformidade Regulatória:</strong>{" "}
                      Atender às exigências legais brasileiras, como a Lei nº
                      9.613/1998 (Lei de Lavagem de Dinheiro), e normas
                      internacionais aplicáveis.
                    </li>
                    <li>
                      <strong>Prevenir Crimes Financeiros:</strong> Mitigar
                      riscos associados a atividades ilícitas, como lavagem de
                      dinheiro e financiamento do terrorismo.
                    </li>
                    <li>
                      <strong>Proteger os Usuários:</strong> Assegurar que os
                      dados dos clientes sejam tratados com confidencialidade e
                      em conformidade com a LGPD (Lei Geral de Proteção de
                      Dados).
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">3. Escopo</h2>
                  <p>
                    Esta política aplica-se a todos os clientes, colaboradores,
                    parceiros e terceiros envolvidos nas operações do Pix on
                    Chain, incluindo:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Criação de contas de clientes.</li>
                    <li>Realização de transações financeiras na plataforma.</li>
                    <li>Processos internos de validação e auditoria.</li>
                  </ul>

                  <h2 className="text-xl font-bold">4. Procedimentos de KYC</h2>
                  <h3 className="text-lg font-semibold">
                    4.1. Cadastro de Clientes
                  </h3>
                  <p>
                    - Todos os clientes devem fornecer informações básicas,
                    incluindo nome completo, CPF/CNPJ, endereço, e-mail e número
                    de telefone.
                  </p>
                  <p>
                    - O processo de KYC será realizado através da integração com
                    a plataforma da Naat.Tech, garantindo a validação dos dados
                    em bases confiáveis e seguras.
                  </p>

                  <h3 className="text-lg font-semibold">
                    4.2. Verificação de Identidade
                  </h3>
                  <p>
                    - É obrigatório o envio de documentos de identificação
                    válidos (RG, CNH ou passaporte) e, quando aplicável,
                    comprovante de endereço.
                  </p>
                  <p>
                    - A verificação biométrica será utilizada como uma camada
                    adicional de segurança.
                  </p>

                  <h3 className="text-lg font-semibold">
                    4.3. Classificação de Risco
                  </h3>
                  <p>
                    - Clientes serão classificados em níveis de risco (baixo,
                    médio e alto) com base em suas atividades e histórico.
                  </p>
                  <p>
                    - Transações acima de valores específicos estarão sujeitas a
                    uma análise manual detalhada.
                  </p>

                  <h3 className="text-lg font-semibold">
                    4.4. Monitoramento Contínuo
                  </h3>
                  <p>
                    - Todas as transações realizadas na plataforma serão
                    monitoradas para identificar padrões suspeitos.
                  </p>
                  <p>
                    - Alertas automáticos serão gerados em caso de atividades
                    que indiquem possíveis riscos.
                  </p>

                  <h2 className="text-xl font-bold">5. Proteção de Dados</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Dados coletados serão armazenados de forma segura,
                      utilizando criptografia e controle de acesso rigoroso.
                    </li>
                    <li>
                      Apenas pessoal autorizado terá acesso às informações
                      sensíveis, respeitando os princípios da LGPD.
                    </li>
                    <li>
                      Todos os registros serão mantidos por no mínimo 5 anos,
                      conforme exigência regulatória.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    6. Conformidade e Governança
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Um Comitê de Conformidade será responsável por
                      supervisionar a implementação desta política.
                    </li>
                    <li>
                      Auditorias internas e externas serão realizadas
                      periodicamente para garantir aderência às normas.
                    </li>
                    <li>
                      Incidentes relacionados ao KYC serão reportados às
                      autoridades competentes conforme previsto em legislação.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    7. Revisão e Atualização
                  </h2>
                  <p>
                    Esta política será revisada anualmente ou sempre que houver
                    alterações significativas em regulamentações ou tecnologias.
                  </p>

                  <h2 className="text-xl font-bold">8. Contato</h2>
                  <p>
                    Em caso de dúvidas ou para mais informações sobre a Política
                    de KYC, entre em contato com nossa equipe de conformidade
                    pelo e-mail:{" "}
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

              <div className="pb-20">
                <h1 className="pb-4 text-2xl font-medium">Política de KYT</h1>
                <div className="w-full text-justify space-y-4">
                  <h2 className="text-xl font-bold">1. Introdução</h2>
                  <p>
                    O Pix on Chain é um produto desenvolvido pela PIX ON CHAIN -
                    INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS LTDA,
                    inscrita no CNPJ sob o nº 58.850.762/0001-67, com sede na
                    Rua Vereador Nereu Liberato Nunes, nº 588, Centro,
                    Navegantes (SC), CEP: 88370-232, e-mail:{" "}
                    <a
                      href="mailto:contact@pixonchain.com"
                      className="text-blue-500 underline"
                    >
                      contact@pixonchain.com
                    </a>
                    .
                  </p>
                  <p>
                    Compreendemos que uma Política de KYT robusta é essencial
                    para garantir a segurança das transações, a conformidade
                    regulatória e a prevenção de atividades ilícitas. Esta
                    política descreve os procedimentos e diretrizes para
                    monitoramento de transações, prevenção à lavagem de dinheiro
                    (AML) e combate ao financiamento do terrorismo (CFT),
                    utilizando tecnologias de ponta como blockchain privada,
                    ferramentas avançadas da Hyperledger Besu e soluções de HSM.
                  </p>

                  <h2 className="text-xl font-bold">2. Objetivos</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Garantir Conformidade Regulatória:</strong>{" "}
                      Atender às exigências legais brasileiras, como a Lei nº
                      9.613/1998 (Lei de Lavagem de Dinheiro), e normas
                      internacionais aplicáveis.
                    </li>
                    <li>
                      <strong>Prevenir Crimes Financeiros:</strong> Identificar
                      e mitigar riscos associados a atividades ilícitas.
                    </li>
                    <li>
                      <strong>Estabelecer Padrões de Transações:</strong>{" "}
                      Implementar monitoramento baseado em inteligência
                      artificial para identificação de anomalias.
                    </li>
                    <li>
                      <strong>Futuro como Custodiante:</strong> Posicionar a
                      plataforma para atuar como agente custodiante de
                      criptoativos no Brasil, garantindo segurança por meio de
                      integração com HSM da Dinamo Networks.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">3. Escopo</h2>
                  <p>
                    Esta política aplica-se a todos os clientes, colaboradores,
                    parceiros e terceiros envolvidos nas operações do Pix on
                    Chain, abrangendo:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Todas as transações financeiras realizadas na plataforma.
                    </li>
                    <li>Processos internos de validação e auditoria.</li>
                    <li>
                      Integração com tecnologias de blockchain, HSM e
                      ferramentas de monitoramento.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    4. Monitoramento de Transações
                  </h2>
                  <h3 className="text-lg font-semibold">
                    4.1. Blockchain Privada
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Todas as transações na plataforma são registradas em uma
                      blockchain privada, onde os dados são hasheados,
                      garantindo imutabilidade e segurança.
                    </li>
                    <li>
                      Utilizamos ferramentas da Hyperledger Besu, como:
                      <ul className="list-disc list-inside ml-6">
                        <li>
                          <strong>Orion:</strong> Para criptografia de dados
                          confidenciais e manutenção de privacidade.
                        </li>
                        <li>
                          <strong>EthSigner:</strong> Para autenticação e
                          assinaturas seguras de transações.
                        </li>
                        <li>
                          <strong>Besu Analytics:</strong> Para análise de dados
                          e visualização de padrões transacionais.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    4.2. Classificação e Padrões
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Transações são classificadas em níveis de risco (baixo,
                      médio e alto) com base em padrões históricos e
                      comportamento.
                    </li>
                    <li>
                      Transações acima de valores pré-definidos passam por
                      análise manual e verificação cruzada em bases confiáveis.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    4.3. Integração com Inteligência Artificial
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Sistemas de inteligência artificial identificam anomalias
                      em tempo real, cruzando dados de transações com padrões
                      estabelecidos.
                    </li>
                    <li>
                      Alertas automáticos são gerados para atividades suspeitas,
                      permitindo resposta imediata.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">5. Proteção de Dados</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      Todos os dados coletados são armazenados com criptografia
                      e monitoramento constante de acesso.
                    </li>
                    <li>
                      Apenas pessoal autorizado tem acesso a dados sensíveis,
                      respeitando a LGPD (Lei Geral de Proteção de Dados).
                    </li>
                    <li>
                      Registros de transações são mantidos por no mínimo 5 anos,
                      conforme legislação aplicável.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    6. Conformidade e Governança
                  </h2>
                  <ul className="list-disc list-inside">
                    <li>
                      O Comitê de Conformidade supervisiona a implementação e a
                      eficácia desta política.
                    </li>
                    <li>
                      Auditorias internas e externas são realizadas
                      periodicamente.
                    </li>
                    <li>
                      Incidentes de KYT são reportados às autoridades
                      competentes, conforme legislação vigente.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    7. Revisão e Atualização
                  </h2>
                  <p>
                    Esta política será revisada anualmente ou sempre que houver
                    mudanças relevantes em regulamentações ou tecnologias.
                  </p>
                </div>
              </div>

              <div className="pb-20">
                <h1 className="pb-4 text-2xl font-medium">
                  Política de Privacidade
                </h1>
                <div className="w-full text-justify space-y-4">
                  <h2 className="text-xl font-bold">1. Introdução</h2>
                  <p>
                    A PIX ON CHAIN - INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE
                    PAGAMENTOS LTDA, inscrita no CNPJ sob o nº
                    58.850.762/0001-67, com sede na Rua Vereador Nereu Liberato
                    Nunes, nº 588, Centro, Navegantes (SC), CEP: 88370-232, está
                    comprometida com a proteção de dados pessoais e informações
                    confidenciais de seus usuários. Esta Política de Privacidade
                    descreve como coletamos, utilizamos, armazenamos e
                    protegemos os dados fornecidos pelos nossos clientes e
                    parceiros.
                  </p>

                  <h2 className="text-xl font-bold">2. Coleta de Dados</h2>
                  <p>
                    Coletamos os seguintes dados pessoais para garantir a
                    prestação dos nossos serviços:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Nome completo, CPF/CNPJ, endereço, telefone e e-mail;
                    </li>
                    <li>Dados bancários e informações de pagamento;</li>
                    <li>
                      Dados de transações realizadas na plataforma, como valores
                      e destinatários;
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
                      Melhorar a experiência dos usuários na plataforma e
                      personalizar serviços oferecidos;
                    </li>
                    <li>Atendimento ao cliente e suporte técnico;</li>
                    <li>
                      Cumprimento de obrigações legais e regulatórias, como a
                      Lei Geral de Proteção de Dados (LGPD).
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    4. Compartilhamento de Dados
                  </h2>
                  <p>
                    A Pix on Chain não vende ou compartilha dados pessoais de
                    seus clientes, exceto nos seguintes casos:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Com autoridades competentes, conforme exigido por lei;
                    </li>
                    <li>
                      Com parceiros e fornecedores de serviços contratados,
                      estritamente para fins operacionais, como processadores de
                      pagamento;
                    </li>
                    <li>
                      Em casos de fusões, aquisições ou reestruturações
                      societárias, com devida notificação aos usuários.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    5. Segurança e Armazenamento
                  </h2>
                  <p>
                    Adotamos medidas rigorosas para proteger os dados pessoais
                    contra acessos não autorizados, alterações, divulgações ou
                    destruições, incluindo:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Criptografia de dados em repouso e em trânsito;</li>
                    <li>
                      Controle de acesso com autenticação de dois fatores (2FA);
                    </li>
                    <li>
                      Monitoramento contínuo e auditorias periódicas para
                      identificar e corrigir vulnerabilidades.
                    </li>
                  </ul>
                  <p>
                    Os dados coletados são armazenados por um período mínimo de
                    5 anos, conforme regulamentações aplicáveis, e podem ser
                    excluídos mediante solicitação do usuário, exceto quando
                    necessário para cumprimento legal.
                  </p>

                  <h2 className="text-xl font-bold">6. Direitos do Usuário</h2>
                  <p>
                    Os usuários têm os seguintes direitos em relação aos seus
                    dados pessoais:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Acesso, correção e exclusão de seus dados pessoais;</li>
                    <li>
                      Revogação do consentimento para tratamento de dados,
                      quando aplicável;
                    </li>
                    <li>
                      Solicitação de informações sobre o uso e compartilhamento
                      de seus dados.
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

                  <h2 className="text-xl font-bold">
                    7. Alterações nesta Política
                  </h2>
                  <p>
                    Esta Política de Privacidade pode ser atualizada
                    periodicamente para refletir mudanças nas práticas de
                    proteção de dados ou nas regulamentações aplicáveis.
                    Recomendamos que os usuários revisem esta página
                    regularmente para se manterem informados sobre as
                    atualizações.
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

              <div className="pb-20">
                <h1 className="pb-4 text-2xl font-medium">
                  Termos de Serviço da Pix on Chain
                </h1>
                <div className="w-full text-justify space-y-4">
                  <p className="text-sm text-gray-500">
                    Última atualização: 15 de Janeiro de 2025
                  </p>
                  <p>
                    O Pix on Chain é um produto desenvolvido pela PIX ON CHAIN -
                    INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE PAGAMENTOS LTDA,
                    inscrita no CNPJ sob o nº 58.850.762/0001-67, com sede na
                    Rua Vereador Nereu Liberato Nunes, nº 588, Centro,
                    Navegantes (SC), CEP: 88370-232, e-mail:{" "}
                    <a
                      href="mailto:contact@pixonchain.com"
                      className="text-blue-500 underline"
                    >
                      contact@pixonchain.com
                    </a>
                    .
                  </p>
                  <p>
                    Estes Termos de Serviço descrevem as condições para
                    utilização da plataforma Pix on Chain, incluindo APIs e
                    outras ferramentas digitais voltadas para operações
                    financeiras e integração de pagamentos. Ao acessar ou
                    utilizar nossos serviços, você concorda com as condições
                    aqui descritas. Caso não concorde, interrompa imediatamente
                    o uso da plataforma.
                  </p>
                  <h2 className="text-xl font-bold mt-6">1. Definições</h2>
                  <p>
                    <strong>Plataforma:</strong> O sistema digital
                    disponibilizado pela Pix on Chain, incluindo APIs,
                    ferramentas de integração e infraestrutura tecnológica.
                  </p>
                  <p>
                    <strong>Cliente:</strong> Pessoa física ou jurídica que
                    utiliza os serviços da Pix on Chain.
                  </p>
                  <p>
                    <strong>API:</strong> Interface de programação fornecida
                    para integração com sistemas de terceiros.
                  </p>
                  <p>
                    <strong>Transações:</strong> Movimentações financeiras
                    realizadas por meio da plataforma, como pagamentos,
                    transferências e conversões.
                  </p>

                  <h2 className="text-xl font-bold mt-6">
                    2. Objeto do Serviço
                  </h2>
                  <p>A Pix on Chain disponibiliza soluções digitais para:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Processamento de pagamentos e transferências financeiras
                      via APIs;
                    </li>
                    <li>Gerenciamento de transações em tempo real;</li>
                    <li>
                      Integração simplificada com sistemas próprios do cliente;
                    </li>
                    <li>Suporte a soluções baseadas em blockchain.</li>
                  </ul>
                  <p>
                    Todos os serviços são fornecidos com foco em segurança,
                    eficiência e facilidade de uso.
                  </p>

                  <h2 className="text-xl font-bold mt-6">
                    3. Obrigações da Pix on Chain
                  </h2>
                  <p>A Pix on Chain compromete-se a:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Disponibilizar APIs e documentação técnica para
                      integração;
                    </li>
                    <li>
                      Garantir a disponibilidade da plataforma, salvo
                      interrupções programadas ou por motivos de força maior;
                    </li>
                    <li>
                      Proteger a confidencialidade dos dados dos clientes e seus
                      usuários finais;
                    </li>
                    <li>
                      Prestar suporte técnico em caso de problemas relacionados
                      aos serviços.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mt-6">
                    4. Obrigações do Cliente
                  </h2>
                  <p>O Cliente é responsável por:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Garantir que as integrações realizadas com as APIs estejam
                      em conformidade com normas vigentes;
                    </li>
                    <li>
                      Manter as credenciais de acesso à API protegidas contra
                      acessos não autorizados;
                    </li>
                    <li>
                      Assegurar que todas as transações realizadas estejam de
                      acordo com as regulamentações aplicáveis;
                    </li>
                    <li>
                      Fornecer informações precisas e atualizadas para uso da
                      plataforma.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mt-6">
                    5. Planos, Tarifas e Pagamentos
                  </h2>
                  <p>
                    O uso dos serviços está sujeito às tarifas descritas no
                    painel administrativo ou em comunicações específicas
                    enviadas ao Cliente;
                  </p>
                  <p>
                    A cobrança poderá ser realizada com base em transações,
                    assinaturas mensais ou outros modelos previamente
                    informados;
                  </p>
                  <p>
                    As faturas serão emitidas e disponibilizadas
                    eletronicamente.
                  </p>

                  <h2 className="text-xl font-bold mt-6">
                    6. Propriedade Intelectual
                  </h2>
                  <p>
                    Todo o conteúdo da plataforma, incluindo APIs, software e
                    documentação, é propriedade exclusiva da Pix on Chain. O
                    Cliente recebe uma licença limitada, não exclusiva e
                    revogável para utilizar os serviços enquanto estiver em
                    conformidade com os Termos.
                  </p>

                  <h2 className="text-xl font-bold mt-6">
                    7. Limitação de Responsabilidade
                  </h2>
                  <p>A Pix on Chain não será responsável por:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Perdas ou danos causados pelo uso indevido da plataforma;
                    </li>
                    <li>
                      Falhas originadas de terceiros ou fora do controle da Pix
                      on Chain.
                    </li>
                  </ul>
                  <p>
                    A responsabilidade máxima da Pix on Chain, em qualquer
                    hipótese, está limitada ao valor pago pelo Cliente nos
                    últimos 3 meses.
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

              <div className="pb-20">
                <h1 className="pb-4 text-2xl font-medium">
                  Política de Exclusão de Dados do Usuário
                </h1>
                <div className="w-full text-justify space-y-4">
                  <h2 className="text-xl font-bold">1. Introdução</h2>
                  <p>
                    A PIX ON CHAIN - INTERMEDIACOES EM BLOCKCHAIN E SERVICOS DE
                    PAGAMENTOS LTDA, inscrita no CNPJ sob o nº
                    58.850.762/0001-67, com sede na Rua Vereador Nereu Liberato
                    Nunes, nº 588, Centro, Navegantes (SC), CEP: 88370-232, está
                    comprometida em garantir aos seus usuários o direito à
                    exclusão de seus dados pessoais, conforme estabelecido pela
                    Lei Geral de Proteção de Dados (LGPD) e outras
                    regulamentações aplicáveis.
                  </p>

                  <h2 className="text-xl font-bold">
                    2. Direito à Exclusão de Dados
                  </h2>
                  <p>
                    Os usuários têm o direito de solicitar a exclusão de seus
                    dados pessoais armazenados pela Pix on Chain, desde que:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Os dados não sejam mais necessários para os fins pelos
                      quais foram coletados ou tratados.
                    </li>
                    <li>
                      O consentimento para o tratamento de dados tenha sido
                      revogado e não exista outra base legal para o
                      processamento.
                    </li>
                    <li>
                      A exclusão não conflite com obrigações legais ou
                      regulatórias, como requisitos de retenção de registros
                      financeiros.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    3. Procedimento para Solicitar a Exclusão
                  </h2>
                  <p>
                    Para solicitar a exclusão de dados pessoais, o usuário deve
                    enviar um e-mail para o endereço abaixo, contendo as
                    seguintes informações:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Nome completo do solicitante;</li>
                    <li>CPF ou CNPJ associado à conta;</li>
                    <li>E-mail de registro na plataforma;</li>
                    <li>
                      Descrição clara dos dados que deseja excluir (opcional, se
                      não quiser excluir todos os dados).
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

                  <h2 className="text-xl font-bold">
                    4. Prazo para Processamento
                  </h2>
                  <p>
                    Após o recebimento da solicitação, a Pix on Chain processará
                    o pedido dentro de um prazo de até **15 dias úteis**,
                    conforme estipulado pela LGPD. Durante esse período, o
                    usuário será notificado sobre o progresso da solicitação e
                    quaisquer impedimentos legais ou técnicos.
                  </p>

                  <h2 className="text-xl font-bold">
                    5. Dados Não Elegíveis para Exclusão
                  </h2>
                  <p>
                    Alguns dados podem não ser elegíveis para exclusão imediata
                    devido a obrigações legais e regulatórias. Exemplos incluem:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Registros financeiros relacionados a transações realizadas
                      na plataforma, que devem ser mantidos por pelo menos 5
                      anos.
                    </li>
                    <li>
                      Informações necessárias para cumprir com auditorias,
                      investigações ou exigências legais.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">6. Garantia de Exclusão</h2>
                  <p>
                    Após a conclusão do processo de exclusão, a Pix on Chain
                    enviará uma confirmação ao usuário informando que os dados
                    foram apagados de seus sistemas. Esta exclusão incluirá:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Dados pessoais armazenados em bancos de dados ativos da
                      plataforma;
                    </li>
                    <li>Backups, onde tecnicamente viável;</li>
                    <li>
                      Revogação de acessos e remoção de informações em sistemas
                      de terceiros, quando aplicável.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold">
                    7. Segurança e Confidencialidade
                  </h2>
                  <p>
                    Durante todo o processo de exclusão, a Pix on Chain assegura
                    a confidencialidade das informações e adota medidas de
                    segurança para proteger os dados de acessos não autorizados
                    ou usos indevidos.
                  </p>

                  <h2 className="text-xl font-bold">8. Contato</h2>
                  <p>
                    Para dúvidas ou mais informações sobre a política de
                    exclusão de dados, entre em contato conosco:
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalPolicy;
