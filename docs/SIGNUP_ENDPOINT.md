# 📝 Endpoint de Registro de Usuário - `/api/signup`

## 📋 Visão Geral

O endpoint `/api/signup` permite o registro público de novos usuários no sistema Pixley Crypto Transactions, com suporte completo para upload de arquivos durante o processo de cadastro.

### ✨ Características Principais

- 🔓 **Endpoint Público**: Não requer autenticação prévia
- 📁 **Upload de Arquivos**: Suporte a múltiplos arquivos simultâneos
- 🔒 **Segurança**: Hash automático de senhas e validação de dados
- 🎫 **Token JWT**: Retorna token de autenticação imediata
- ✅ **Validação Completa**: Verificação de tipos de arquivo e dados obrigatórios

---

## 🚀 Como Usar

### URL do Endpoint
```
POST http://localhost:3000/api/signup
```

### Content-Type
```
multipart/form-data
```

### Exemplo Completo com cURL
```bash
curl -X POST http://localhost:3000/api/signup \
  -F "name=João Silva" \
  -F "email=joao.silva@example.com" \
  -F "password=MinhaSenh@123!" \
  -F "user_type=user" \
  -F "document_number=123.456.789-00" \
  -F "files=@documento.pdf" \
  -F "files=@foto.jpg"
```

---

## 📋 Parâmetros da Requisição

### Campos Obrigatórios

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `name` | string | Nome completo do usuário (2-100 caracteres) | "João Silva" |
| `email` | string | Email único do usuário (formato válido) | "joao.silva@example.com" |
| `password` | string | Senha do usuário (mínimo 8 caracteres) | "MinhaSenh@123!" |
| `user_type` | string | Tipo de usuário (`user`, `admin`, `super_admin`) | "user" |
| `document_number` | string | Número do documento (CPF, CNPJ, etc.) | "123.456.789-00" |

### Campos Opcionais

| Campo | Tipo | Descrição | Limitações |
|-------|------|-----------|------------|
| `files` | array[file] | Arquivos para upload | Máximo 10 arquivos, 10MB cada |

---

## 📁 Especificações de Upload de Arquivos

### Tipos de Arquivo Aceitos
- 📄 **PDF**: `application/pdf`
- 🖼️ **PNG**: `image/png`
- 📷 **JPG/JPEG**: `image/jpeg`

### Limitações
- **Tamanho máximo por arquivo**: 10MB
- **Número máximo de arquivos**: 10 por requisição
- **Validação**: Verificação automática de MIME type

### Exemplos de Upload

#### Upload de Arquivo Único
```bash
curl -X POST http://localhost:3000/api/signup \
  -F "name=Maria Santos" \
  -F "email=maria.santos@example.com" \
  -F "password=SenhaSegura456!" \
  -F "user_type=user" \
  -F "document_number=987.654.321-00" \
  -F "files=@documento_identidade.pdf"
```

#### Upload de Múltiplos Arquivos
```bash
curl -X POST http://localhost:3000/api/signup \
  -F "name=Carlos Oliveira" \
  -F "email=carlos.oliveira@example.com" \
  -F "password=MinhaSenh@789!" \
  -F "user_type=user" \
  -F "document_number=456.789.123-00" \
  -F "files=@rg_frente.jpg" \
  -F "files=@rg_verso.jpg" \
  -F "files=@comprovante_residencia.pdf"
```

#### Registro Sem Arquivos
```bash
curl -X POST http://localhost:3000/api/signup \
  -F "name=Ana Costa" \
  -F "email=ana.costa@example.com" \
  -F "password=SenhaForte123!" \
  -F "user_type=user" \
  -F "document_number=321.654.987-00"
```

---

## 📤 Respostas da API

### ✅ Sucesso (201 Created)

```json
{
  "message": "User registered successfully",
  "user": {
    "user_id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "João Silva",
    "email": "joao.silva@example.com",
    "user_type": "user",
    "document_number": "123.456.789-00",
    "is_active": true,
    "created_at": "2024-01-15T10:30:00Z"
  },
  "files": [
    {
      "fileId": "456e7890-e89b-12d3-a456-426614174001",
      "filename": "document_123e4567.pdf",
      "originalFilename": "documento.pdf",
      "mimetype": "application/pdf",
      "size": 1048576,
      "uploadedAt": "2024-01-15T10:30:00Z"
    },
    {
      "fileId": "789e0123-e89b-12d3-a456-426614174002",
      "filename": "photo_123e4567.jpg",
      "originalFilename": "foto.jpg",
      "mimetype": "image/jpeg",
      "size": 2097152,
      "uploadedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### ❌ Erros Comuns

#### 400 - Erro de Validação
```json
{
  "error": "Validation failed",
  "details": [
    "Name is required",
    "Email is required",
    "Password is required"
  ]
}
```

#### 400 - Tipo de Arquivo Inválido
```json
{
  "error": "Tipo de arquivo não permitido. Apenas PDF, PNG e JPG são aceitos."
}
```

#### 409 - Email Já Existe
```json
{
  "error": "Email already exists"
}
```

#### 413 - Arquivo Muito Grande
```json
{
  "error": "File size exceeds the maximum limit of 10MB"
}
```

---

## 🔐 Segurança e Validações

### Validação de Senha
- **Mínimo**: 8 caracteres
- **Recomendado**: Combinação de letras maiúsculas, minúsculas, números e símbolos
- **Hash**: Aplicado automaticamente usando bcrypt

### Validação de Email
- **Formato**: Verificação de formato válido
- **Unicidade**: Email deve ser único no sistema
- **Normalização**: Conversão para lowercase

### Validação de Arquivos
- **MIME Type**: Verificação rigorosa do tipo de arquivo
- **Tamanho**: Limite de 10MB por arquivo
- **Quantidade**: Máximo 10 arquivos por requisição
- **Armazenamento**: Arquivos são renomeados com UUID para segurança

---

## 🛠️ Exemplos de Integração

### JavaScript (Fetch API)
```javascript
const formData = new FormData();
formData.append('name', 'João Silva');
formData.append('email', 'joao.silva@example.com');
formData.append('password', 'MinhaSenh@123!');
formData.append('user_type', 'user');
formData.append('document_number', '123.456.789-00');

// Adicionar arquivos
const fileInput = document.getElementById('fileInput');
for (let file of fileInput.files) {
  formData.append('files', file);
}

fetch('http://localhost:3000/api/signup', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('Usuário registrado:', data);
  // Armazenar token JWT
  localStorage.setItem('authToken', data.token);
})
.catch(error => {
  console.error('Erro no registro:', error);
});
```

### Python (requests)
```python
import requests

url = 'http://localhost:3000/api/signup'

data = {
    'name': 'João Silva',
    'email': 'joao.silva@example.com',
    'password': 'MinhaSenh@123!',
    'user_type': 'user',
    'document_number': '123.456.789-00'
}

files = [
    ('files', ('documento.pdf', open('documento.pdf', 'rb'), 'application/pdf')),
    ('files', ('foto.jpg', open('foto.jpg', 'rb'), 'image/jpeg'))
]

response = requests.post(url, data=data, files=files)

if response.status_code == 201:
    result = response.json()
    print(f"Usuário registrado: {result['user']['name']}")
    print(f"Token: {result['token']}")
else:
    print(f"Erro: {response.json()}")
```

### PHP (cURL)
```php
<?php
$url = 'http://localhost:3000/api/signup';

$data = [
    'name' => 'João Silva',
    'email' => 'joao.silva@example.com',
    'password' => 'MinhaSenh@123!',
    'user_type' => 'user',
    'document_number' => '123.456.789-00',
    'files[]' => new CURLFile('documento.pdf', 'application/pdf', 'documento.pdf')
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 201) {
    $result = json_decode($response, true);
    echo "Usuário registrado: " . $result['user']['name'] . "\n";
    echo "Token: " . $result['token'] . "\n";
} else {
    echo "Erro: " . $response . "\n";
}
?>
```

---

## 🔍 Casos de Uso

### 1. Onboarding de Novos Usuários
- Registro completo com documentos de identificação
- Upload de comprovante de residência
- Foto do usuário para verificação

### 2. KYC (Know Your Customer)
- Documentos de identidade (RG, CNH, Passaporte)
- Comprovantes de renda
- Documentos empresariais (para pessoa jurídica)

### 3. Compliance e Auditoria
- Armazenamento seguro de documentos
- Rastreabilidade de uploads
- Histórico de registros

---

## ⚠️ Considerações Importantes

### Limitações Técnicas
- **Timeout**: Configurado para 5 minutos para uploads grandes
- **Memória**: Arquivos são processados em memória (limite do servidor)
- **Concorrência**: Múltiplas requisições simultâneas são suportadas

### Boas Práticas
1. **Validação Client-Side**: Implemente validação no frontend antes do envio
2. **Feedback Visual**: Mostre progresso de upload para o usuário
3. **Tratamento de Erros**: Implemente retry logic para falhas de rede
4. **Compressão**: Considere comprimir imagens antes do upload

### Monitoramento
- **Logs**: Todos os registros são logados para auditoria
- **Métricas**: Acompanhe taxa de sucesso e falhas
- **Alertas**: Configure alertas para erros frequentes

---

## 🔧 Configurações do Servidor

### Multer Configuration
```javascript
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 10 // máximo 10 arquivos
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não permitido. Apenas PDF, PNG e JPG são aceitos.'));
    }
  }
});
```

### Express Timeouts
```javascript
// Configurações de timeout para uploads grandes
server.timeout = 5 * 60 * 1000; // 5 minutos
server.keepAliveTimeout = 65 * 1000; // 65 segundos
server.headersTimeout = 66 * 1000; // 66 segundos
```

---

## 📞 Suporte e Troubleshooting

### Problemas Comuns

#### Upload Falha
1. Verifique o tamanho do arquivo (máximo 10MB)
2. Confirme o tipo de arquivo (PDF, PNG, JPG apenas)
3. Verifique a conexão de rede

#### Timeout
1. Arquivos muito grandes podem causar timeout
2. Considere comprimir arquivos antes do upload
3. Verifique a estabilidade da conexão

#### Erro de Validação
1. Confirme que todos os campos obrigatórios estão preenchidos
2. Verifique o formato do email
3. Certifique-se de que a senha atende aos critérios

### Logs de Debug
```bash
# Verificar logs do servidor
tail -f logs/app.log

# Verificar logs de erro
tail -f logs/error.log
```

---

## 📚 Documentação Relacionada

- [API Documentation](./API_DOCUMENTATION.md) - Documentação completa da API
- [Swagger Documentation](../swagger/user-endpoints.yaml) - Especificação OpenAPI
- [Authentication Guide](./AUTH_GUIDE.md) - Guia de autenticação
- [File Upload Best Practices](./FILE_UPLOAD_GUIDE.md) - Melhores práticas para upload

---

## 🏷️ Tags e Categorias

**Tags**: `signup`, `registration`, `file-upload`, `authentication`, `public-endpoint`

**Categoria**: User Management

**Versão**: 1.0.0

**Última Atualização**: Janeiro 2024

---

*Esta documentação cobre completamente o endpoint `/api/signup` do sistema Pixley Crypto Transactions. Para dúvidas ou suporte técnico, consulte a equipe de desenvolvimento.*