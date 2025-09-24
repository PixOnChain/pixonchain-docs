# 📤 Upload de Arquivos para Registro de Usuário - Guia Completo

Este guia detalha como fazer upload de arquivos PNG, PDF e JPEG para o endpoint de registro de usuário com comprovação de identidade.

## 🎯 Visão Geral do Processo

O processo de registro com documentos envolve **2 etapas**:

1. **📤 Upload dos Arquivos** → Obter IDs dos arquivos
2. **👤 Registro do Usuário** → Usar os IDs na criação da conta

---

## 📋 Etapa 1: Upload dos Arquivos

### 🔗 Endpoint de Upload
```
POST http://localhost:3000/api/files/upload
```

### 🔧 Características
- ✅ **Endpoint Público** - Não requer autenticação
- ✅ **Múltiplos Formatos** - PNG, PDF, JPEG/JPG
- ✅ **Múltiplos Arquivos** - Até 5 arquivos por requisição
- ✅ **Limite de Tamanho** - 10MB por arquivo
- ✅ **Validação Automática** - Tipos de arquivo verificados

### 📝 Parâmetros da Requisição

#### Headers
```http
Content-Type: multipart/form-data
```

#### Form Data (multipart/form-data)
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `files` | File[] | ✅ | Arquivos para upload (máx: 5 arquivos, 10MB cada) |
| `entityType` | string | ✅ | Tipo da entidade (use: `"user"`) |
| `entityId` | string | ✅ | ID temporário único (ex: `temp_1234567890123`) |
| `referenceType` | string | ✅ | Tipo de referência (use: `"document"`) |
| `description` | string | ❌ | Descrição opcional dos arquivos |
| `isPrimary` | boolean | ❌ | Se é arquivo principal (padrão: false) |

### 🎯 Formatos Aceitos
- **PDF**: `application/pdf`
- **PNG**: `image/png`
- **JPEG**: `image/jpeg`
- **JPG**: `image/jpg`

---

## 🚀 Exemplos Práticos

### 📱 Exemplo 1: Upload via cURL (Frente e Verso)

#### Upload da Frente do Documento
```bash
curl -X POST http://localhost:3000/api/files/upload \
  -F "files=@documento_frente.pdf" \
  -F "entityType=user" \
  -F "entityId=temp_1704067200000" \
  -F "referenceType=document" \
  -F "description=Frente do documento de identidade"
```

#### Upload do Verso do Documento
```bash
curl -X POST http://localhost:3000/api/files/upload \
  -F "files=@documento_verso.pdf" \
  -F "entityType=user" \
  -F "entityId=temp_1704067200000" \
  -F "referenceType=document" \
  -F "description=Verso do documento de identidade"
```

### 📱 Exemplo 2: Upload Múltiplo (Frente + Verso em uma requisição)
```bash
curl -X POST http://localhost:3000/api/files/upload \
  -F "files=@documento_frente.png" \
  -F "files=@documento_verso.png" \
  -F "entityType=user" \
  -F "entityId=temp_1704067200000" \
  -F "referenceType=document" \
  -F "description=Documentos de identidade completos"
```

### 💻 Exemplo 3: Upload via JavaScript/Fetch
```javascript
async function uploadDocuments(fronteFile, versoFile) {
  const formData = new FormData();
  
  // Adicionar arquivos
  formData.append('files', fronteFile);
  formData.append('files', versoFile);
  
  // Adicionar metadados
  formData.append('entityType', 'user');
  formData.append('entityId', `temp_${Date.now()}`);
  formData.append('referenceType', 'document');
  formData.append('description', 'Documentos de identidade');
  
  try {
    const response = await fetch('http://localhost:3000/api/files/upload', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Upload realizado com sucesso!');
      console.log('🆔 IDs dos arquivos:', result.files.map(f => f.fileId));
      return result.files.map(f => f.fileId);
    } else {
      console.error('❌ Erro no upload:', result);
      return null;
    }
  } catch (error) {
    console.error('💥 Erro durante o upload:', error);
    return null;
  }
}

// Uso
const fileIds = await uploadDocuments(documentoFrente, documentoVerso);
```

### 🌐 Exemplo 4: Upload via HTML Form
```html
<!DOCTYPE html>
<html>
<head>
    <title>Upload de Documentos</title>
</head>
<body>
    <form id="uploadForm" enctype="multipart/form-data">
        <div>
            <label>Frente do Documento:</label>
            <input type="file" name="files" accept=".pdf,.png,.jpg,.jpeg" required>
        </div>
        
        <div>
            <label>Verso do Documento:</label>
            <input type="file" name="files" accept=".pdf,.png,.jpg,.jpeg" required>
        </div>
        
        <input type="hidden" name="entityType" value="user">
        <input type="hidden" name="entityId" id="entityId">
        <input type="hidden" name="referenceType" value="document">
        <input type="hidden" name="description" value="Documentos de identidade">
        
        <button type="submit">Fazer Upload</button>
    </form>

    <script>
        // Gerar ID temporário único
        document.getElementById('entityId').value = `temp_${Date.now()}`;
        
        document.getElementById('uploadForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            
            try {
                const response = await fetch('http://localhost:3000/api/files/upload', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    console.log('✅ Upload realizado!');
                    console.log('🆔 IDs:', result.files.map(f => f.fileId));
                    
                    // Salvar IDs para usar no registro
                    localStorage.setItem('documentIds', JSON.stringify(result.files.map(f => f.fileId)));
                    
                    alert('Upload realizado com sucesso! IDs salvos para registro.');
                } else {
                    alert('Erro no upload: ' + result.error);
                }
            } catch (error) {
                alert('Erro: ' + error.message);
            }
        });
    </script>
</body>
</html>
```

---

## 📤 Resposta do Upload

### ✅ Sucesso (200 OK)
```json
{
  "success": true,
  "message": "Arquivos enviados com sucesso",
  "files": [
    {
      "fileId": "caf452b4-5bd2-4260-8966-eab441190cb5",
      "filename": "1704067200000_abc123def_documento_frente.pdf",
      "originalFilename": "documento_frente.pdf",
      "duplicate": false,
      "compressed": true,
      "originalSize": 1048576,
      "storedSize": 524288,
      "referenceId": "ref-uuid-1"
    },
    {
      "fileId": "4ef2997f-200e-481d-bcd8-e2300fa7ef5d",
      "filename": "1704067200000_def456ghi_documento_verso.pdf",
      "originalFilename": "documento_verso.pdf",
      "duplicate": false,
      "compressed": true,
      "originalSize": 987654,
      "storedSize": 493827,
      "referenceId": "ref-uuid-2"
    }
  ]
}
```

### ❌ Erro de Validação (400 Bad Request)
```json
{
  "success": false,
  "error": "entityType, entityId e referenceType são obrigatórios"
}
```

### ❌ Arquivo Muito Grande (413 Payload Too Large)
```json
{
  "success": false,
  "error": "Arquivo muito grande. Limite: 10MB"
}
```

### ❌ Tipo de Arquivo Inválido (400 Bad Request)
```json
{
  "success": false,
  "error": "Tipo de arquivo não permitido. Apenas PDF, PNG e JPG são aceitos."
}
```

---

## 📋 Etapa 2: Registro do Usuário

### 🔗 Endpoint de Registro
```
POST http://localhost:3000/api/register/user
```

### 📝 Usando os IDs dos Arquivos
```json
{
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
}
```

### ✅ Resposta do Registro (201 Created)
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
    "created_at": "2025-01-15T14:26:10.049Z",
    "linked_files": 2
  }
}
```

---

## 🔧 Implementação Completa

### 📱 Função JavaScript Completa
```javascript
class DocumentUploader {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  // Gerar ID temporário único
  generateTempId() {
    return `temp_${Date.now()}`;
  }

  // Upload de documentos
  async uploadDocuments(files, entityId = null) {
    if (!entityId) {
      entityId = this.generateTempId();
    }

    const formData = new FormData();
    
    // Adicionar arquivos
    files.forEach(file => {
      formData.append('files', file);
    });
    
    // Adicionar metadados
    formData.append('entityType', 'user');
    formData.append('entityId', entityId);
    formData.append('referenceType', 'document');
    formData.append('description', 'Documentos de identidade para registro');
    
    try {
      const response = await fetch(`${this.baseUrl}/api/files/upload`, {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        return {
          success: true,
          fileIds: result.files.map(f => f.fileId),
          entityId: entityId,
          files: result.files
        };
      } else {
        return {
          success: false,
          error: result.error
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Registro de usuário com documentos
  async registerUserWithDocuments(userData, documentFiles) {
    try {
      // 1. Upload dos documentos
      const uploadResult = await this.uploadDocuments(documentFiles);
      
      if (!uploadResult.success) {
        return {
          success: false,
          error: 'Falha no upload dos documentos',
          details: uploadResult.error
        };
      }

      // 2. Registro do usuário
      const registrationData = {
        ...userData,
        document_files: uploadResult.fileIds
      };

      const response = await fetch(`${this.baseUrl}/api/register/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });

      const result = await response.json();

      if (result.success) {
        return {
          success: true,
          user: result.user,
          uploadedFiles: uploadResult.files
        };
      } else {
        return {
          success: false,
          error: result.message || 'Erro no registro do usuário'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Exemplo de uso
const uploader = new DocumentUploader();

// Dados do usuário
const userData = {
  name: 'Maria Silva',
  email: 'maria@example.com',
  password: 'MinhaSenh@123!',
  document_number: '98765432100',
  document_type: 'cpf',
  phone: '11999888777'
};

// Arquivos (obtidos de um input file)
const documentFiles = [
  document.getElementById('frente').files[0],
  document.getElementById('verso').files[0]
];

// Processo completo
uploader.registerUserWithDocuments(userData, documentFiles)
  .then(result => {
    if (result.success) {
      console.log('✅ Usuário registrado com sucesso!');
      console.log('👤 Usuário:', result.user);
      console.log('📁 Arquivos:', result.uploadedFiles);
    } else {
      console.error('❌ Erro:', result.error);
    }
  });
```

---

## 🔍 Validações e Limitações

### ✅ Validações Automáticas
- **Tipos de arquivo**: Apenas PDF, PNG, JPEG/JPG
- **Tamanho**: Máximo 10MB por arquivo
- **Quantidade**: Máximo 5 arquivos por requisição
- **Campos obrigatórios**: entityType, entityId, referenceType

### 📏 Limitações
| Aspecto | Limite |
|---------|--------|
| Tamanho por arquivo | 10MB |
| Arquivos por requisição | 5 |
| Tipos aceitos | PDF, PNG, JPEG, JPG |
| Autenticação | Não requerida |

---

## 🛡️ Boas Práticas

### 🔒 Segurança
- ✅ **IDs únicos**: Use timestamps para evitar conflitos
- ✅ **Validação client-side**: Verifique tipos antes do upload
- ✅ **Tratamento de erros**: Implemente retry logic
- ✅ **Feedback visual**: Mostre progresso do upload

### 📱 UX/UI
- ✅ **Preview**: Mostre preview dos arquivos selecionados
- ✅ **Drag & Drop**: Implemente interface intuitiva
- ✅ **Validação visual**: Indique arquivos válidos/inválidos
- ✅ **Progress bar**: Mostre progresso do upload

### 🔧 Técnicas
```javascript
// Validação de arquivo antes do upload
function validateFile(file) {
  const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Tipo de arquivo não permitido' };
  }
  
  if (file.size > maxSize) {
    return { valid: false, error: 'Arquivo muito grande (máx: 10MB)' };
  }
  
  return { valid: true };
}

// Preview de imagem
function previewImage(file, previewElement) {
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewElement.src = e.target.result;
      previewElement.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// Progress bar
function uploadWithProgress(formData, progressCallback) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        progressCallback(percentComplete);
      }
    });
    
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`HTTP ${xhr.status}`));
      }
    });
    
    xhr.addEventListener('error', () => {
      reject(new Error('Erro de rede'));
    });
    
    xhr.open('POST', 'http://localhost:3000/api/files/upload');
    xhr.send(formData);
  });
}
```

---

## 🧪 Testes

### 📋 Checklist de Testes
- [ ] Upload de arquivo PNG
- [ ] Upload de arquivo PDF
- [ ] Upload de arquivo JPEG
- [ ] Upload múltiplo (frente + verso)
- [ ] Validação de tamanho (>10MB)
- [ ] Validação de tipo (arquivo inválido)
- [ ] Registro com IDs válidos
- [ ] Registro com IDs inválidos
- [ ] Processo completo (upload + registro)

### 🔧 Script de Teste
```bash
# Teste básico de upload
curl -X POST http://localhost:3000/api/files/upload \
  -F "files=@test_document.pdf" \
  -F "entityType=user" \
  -F "entityId=temp_test_123" \
  -F "referenceType=document" \
  -F "description=Teste de upload"

# Verificar resposta e extrair fileId para usar no registro
```

---

## 📞 Suporte e Troubleshooting

### ❓ Problemas Comuns

#### 1. "Tipo de arquivo não permitido"
**Solução**: Verifique se o arquivo é PDF, PNG ou JPEG/JPG

#### 2. "Arquivo muito grande"
**Solução**: Reduza o tamanho para menos de 10MB

#### 3. "entityType, entityId e referenceType são obrigatórios"
**Solução**: Certifique-se de enviar todos os campos obrigatórios

#### 4. "Nenhum arquivo foi enviado"
**Solução**: Verifique se o campo 'files' está sendo enviado corretamente

### 📧 Contato
- **Email**: suporte@pixley.com
- **Slack**: #dev-backend
- **Docs**: `/docs/API_DOCUMENTATION.md`

---

**Última atualização**: Janeiro 2025  
**Versão da API**: 2.0.0  
**Endpoint**: `/api/files/upload` + `/api/register/user`