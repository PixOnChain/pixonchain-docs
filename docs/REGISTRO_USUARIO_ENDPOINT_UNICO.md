# 📋 **Documentação do Endpoint Unificado de Registro**

## 🎯 **Visão Geral**

O endpoint unificado de registro permite criar usuários com dados completos e upload de múltiplos arquivos em uma única requisição HTTP. Este endpoint substitui o fluxo anterior de múltiplas chamadas, simplificando significativamente o processo de registro.

### ✅ **Vantagens do Endpoint Único**

- **Simplicidade**: Uma única requisição para registro completo
- **Eficiência**: Reduz latência e overhead de rede
- **Atomicidade**: Operação completa ou falha total
- **Upload Múltiplo**: Suporte a vários arquivos simultaneamente
- **Validação Integrada**: Todas as validações em um só lugar

---

## 🔗 **Endpoint**

```
POST /api/register/user-with-files
```

**Content-Type**: `multipart/form-data`

---

## 📝 **Parâmetros da Requisição**

### **Campos Obrigatórios**

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `name` | string | Nome completo do usuário | "João Silva Santos" |
| `email` | string | Email único do usuário | "joao.silva@email.com" |
| `password` | string | Senha (min. 8 caracteres) | "MinhaSenh@123!" |

### **Campos Opcionais - Dados Pessoais**

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `phone` | string | Telefone com DDD | "(11) 99999-9999" |
| `birth_date` | string | Data de nascimento (YYYY-MM-DD) | "1990-05-15" |
| `user_type` | string | Tipo de usuário | "user" ou "admin" |

### **Campos Opcionais - Documentos**

| Campo | Tipo | Descrição | Valores Aceitos |
|-------|------|-----------|-----------------|
| `document_type` | string | Tipo do documento | `"cpf"`, `"cnpj"`, `"passport"`, `"PF"`, `"PJ"`, `"OTHER"` |
| `document_number` | string | Número do documento | "123.456.789-00" |
| `document_name` | string | Nome no documento | "João Silva Santos" |

### **Campos Opcionais - Endereço**

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| `street` | string | Logradouro | "Rua das Flores, 123" |
| `city` | string | Cidade | "São Paulo" |
| `state` | string | Estado | "SP" |
| `zip_code` | string | CEP | "01234-567" |
| `country` | string | País | "Brasil" |

### **Arquivos (Opcionais)**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `files` | File[] | Múltiplos arquivos (documentos, fotos, etc.) |

**Formatos aceitos**: JPG, JPEG, PNG, PDF, DOC, DOCX  
**Tamanho máximo**: 10MB por arquivo  
**Limite**: Até 10 arquivos por requisição

---

## 📤 **Exemplo de Requisição**

### **Usando cURL**

```bash
curl -X POST http://localhost:3000/api/register/user-with-files \
  -F "name=João Silva Santos" \
  -F "email=joao.silva@email.com" \
  -F "password=MinhaSenh@123!" \
  -F "phone=(11) 99999-9999" \
  -F "birth_date=1990-05-15" \
  -F "user_type=user" \
  -F "document_type=cpf" \
  -F "document_number=123.456.789-00" \
  -F "document_name=João Silva Santos" \
  -F "street=Rua das Flores, 123" \
  -F "city=São Paulo" \
  -F "state=SP" \
  -F "zip_code=01234-567" \
  -F "country=Brasil" \
  -F "files=@documento.pdf" \
  -F "files=@foto.jpg"
```

### **Usando JavaScript (FormData)**

```javascript
const formData = new FormData();

// Dados obrigatórios
formData.append('name', 'João Silva Santos');
formData.append('email', 'joao.silva@email.com');
formData.append('password', 'MinhaSenh@123!');

// Dados opcionais
formData.append('phone', '(11) 99999-9999');
formData.append('birth_date', '1990-05-15');
formData.append('document_type', 'cpf');
formData.append('document_number', '123.456.789-00');
formData.append('document_name', 'João Silva Santos');

// Endereço
formData.append('street', 'Rua das Flores, 123');
formData.append('city', 'São Paulo');
formData.append('state', 'SP');
formData.append('zip_code', '01234-567');
formData.append('country', 'Brasil');

// Arquivos
formData.append('files', documentoFile);
formData.append('files', fotoFile);

const response = await fetch('/api/register/user-with-files', {
  method: 'POST',
  body: formData
});
```

---

## 📥 **Respostas**

### **✅ Sucesso (201 Created)**

```json
{
  "message": "Usuário registrado com sucesso",
  "user": {
    "id": 123,
    "name": "João Silva Santos",
    "email": "joao.silva@email.com",
    "user_type": "user",
    "phone": "(11) 99999-9999",
    "birth_date": "1990-05-15",
    "document_type": "cpf",
    "document_number": "123.456.789-00",
    "document_name": "João Silva Santos",
    "street": "Rua das Flores, 123",
    "city": "São Paulo",
    "state": "SP",
    "zip_code": "01234-567",
    "country": "Brasil",
    "created_at": "2024-01-15T10:30:00.000Z"
  },
  "files": [
    {
      "id": 456,
      "filename": "documento_123_1705312200000.pdf",
      "original_name": "documento.pdf",
      "file_type": "application/pdf",
      "file_size": 1048576,
      "upload_date": "2024-01-15T10:30:00.000Z"
    },
    {
      "id": 457,
      "filename": "foto_123_1705312200001.jpg",
      "original_name": "foto.jpg",
      "file_type": "image/jpeg",
      "file_size": 524288,
      "upload_date": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### **❌ Erro de Validação (400 Bad Request)**

```json
{
  "error": "Dados inválidos",
  "details": [
    "Email é obrigatório",
    "Senha deve ter pelo menos 8 caracteres",
    "Tipo de documento inválido"
  ]
}
```

### **❌ Email Já Existe (409 Conflict)**

```json
{
  "error": "Email já está em uso"
}
```

### **❌ Erro de Upload (413 Payload Too Large)**

```json
{
  "error": "Arquivo muito grande. Tamanho máximo: 10MB"
}
```

### **❌ Erro Interno (500 Internal Server Error)**

```json
{
  "error": "Erro interno do servidor"
}
```

---

## 🔒 **Validações**

### **Email**
- Formato válido de email
- Único no sistema
- Obrigatório

### **Senha**
- Mínimo 8 caracteres
- Obrigatória

### **Tipo de Documento**
- Valores aceitos: `"cpf"`, `"cnpj"`, `"passport"`, `"PF"`, `"PJ"`, `"OTHER"`
- Case-sensitive (usar minúsculas para cpf/cnpj)

### **Arquivos**
- Formatos: JPG, JPEG, PNG, PDF, DOC, DOCX
- Tamanho máximo: 10MB por arquivo
- Máximo 10 arquivos por requisição

### **Tipo de Usuário**
- Valores aceitos: `"user"`, `"admin"`
- Padrão: `"user"`

---

## 🗄️ **Estrutura do Banco de Dados**

### **Tabela: users**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  user_type VARCHAR(20) CHECK (user_type IN ('user', 'admin')),
  phone VARCHAR(20),
  birth_date DATE,
  document_type VARCHAR(20),
  document_number VARCHAR(50),
  document_name VARCHAR(255),
  street VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(50),
  zip_code VARCHAR(20),
  country VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Constraint para document_type
ALTER TABLE users ADD CONSTRAINT check_document_type_values 
CHECK (document_type IN ('PF', 'PJ', 'OTHER', 'cpf', 'cnpj', 'passport'));
```

### **Tabela: files**
```sql
CREATE TABLE files (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255),
  file_type VARCHAR(100),
  file_size INTEGER,
  file_path VARCHAR(500),
  upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚀 **Casos de Uso**

### **1. Registro Mínimo**
```bash
curl -X POST http://localhost:3000/api/register/user-with-files \
  -F "name=João Silva" \
  -F "email=joao@email.com" \
  -F "password=MinhaSenh@123!"
```

### **2. Registro com Telefone**
```bash
curl -X POST http://localhost:3000/api/register/user-with-files \
  -F "name=João Silva" \
  -F "email=joao@email.com" \
  -F "password=MinhaSenh@123!" \
  -F "phone=(11) 99999-9999"
```

### **3. Registro Completo com Documentos**
```bash
curl -X POST http://localhost:3000/api/register/user-with-files \
  -F "name=João Silva Santos" \
  -F "email=joao.silva@email.com" \
  -F "password=MinhaSenh@123!" \
  -F "phone=(11) 99999-9999" \
  -F "birth_date=1990-05-15" \
  -F "document_type=cpf" \
  -F "document_number=123.456.789-00" \
  -F "document_name=João Silva Santos" \
  -F "street=Rua das Flores, 123" \
  -F "city=São Paulo" \
  -F "state=SP" \
  -F "zip_code=01234-567" \
  -F "country=Brasil" \
  -F "files=@documento.pdf" \
  -F "files=@foto.jpg"
```

---

## 🔧 **Configuração Técnica**

### **Multer Configuration**
```javascript
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/certificates/');
  },
  filename: function (req, file, cb) {
    const userId = req.body.name || 'temp';
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}_${userId}_${timestamp}${ext}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 10 // máximo 10 arquivos
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não permitido'));
    }
  }
});
```

---

## 📊 **Status de Implementação**

- ✅ **Endpoint funcional**: `/api/register/user-with-files`
- ✅ **Upload de múltiplos arquivos**: Configurado e testado
- ✅ **Validações**: Implementadas e funcionando
- ✅ **Constraints de banco**: Ativas e validadas
- ✅ **Tratamento de erros**: Completo
- ✅ **Testes**: Realizados com sucesso
- ✅ **Documentação**: Completa e atualizada

---

## 🎯 **Próximos Passos**

1. **Implementar autenticação JWT** no retorno
2. **Adicionar logs de auditoria** para registros
3. **Implementar rate limiting** para prevenir spam
4. **Adicionar validação de CPF/CNPJ** real
5. **Implementar compressão de imagens** automática
6. **Adicionar webhook** para notificações de registro

---

*Documentação atualizada em: Janeiro 2024*  
*Versão do endpoint: 1.0.0*  
*Status: ✅ Produção*