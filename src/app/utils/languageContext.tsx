"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string, params?: Record<string, string>): string => {
    let text = translationMap[key]?.[language] || key;

    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, paramValue);
      });
    }

    text = text.replace(/PixOnChain/g, 'Pixley');

    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation dictionary
const translationMap: Record<string, Record<Language, string>> = {
  // Navigation
  'home': {
    en: 'Home',
    pt: 'Início',
    es: 'Inicio',
  },
  'developers': {
    en: 'Developers',
    pt: 'Desenvolvedores',
    es: 'Desarrolladores',
  },
  'events': {
    en: 'Events',
    pt: 'Eventos',
    es: 'Eventos',
  },
  'contact': {
    en: 'Contact',
    pt: 'Contato',
    es: 'Contacto',
  },
  // Headers
  'api_documentation': {
    en: 'API Documentation',
    pt: 'Documentação da API',
    es: 'Documentación de la API',
  },
  'event_examples': {
    en: 'Event Examples',
    pt: 'Exemplos de Eventos',
    es: 'Ejemplos de Eventos',
  },
  'api_endpoints': {
    en: 'API Endpoints',
    pt: 'Endpoints da API',
    es: 'Endpoints de la API',
  },
  // Main content
  'language': {
    en: 'Language',
    pt: 'Idioma',
    es: 'Idioma',
  },
  'english': {
    en: 'English',
    pt: 'Inglês',
    es: 'Inglés',
  },
  'portuguese': {
    en: 'Portuguese',
    pt: 'Português',
    es: 'Portugués',
  },
  'spanish': {
    en: 'Spanish',
    pt: 'Espanhol',
    es: 'Español',
  },
  'loading': {
    en: 'Loading documentation...',
    pt: 'Carregando documentação...',
    es: 'Cargando documentación...',
  },
  'all_rights_reserved': {
    en: 'All rights reserved.',
    pt: 'Todos os direitos reservados.',
    es: 'Todos los derechos reservados.',
  },
  'important': {
    en: 'Important!',
    pt: 'Importante!',
    es: '¡Importante!',
  },
  'api_credentials_info': {
    en: 'To use the {name} APIs, you need to obtain access credentials. Contact our support to request your credentials.',
    pt: 'Para utilizar as APIs do {name}, é necessário obter as credenciais de acesso. Entre em contato com nosso suporte para solicitar suas credenciais.',
    es: 'Para utilizar las APIs de {name}, es necesario obtener las credenciales de acceso. Contacte a nuestro soporte para solicitar sus credenciales.',
  },
  'header_credentials_info': {
    en: 'Credentials must be sent in the Header of each request for authentication and authorization.',
    pt: 'As credenciais devem ser enviadas no Header de cada requisição para autenticação e autorização.',
    es: 'Las credenciales deben enviarse en el Header de cada solicitud para autenticación y autorización.',
  },
  'header_example': {
    en: 'Example of credentials in the Header',
    pt: 'Exemplo de credenciais no Header',
    es: 'Ejemplo de credenciales en el Header',
  },
  'curl_example': {
    en: 'Example with Curl',
    pt: 'Exemplo com Curl',
    es: 'Ejemplo con Curl',
  },
  'your_api_key': {
    en: 'YOUR_API_KEY',
    pt: 'SEU_API_KEY',
    es: 'SU_API_KEY',
  },
  'your_secret_key': {
    en: 'YOUR_SECRET_KEY',
    pt: 'SEU_SECRET_KEY',
    es: 'SU_SECRET_KEY',
  },
  'replace_keys_info': {
    en: 'Replace YOUR_API_KEY and YOUR_SECRET_KEY with the values provided.',
    pt: 'Substitua SEU_API_KEY e SEU_SECRET_KEY pelos valores fornecidos.',
    es: 'Reemplace SU_API_KEY y SU_SECRET_KEY con los valores proporcionados.',
  },
  'request_example': {
    en: 'Request Example',
    pt: 'Exemplo de Requisição',
    es: 'Ejemplo de Solicitud',
  },
  'response_example': {
    en: 'Response Example',
    pt: 'Exemplo de Resposta',
    es: 'Ejemplo de Respuesta',
  },
  'request_body_explanation': {
    en: 'Request Body Explanation',
    pt: 'Explicação do Corpo da Requisição',
    es: 'Explicación del Cuerpo de la Solicitud',
  },
  // Add more translations as needed
  'welcome_to_api': {
    en: 'Welcome to the Pixley API',
    pt: 'Bem-vindo à API do Pixley',
    es: 'Bienvenido a la API de Pixley',
  },
  'api_intro_text': {
    en: 'Our API allows you to integrate cryptocurrency payments and blockchain technology into your applications. Get started quickly with our comprehensive documentation.',
    pt: 'Nossa API permite integrar pagamentos em criptomoedas e tecnologia blockchain em suas aplicações. Comece rapidamente com nossa documentação completa.',
    es: 'Nuestra API le permite integrar pagos en criptomonedas y tecnología blockchain en sus aplicaciones. Comience rápidamente con nuestra documentación completa.',
  },
  'getting_started': {
    en: 'Getting Started',
    pt: 'Primeiros Passos',
    es: 'Primeros Pasos',
  },
  'register_account': {
    en: 'Register an account',
    pt: 'Registre uma conta',
    es: 'Registre una cuenta',
  },
  'generate_api_keys': {
    en: 'Generate API keys',
    pt: 'Gere as chaves de API',
    es: 'Genere las llaves de API',
  },
  'integrate_api': {
    en: 'Integrate our API endpoints',
    pt: 'Integre nossos endpoints de API',
    es: 'Integre nuestros endpoints de API',
  },
  'test_integration': {
    en: 'Test your integration',
    pt: 'Teste sua integração',
    es: 'Pruebe su integración',
  },
  'api_details': {
    en: 'API Details',
    pt: 'Detalhes da API',
    es: 'Detalles de la API',
  },
  'base_url': {
    en: 'Base URL',
    pt: 'URL Base',
    es: 'URL Base',
  },
  'version': {
    en: 'Version',
    pt: 'Versão',
    es: 'Versión',
  },
  'format': {
    en: 'Format',
    pt: 'Formato',
    es: 'Formato',
  },
  'auth': {
    en: 'Authentication',
    pt: 'Autenticação',
    es: 'Autenticación',
  },
  'need_help': {
    en: 'Need Help?',
    pt: 'Precisa de Ajuda?',
    es: '¿Necesita Ayuda?',
  },
  'contact_support_text': {
    en: 'Contact our support team for assistance with the API integration.',
    pt: 'Entre em contato com nosso suporte para obter ajuda com a integração da API.',
    es: 'Contacte a nuestro equipo de soporte para obtener ayuda con la integración de la API.',
  },
  'api_credentials_info_full': {
    en: 'To use the PixOnChain APIs, you need to obtain access credentials. Our APIs require authentication to ensure secure access to resources. Contact our support to request your credentials.',
    pt: 'Para utilizar as APIs do PixOnChain, é necessário obter as credenciais de acesso. Nossas APIs exigem autenticação para garantir acesso seguro aos recursos. Entre em contato com nosso suporte para solicitar suas credenciais.',
    es: 'Para utilizar las APIs de PixOnChain, es necesario obtener las credenciales de acceso. Nuestras APIs requieren autenticación para garantizar un acceso seguro a los recursos. Contacte a nuestro soporte para solicitar sus credenciales.',
  },
  'authentication': {
    en: 'Authentication',
    pt: 'Autenticação',
    es: 'Autenticación',
  },
  'curl_example_desc': {
    en: 'Example of how to make a request using curl with your API credentials:',
    pt: 'Exemplo de como fazer uma requisição usando curl com suas credenciais de API:',
    es: 'Ejemplo de cómo hacer una solicitud usando curl con sus credenciales de API:',
  },
  'security_tip': {
    en: 'Security Tip',
    pt: 'Dica de Segurança',
    es: 'Consejo de Seguridad',
  },
  'security_tip_text': {
    en: 'Never expose your API keys in client-side code. Always make API calls from your server to protect your credentials.',
    pt: 'Nunca exponha suas chaves de API no código do lado do cliente. Sempre faça chamadas de API a partir do seu servidor para proteger suas credenciais.',
    es: 'Nunca exponga sus llaves de API en el código del lado del cliente. Siempre haga llamadas a la API desde su servidor para proteger sus credenciales.',
  },
  'method': {
    en: 'Method',
    pt: 'Método',
    es: 'Método',
  },
  'url': {
    en: 'URL',
    pt: 'URL',
    es: 'URL',
  }
}; 