"use client"

import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaRobot, FaUser, FaRegQuestionCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useLanguage } from '../utils/languageContext';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Simple Markdown to HTML converter function
const markdownToHtml = (markdown: string): string => {
  // Replace code blocks
  let html = markdown.replace(/```([a-z]*)\n([\s\S]*?)\n```/g, '<pre class="bg-gray-800 p-3 rounded my-2 overflow-x-auto text-xs"><code>$2</code></pre>');
  
  // Replace inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-xs">$1</code>');
  
  // Replace numbered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li class="ml-5">$1</li>');
  
  // Replace bullet lists
  html = html.replace(/^\*\s+(.+)$/gm, '<li class="ml-5">$1</li>');
  
  // Replace headers (h1, h2, h3)
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-xl font-bold my-2">$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-lg font-bold my-2">$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-md font-bold my-2">$1</h3>');
  
  // Replace bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>');
  
  // Replace italic
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
  
  // Replace links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Replace paragraphs
  html = html.split('\n\n').map(p => p.trim()).filter(p => p).map(p => {
    if (
      !p.startsWith('<h1') && 
      !p.startsWith('<h2') && 
      !p.startsWith('<h3') && 
      !p.startsWith('<pre') && 
      !p.startsWith('<li')
    ) {
      return `<p class="my-2">${p}</p>`;
    }
    return p;
  }).join('');
  
  // If there are consecutive list items, wrap them in a ul
  html = html.replace(/(<li[^>]*>.*?<\/li>)(<li[^>]*>.*?<\/li>)+/g, '<ul class="list-disc my-2">$&</ul>');
  
  return html;
};

// Message component with Markdown support
const MessageContent = ({ content }: { content: string }) => {
  return (
    <div 
      className="markdown-content text-sm"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} 
    />
  );
};

const ChatPrompt: React.FC = () => {
  const { t, language } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Como posso ajudar com a integração da API hoje?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Digital Ocean AI agent endpoint
  const aiEndpoint = "https://lsjogyvlmlkxeplegt7wudra.agents.do-ai.run/api/v1/chat/completions";
  
  // Access key from environment variable
  const aiAgentAccessKey = process.env.NEXT_PUBLIC_DIGITAL_OCEAN_AGENT_AI_ACCESS_KEY || "";
  
  // Check if the access key is properly set
  useEffect(() => {
    if (!aiAgentAccessKey || aiAgentAccessKey === "your_agent_access_key_here") {
      console.error("Digital Ocean Agent Access Key is not set. Please update the .env.local file.");
      setAuthError(true);
    } else {
      setAuthError(false);
    }
  }, [aiAgentAccessKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // If auth error is detected, show a message instead of trying to call the API
    if (authError) {
      setMessages(prev => [
        ...prev, 
        { role: 'user', content: input },
        { 
          role: 'assistant', 
          content: 'A chave de acesso da API não está configurada corretamente. Por favor, verifique o arquivo .env.local e adicione a chave de acesso correta.'
        }
      ]);
      setInput('');
      return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Start loading
    setIsLoading(true);
    
    try {
      // Prepare message history for the AI
      const messageHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      // Add the new user message
      messageHistory.push({
        role: 'user',
        content: userMessage
      });
      
      // Print debug information
      console.log("Sending request to:", aiEndpoint);
      console.log("Auth Key (first few chars):", aiAgentAccessKey ? `${aiAgentAccessKey.substring(0, 5)}...` : "Not set");
      
      // Prepare request headers with authorization
      const requestConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aiAgentAccessKey}`
        }
      };
      
      // Call the Digital Ocean AI agent
      const response = await axios.post(
        aiEndpoint, 
        {
          messages: messageHistory,
          stream: false,
          include_functions_info: false,
          include_retrieval_info: false,
          include_guardrails_info: false
        }, 
        requestConfig
      );
      
      // Get the response from the AI
      if (response.data && response.data.choices && response.data.choices.length > 0) {
        const aiMessage = response.data.choices[0].message.content;
        setMessages(prev => [...prev, { role: 'assistant', content: aiMessage }]);
      } else {
        // Fallback in case of unexpected response format
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: language === 'pt' 
            ? 'Desculpe, não consegui processar sua solicitação. Por favor, tente novamente.'
            : language === 'es'
              ? 'Lo siento, no pude procesar tu solicitud. Por favor, inténtalo de nuevo.'
              : 'Sorry, I could not process your request. Please try again.' 
        }]);
      }
    } catch (error) {
      console.error('Error communicating with AI agent:', error);
      
      // Check specifically for 401 unauthorized errors
      let is401Error = false;
      
      // Detailed error handling
      let errorMessage = '';
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('API error response:', error.response.data);
          errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
          
          // Check if this is an auth error
          if (error.response.status === 401) {
            is401Error = true;
            setAuthError(true);
            errorMessage = 'Authentication failed. Please check your API key.';
          }
        } else if (error.request) {
          // The request was made but no response was received
          errorMessage = 'No response received from server';
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMessage = error.message;
        }
      } else {
        errorMessage = 'An unknown error occurred';
      }
      
      let errorContent = '';
      if (is401Error) {
        errorContent = language === 'pt'
          ? 'Erro de autenticação: A chave de acesso da API não está correta ou está expirada. Por favor, verifique as configurações e tente novamente.'
          : language === 'es'
            ? 'Error de autenticación: La clave de acceso de la API no es correcta o ha expirado. Por favor, verifique la configuración e intente nuevamente.'
            : 'Authentication error: The API access key is incorrect or has expired. Please check the settings and try again.';
      } else {
        errorContent = language === 'pt'
          ? `Desculpe, houve um erro ao se comunicar com o assistente: ${errorMessage}. Por favor, tente novamente mais tarde.`
          : language === 'es'
            ? `Lo siento, hubo un error al comunicarse con el asistente: ${errorMessage}. Por favor, inténtalo de nuevo más tarde.`
            : `Sorry, there was an error communicating with the assistant: ${errorMessage}. Please try again later.`;
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorContent
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Example suggested questions
  const suggestedQuestions = [
    'Como autenticar com a API?',
    'Como gerar chaves de API?',
    'Como fazer um depósito usando PIX?',
    'Como implementar o webhook de notificações?'
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white flex items-center">
          <FaRobot className="mr-2 text-blue-400" />
          {t('ask_question')}
        </h3>
        
        {authError && (
          <div className="text-amber-400 flex items-center text-sm">
            <FaExclamationTriangle className="mr-1" />
            <span className="hidden sm:inline">API Key Error</span>
          </div>
        )}
      </div>
      
      {authError && (
        <div className="bg-amber-900/30 border-l-4 border-amber-500 p-4">
          <div className="flex">
            <FaExclamationTriangle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-amber-400 font-bold">Authentication Error</p>
              <p className="text-sm text-gray-300">
                The Digital Ocean AI agent requires an access key. Please update your .env.local file with a valid access key.
                <br/><br/>
                <code className="bg-gray-800 px-2 py-1 rounded text-xs">NEXT_PUBLIC_DIGITAL_OCEAN_AGENT_AI_ACCESS_KEY=your_key_here</code>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`flex max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-100'
              } rounded-lg overflow-hidden`}
            >
              <div className={`p-2 flex items-start ${
                message.role === 'user' 
                  ? 'bg-blue-700' 
                  : 'bg-gray-700'
              }`}>
                {message.role === 'user' 
                  ? <FaUser className="text-white text-sm mt-1" /> 
                  : <FaRobot className="text-blue-400 text-sm mt-1" />}
              </div>
              <div className="p-3">
                <MessageContent content={message.content} />
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex max-w-[80%] bg-gray-800 text-gray-100 rounded-lg overflow-hidden">
              <div className="p-2 flex items-start bg-gray-700">
                <FaRobot className="text-blue-400 text-sm mt-1" />
              </div>
              <div className="p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Suggested questions */}
      {messages.length < 2 && (
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <p className="text-sm text-gray-300 mb-2 flex items-center">
            <FaRegQuestionCircle className="mr-2 text-blue-400" />
            Perguntas sugeridas:
          </p>
          <div className="grid grid-cols-1 gap-2">
            {suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                className="text-left text-sm px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-200 transition-colors overflow-hidden overflow-ellipsis"
                onClick={() => handleSuggestedQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 rounded-l-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('chat_placeholder')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-600 rounded-r-md text-white hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPrompt; 