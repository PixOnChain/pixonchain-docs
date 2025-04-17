"use client"

import React from 'react';
import { useLanguage } from '../utils/languageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative language-selector">
      <div className="flex items-center gap-2 bg-gray-800 rounded-lg text-white">
        <div className="flex">
          <button
            onClick={() => setLanguage('pt')}
            className={`px-3 py-1.5 text-sm rounded-l-md flex items-center justify-center transition-colors ${
              language === 'pt' 
                ? 'bg-blue-600 text-white font-medium' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            aria-label="Português"
            title="Português"
          >
            <span className="relative">
              PT
              {language === 'pt' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></span>
              )}
            </span>
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-sm flex items-center justify-center transition-colors ${
              language === 'en' 
                ? 'bg-blue-600 text-white font-medium' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            aria-label="English"
            title="English"
          >
            <span className="relative">
              EN
              {language === 'en' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></span>
              )}
            </span>
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-3 py-1.5 text-sm rounded-r-md flex items-center justify-center transition-colors ${
              language === 'es' 
                ? 'bg-blue-600 text-white font-medium' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            aria-label="Español"
            title="Español"
          >
            <span className="relative">
              ES
              {language === 'es' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></span>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector; 