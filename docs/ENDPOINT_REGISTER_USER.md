# 📋 Endpoint: Registro de Usuário com Documentos

## 🚀 Referência Rápida

```http
POST /api/register/user
Content-Type: application/json

{
  "name": "string (obrigatório)",
  "email": "string (obrigatório)", 
  "password": "string (obrigatório)",
  "document_files": ["uuid1", "uuid2"] // opcional
}
```

**URL Base:** `http://localhost:3000/api/register/user`  
**Método:** `POST`  
**Autenticação:** Não requerida (endpoint público)  
**Content-Type:** `application/json`

---

## 🎯 Visão Geral

Endpoint público para registro de novos usuários com suporte completo a upload de documentos (frente e verso).

## 🔧 Características

- ✅ **Endpoint Público** - Não requer autenticação
- ✅ **Suporte a Múltiplos Arquivos** - Frente e verso de documentos
- ✅ **Validação Completa** - Dados do usuário e arquivos
- ✅ **Vinculação Automática** - Arquivos linkados ao usuário criado
- ✅ **Resposta Detalhada** - Inclui contagem de arquivos vinculados

## 📝 Estrutura da Requisição

### Headers
```http
Content-Type: application/json
```

### Body (JSON)
```json
{
  "name": "string (obrigatório)",
  "email": "string (obrigatório)",
  "password": "string (obrigatório)",
  "user_type": "string (opcional)",
  "document_number": "string (opcional)",
  "document_name": "string (opcional)",
  "document_type": "string (opcional)",
  "birth_date": "string (opcional)",
  "phone": "string (opcional)",
  "address": "object (opcional)",
  "reference": "string (opcional)",
  "document_files": "array (opcional)"
}
```

## 📋 Parâmetros Detalhados

### Campos Obrigatórios

| Campo | Tipo | Descrição | Validação |
|-------|------|-----------|-----------|
| `name` | string | Nome completo do usuário | Min: 2, Max: 100 caracteres |
| `email` | string | Email válido | Formato de email válido |
| `password` | string | Senha do usuário | Mínimo 8 caracteres |

### Campos Opcionais

| Campo | Tipo | Descrição | Validação |
|-------|------|-----------|-----------|
| `user_type` | string | Tipo de usuário | `"user"` ou `"admin"` (padrão: `"user"`) |
| `document_number` | string | Número do documento | Qualquer string |
| `document_name` | string | Nome no documento | Min: 2, Max: 255 caracteres |
| `document_type` | string | Tipo do documento | `"PF"`, `"PJ"`, `"OTHER"`, `"cpf"`, `"cnpj"`, `"passport"` |
| `birth_date` | string | Data de nascimento | Formato: `DD/MM/YYYY` ou `DD-MM-YYYY` |
| `phone` | string | Telefone | Qualquer string |
| `address` | object | Endereço completo | Objeto com campos de endereço |
| `reference` | string | UUID de parceiro | UUID v4 válido |
| `document_files` | array | IDs dos arquivos de documento | Array de UUIDs |

### Estrutura do Address
```json
{
  "street": "string",
  "city": "string", 
  "state": "string",
  "zipCode": "string",
  "country": "string"
}
```

### Document Files (Frente e Verso)
```json
{
  "document_files": [
    "uuid-da-frente-do-documento",
    "uuid-do-verso-do-documento"
  ]
}
```

## 🚀 Fluxo Completo: Upload + Registro

### 1. Upload da Frente do Documento
```bash
curl -X POST http://localhost:3000/api/files/upload \
  -F "file=@documento_frente.pdf" \
  -F "description=Frente do documento de identidade"
```

**Resposta:**
```json
{
  "success": true,
  "file": {
    "id": "caf452b4-5bd2-4260-8966-eab441190cb5",
    "filename": "documento_frente.pdf"
  }
}
```

### 2. Upload do Verso do Documento
```bash
curl -X POST http://localhost:3000/api/files/upload \
  -F "file=@documento_verso.pdf" \
  -F "description=Verso do documento de identidade"
```

**Resposta:**
```json
{
  "success": true,
  "file": {
    "id": "4ef2997f-200e-481d-bcd8-e2300fa7ef5d",
    "filename": "documento_verso.pdf"
  }
}
```

### 3. Registro do Usuário com Documentos
```bash
curl -X POST http://localhost:3000/api/register/user \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva Santos",
    "email": "joao.silva@example.com",
    "password": "MinhaSenh@123!",
    "user_type": "user",
    "document_number": "12345678901",
    "document_name": "João Silva Santos",
    "document_type": "cpf",
    "birth_date": "1985-03-15",
    "phone": "11987654321",
    "address": {
      "street": "Rua das Palmeiras, 123",
      "city": "São Paulo",
      "state": "SP",
      "zipCode": "01234-567",
      "country": "Brasil"
    },
    "document_files": [
      "caf452b4-5bd2-4260-8966-eab441190cb5",
      "4ef2997f-200e-481d-bcd8-e2300fa7ef5d"
    ]
  }'
```

## 📤 Respostas

### ✅ Sucesso (201 Created)
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "b559637c-3d5a-41c9-8b7c-269db6ad908b",
    "name": "João Silva Santos",
    "email": "joao.silva@example.com",
    "user_type": "user",
    "role": "USER",
    "address": {
      "city": "São Paulo",
      "state": "SP",
      "street": "Rua das Palmeiras, 123",
      "country": "Brasil",
      "zipCode": "01234-567"
    },
    "reference": null,
    "created_at": "2025-09-24T14:26:10.049Z",
    "linked_files": 2
  }
}
```

### ❌ Erro de Validação (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### ❌ Email Já Existe (409 Conflict)
```json
{
  "success": false,
  "message": "Email already exists"
}
```

### ❌ Erro Interno (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## 🔍 Validações Específicas

### Document Files
- ✅ **Formato**: Array de strings (UUIDs)
- ✅ **Validação**: Verifica se os arquivos existem no banco
- ✅ **Flexibilidade**: Aceita qualquer quantidade de arquivos
- ✅ **Segurança**: Apenas arquivos válidos são vinculados

### Casos de Uso Comuns
```json
// Apenas frente
"document_files": ["uuid-frente"]

// Frente e verso
"document_files": ["uuid-frente", "uuid-verso"]

// Múltiplos documentos
"document_files": ["uuid-rg-frente", "uuid-rg-verso", "uuid-comprovante"]

// Sem documentos
"document_files": []
```

## 🔗 Vinculação de Arquivos

### Como Funciona
1. **Validação**: Sistema verifica se cada UUID existe na tabela `files`
2. **Vinculação**: Cria registros na tabela `file_references`
3. **Metadados**: Cada vinculação recebe:
   - `entity_type`: `"user"`
   - `entity_id`: ID do usuário criado
   - `reference_type`: `"document"`
   - `created_at`: Timestamp da vinculação

### Estrutura no Banco
```sql
-- Tabela file_references
INSERT INTO file_references (
  file_id,           -- UUID do arquivo
  entity_type,       -- "user"
  entity_id,         -- ID do usuário
  reference_type,    -- "document"
  created_at         -- Timestamp
) VALUES (
  'uuid-do-arquivo',
  'user',
  'uuid-do-usuario',
  'document',
  CURRENT_TIMESTAMP
);
```

## 📊 Monitoramento

### Logs de Sucesso
```
[REGISTER] New user created: joao.silva@example.com (ID: uuid-do-usuario)
```

### Logs de Erro
```
[REGISTER] Error linking files to user uuid-do-usuario: error-message
```

### Métricas Importantes
- **linked_files**: Quantidade de arquivos vinculados com sucesso
- **created_at**: Timestamp de criação do usuário
- **response_time**: Tempo de processamento da requisição

## 🛡️ Segurança

### Validações Implementadas
- ✅ **Email único**: Previne duplicação de contas
- ✅ **Senha forte**: Mínimo 8 caracteres
- ✅ **Arquivos válidos**: Apenas UUIDs existentes são aceitos
- ✅ **Sanitização**: Dados são validados antes da inserção

### Boas Práticas
- 🔒 **Não loggar senhas**: Senhas são hasheadas antes do armazenamento
- 🔒 **Validação de entrada**: Todos os campos são validados
- 🔒 **Transações**: Operações são atômicas
- 🔒 **Error handling**: Erros são tratados adequadamente

## 🧪 Exemplos de Teste

### Teste Básico (Sem Documentos)
```bash
curl -X POST http://localhost:3000/api/register/user \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste Usuario",
    "email": "teste@example.com",
    "password": "senha123456"
  }'
```

### Teste Completo (Com Documentos)
```bash
curl -X POST http://localhost:3000/api/register/user \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Silva",
    "email": "maria@example.com",
    "password": "MinhaSenh@123!",
    "document_number": "98765432100",
    "document_type": "cpf",
    "phone": "11999888777",
    "document_files": [
      "uuid-arquivo-1",
      "uuid-arquivo-2"
    ]
  }'
```

## 📈 Status Codes

| Código | Descrição | Cenário |
|--------|-----------|---------|
| `201` | Created | Usuário criado com sucesso |
| `400` | Bad Request | Dados inválidos ou malformados |
| `409` | Conflict | Email já existe |
| `500` | Internal Server Error | Erro interno do servidor |

## 🔄 Integração com Frontend

### Configuração da API (baseada no projeto)

Primeiro, configure o serviço de API conforme a estrutura do projeto:

```typescript
// src/services/api.ts
import axios from 'axios';

const tenantUrl =
    typeof window !== 'undefined'
        ? (window.location.hostname === 'localhost' ? 'crypto.sandbox.pixley.app' : window.location.hostname)
        : '';

const apiUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/'
        : `https://${tenantUrl}/`;

export const baseApi = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
    },
});

// Interceptor para adicionar headers de autenticação se necessário
baseApi.interceptors.request.use(
    (config) => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
        
        if (apiKey) {
            config.headers['x-api-key'] = apiKey;
        }
        if (secretKey) {
            config.headers['x-secret-key'] = secretKey;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
```

### Hook Personalizado para Registro

```typescript
// hooks/useUserRegistration.ts
import { useState } from 'react';
import { baseApi } from '../services/api';

interface UserData {
  name: string;
  email: string;
  password: string;
  user_type?: string;
  document_number?: string;
  document_name?: string;
  document_type?: string;
  birth_date?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  reference?: string;
  document_files?: string[];
}

interface RegistrationResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
    user_type: string;
    role: string;
    address?: any;
    reference?: string;
    created_at: string;
    linked_files: number;
  };
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

export const useUserRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const registerUser = async (userData: UserData): Promise<RegistrationResponse> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await baseApi.post<RegistrationResponse>('/api/register/user', userData);
      
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Erro no registro';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return { registerUser, loading, error };
};
```

### Hook para Upload de Arquivos

```typescript
// hooks/useFileUpload.ts
import { useState } from 'react';
import { baseApi } from '../services/api';

interface FileUploadResponse {
  success: boolean;
  file?: {
    id: string;
    filename: string;
  };
  message?: string;
}

export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  const uploadFile = async (file: File, description?: string): Promise<string | null> => {
    setUploading(true);
    setUploadError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (description) {
        formData.append('description', description);
      }
      
      const response = await baseApi.post<FileUploadResponse>('/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (!response.data.success || !response.data.file) {
        throw new Error(response.data.message || 'Erro no upload');
      }
      
      return response.data.file.id;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Erro no upload';
      setUploadError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setUploading(false);
    }
  };
  
  return { uploadFile, uploading, uploadError };
};

### Componente de Upload de Arquivos

```tsx
// components/FileUpload.tsx
import React, { useState } from 'react';
import { useFileUpload } from '../hooks/useFileUpload';

interface FileUploadProps {
  onFileUploaded: (fileId: string, fileName: string) => void;
  label: string;
  description?: string;
  accept?: string;
  disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUploaded,
  label,
  description,
  accept = ".pdf,.jpg,.jpeg,.png",
  disabled = false
}) => {
  const { uploadFile, uploading, uploadError } = useFileUpload();
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = async (file: File) => {
    try {
      const fileId = await uploadFile(file, description);
      if (fileId) {
        onFileUploaded(fileId, file.name);
      }
    } catch (error) {
      console.error('Erro no upload:', error);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive
            ? 'border-purple-400 bg-purple-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled || uploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        {uploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-2"></div>
            <p className="text-sm text-gray-600">Enviando arquivo...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm text-gray-600">
              Clique para selecionar ou arraste o arquivo aqui
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Formatos aceitos: PDF, JPG, PNG (máx. 10MB)
            </p>
          </div>
        )}
      </div>
      
      {uploadError && (
        <p className="mt-2 text-sm text-red-600">{uploadError}</p>
      )}
    </div>
  );
};
```

### Componente de Formulário de Registro Completo

```tsx
// components/UserRegistrationForm.tsx
import React, { useState } from 'react';
import { useUserRegistration } from '../hooks/useUserRegistration';
import { FileUpload } from './FileUpload';

interface DocumentFile {
  id: string;
  name: string;
  type: 'front' | 'back';
}

export const UserRegistrationForm: React.FC = () => {
  const { registerUser, loading, error } = useUserRegistration();
  const [documentFiles, setDocumentFiles] = useState<DocumentFile[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    document_number: '',
    document_type: 'cpf',
    phone: '',
    birth_date: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'Brasil'
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileUploaded = (fileId: string, fileName: string, type: 'front' | 'back') => {
    setDocumentFiles(prev => {
      const filtered = prev.filter(f => f.type !== type);
      return [...filtered, { id: fileId, name: fileName, type }];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        document_number: formData.document_number,
        document_type: formData.document_type,
        phone: formData.phone,
        birth_date: formData.birth_date,
        address: formData.address,
        document_files: documentFiles.map(f => f.id)
      };

      const result = await registerUser(userData);
      
      if (result.success) {
        alert(`Usuário registrado com sucesso! ID: ${result.user?.id}`);
        // Reset form or redirect
      }
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Registro de Usuário</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dados Pessoais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Senhas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Senha *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Senha *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Documento
            </label>
            <select
              name="document_type"
              value={formData.document_type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="cpf">CPF</option>
              <option value="cnpj">CNPJ</option>
              <option value="passport">Passaporte</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número do Documento
            </label>
            <input
              type="text"
              name="document_number"
              value={formData.document_number}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Upload de Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileUpload
            label="Frente do Documento"
            description="Frente do documento de identidade"
            onFileUploaded={(fileId, fileName) => handleFileUploaded(fileId, fileName, 'front')}
          />
          
          <FileUpload
            label="Verso do Documento"
            description="Verso do documento de identidade"
            onFileUploaded={(fileId, fileName) => handleFileUploaded(fileId, fileName, 'back')}
          />
        </div>

        {/* Endereço */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rua
              </label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade
              </label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <input
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Arquivos Carregados */}
        {documentFiles.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Arquivos Carregados:</h4>
            <ul className="space-y-1">
              {documentFiles.map((file, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {file.name} ({file.type === 'front' ? 'Frente' : 'Verso'})
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Registrando...' : 'Registrar Usuário'}
        </button>
      </form>
    </div>
  );
};
```

### Exemplo de Uso Simples

```tsx
// pages/register.tsx ou components/RegisterPage.tsx
import React from 'react';
import { UserRegistrationForm } from '../components/UserRegistrationForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <UserRegistrationForm />
      </div>
    </div>
  );
}
```

---

## 📞 Suporte

Para dúvidas ou problemas com esta endpoint:
- 📧 **Email**: suporte@pixley.com
- 📱 **Slack**: #dev-backend
- 📖 **Docs**: `/docs/API_DOCUMENTATION.md`

---

**Última atualização**: 24/09/2025  
**Versão da API**: 2.0.0  
**Endpoint**: `/api/register/user`