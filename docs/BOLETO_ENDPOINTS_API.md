# 📋 API de Boletos - Documentação Completa

Esta documentação descreve todos os endpoints disponíveis para gerenciamento de boletos no sistema PixOnChain.

## 📍 Base URL
```
http://localhost:3000/api/boletos
```

## 🔐 Autenticação
Todos os endpoints requerem autenticação via Bearer Token no header:
```
Authorization: Bearer {seu_token_jwt}
```

---

## 💳 Endpoints de Pagamento

### 1. Realizar Pagamento de Boleto
**POST** `/pay`

Processa o pagamento de um boleto através da fila de processamento assíncrono.

#### Parâmetros da Requisição
```json
{
  "codBarraLinhaDigitavel": "34191790010104351004791020150008291070026000",
  "valorPagar": 260.00,
  "dataVencimento": "2024-12-31"
}
```

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `codBarraLinhaDigitavel` | string | ✅ | Código de barras ou linha digitável do boleto |
| `valorPagar` | number | ❌ | Valor a ser pago (será extraído do código se não fornecido) |
| `dataVencimento` | string | ❌ | Data de vencimento no formato YYYY-MM-DD |

#### Resposta de Sucesso (200)
```json
{
  "success": true,
  "message": "Boleto adicionado à fila de processamento",
  "boleto": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "txId": "34191790010104351004791020150008291070026000",
    "nominalValue": 260.00,
    "dueDate": "2024-12-31",
    "status": "PENDING",
    "transactionId": "tx_123456789",
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "queueInfo": {
    "jobId": "job_987654321",
    "position": 1
  }
}
```

#### Possíveis Erros
- **400**: Dados inválidos ou código de boleto malformado
- **401**: Token de autenticação inválido
- **403**: Provider PIX não suportado para boletos
- **500**: Erro interno do servidor

---

## 📊 Status de Boletos

### Status Disponíveis
| Status | Descrição |
|--------|-----------|
| `PENDING` | Boleto criado, aguardando pagamento |
| `PAID` | Boleto pago com sucesso |
| `EXPIRED` | Boleto vencido |
| `CANCELLED` | Boleto cancelado |

---

## 🛡️ Endpoints Administrativos (Super Admin)

> **⚠️ IMPORTANTE**: Todos os endpoints administrativos requerem role `super_admin`

### 1. Alterar Status do Boleto
**PATCH** `/{id}/admin/status`

Permite que super_admin altere o status de qualquer boleto no sistema.

#### Parâmetros da Requisição
```json
{
  "status": "PAID",
  "reason": "Pagamento confirmado manualmente via suporte"
}
```

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `status` | string | ✅ | Novo status (PENDING, PAID, CANCELLED, EXPIRED) |
| `reason` | string | ❌ | Motivo da alteração para auditoria |

#### Resposta de Sucesso (200)
```json
{
  "success": true,
  "message": "Status do boleto alterado com sucesso",
  "boleto": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "previousStatus": "PENDING",
    "newStatus": "PAID",
    "updatedAt": "2024-01-15T11:45:00Z",
    "reason": "Pagamento confirmado manualmente via suporte"
  }
}
```

### 2. Alterar Dados do Boleto
**PATCH** `/{id}/admin/data`

Permite que super_admin altere dados específicos de qualquer boleto.

#### Parâmetros da Requisição
```json
{
  "nominalValue": 150.75,
  "dueDate": "2024-12-31",
  "payer": {
    "name": "João Silva",
    "document": "12345678901",
    "email": "joao@email.com"
  },
  "paymentData": {
    "pixKey": "pix@exemplo.com",
    "bankCode": "341"
  },
  "reason": "Correção de dados solicitada pelo cliente"
}
```

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `nominalValue` | number | ❌ | Novo valor nominal do boleto |
| `dueDate` | string | ❌ | Nova data de vencimento (YYYY-MM-DD) |
| `payer` | object | ❌ | Novos dados do pagador |
| `paymentData` | object | ❌ | Novos dados de pagamento |
| `reason` | string | ❌ | Motivo da alteração |

#### Resposta de Sucesso (200)
```json
{
  "success": true,
  "message": "Dados do boleto alterados com sucesso",
  "boleto": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "nominalValue": 150.75,
    "dueDate": "2024-12-31",
    "payer": { /* dados atualizados */ },
    "paymentData": { /* dados atualizados */ },
    "updatedAt": "2024-01-15T11:45:00Z"
  },
  "changes": [
    "valor: 260.00 → 150.75",
    "vencimento: 2024-11-30 → 2024-12-31",
    "dados do pagador alterados"
  ],
  "reason": "Correção de dados solicitada pelo cliente"
}
```

### 3. Listar Todos os Boletos
**GET** `/admin/list`

Permite que super_admin visualize todos os boletos do sistema com filtros e paginação.

#### Parâmetros de Query
| Parâmetro | Tipo | Padrão | Descrição |
|-----------|------|--------|-----------|
| `page` | integer | 1 | Número da página |
| `limit` | integer | 20 | Itens por página (máx: 100) |
| `status` | string | - | Filtrar por status |
| `userId` | string | - | Filtrar por ID do usuário |

#### Exemplo de Requisição
```
GET /admin/list?page=1&limit=10&status=PENDING&userId=user123
```

#### Resposta de Sucesso (200)
```json
{
  "boletos": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "userId": "user123",
      "userEmail": "usuario@email.com",
      "userName": "João Silva",
      "txId": "34191790010104351004791020150008291070026000",
      "nominalValue": 260.00,
      "dueDate": "2024-12-31",
      "status": "PENDING",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## 📋 Endpoints de Consulta

### 1. Listar Boletos do Usuário
**GET** `/`

Lista os boletos do usuário autenticado com filtros e paginação.

#### Parâmetros de Query
| Parâmetro | Tipo | Padrão | Descrição |
|-----------|------|--------|-----------|
| `page` | integer | 1 | Número da página |
| `limit` | integer | 20 | Itens por página |
| `status` | string | - | Filtrar por status |
| `startDate` | string | - | Data inicial (YYYY-MM-DD) |
| `endDate` | string | - | Data final (YYYY-MM-DD) |

### 2. Obter Boleto Específico
**GET** `/{id}`

Retorna os detalhes de um boleto específico do usuário.

### 3. Download do PDF
**GET** `/{id}/pdf`

Faz download do PDF do boleto (se disponível).

### 4. Download do HTML
**GET** `/{id}/html`

Faz download do HTML do boleto (se disponível).

---

## 🔄 Processamento Assíncrono

### Fila de Processamento
Os pagamentos de boleto são processados através da **boletoPaymentQueue** que:

1. **Recebe o job** com os dados do boleto
2. **Processa o pagamento** via provider (InterProvider)
3. **Atualiza o status** automaticamente
4. **Registra logs** detalhados do processo

### Monitoramento
- **Bull Dashboard**: `http://localhost:3000/admin/queues`
- **Logs**: Todos os processos são logados com detalhes
- **Status em tempo real**: Acompanhe o progresso via dashboard

---

## 🔒 Segurança e Auditoria

### Controle de Acesso
- **Usuários normais**: Acesso apenas aos próprios boletos
- **Super Admin**: Acesso total a todos os boletos e funcionalidades administrativas

### Logs de Auditoria
Todas as operações administrativas são registradas com:
- ID do super_admin que executou a ação
- Timestamp da operação
- Valores anteriores e novos
- Motivo da alteração (quando fornecido)

### Validações
- **Status**: Apenas valores válidos são aceitos
- **Dados**: Validação rigorosa de todos os campos
- **Permissões**: Verificação de role em todos os endpoints admin

---

## 🧪 Testes

### Script de Teste
Execute o script de teste para verificar todos os endpoints:

```bash
node tests/integration/boleto/test_boleto_admin_endpoints.js
```

### Configuração do Teste
1. Configure um token de super_admin válido
2. Execute o script para testar todas as funcionalidades
3. Verifique os logs para confirmar o funcionamento

---

## 📝 Exemplos de Uso

### Exemplo 1: Pagamento de Boleto
```javascript
const response = await fetch('/api/boletos/pay', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer seu_token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    codBarraLinhaDigitavel: '34191790010104351004791020150008291070026000',
    valorPagar: 260.00
  })
});
```

### Exemplo 2: Alterar Status (Super Admin)
```javascript
const response = await fetch('/api/boletos/550e8400-e29b-41d4-a716-446655440000/admin/status', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer token_super_admin',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    status: 'PAID',
    reason: 'Pagamento confirmado via suporte'
  })
});
```

---

## 🚨 Códigos de Erro

| Código | Descrição |
|--------|-----------|
| 400 | Dados inválidos ou malformados |
| 401 | Token de autenticação inválido |
| 403 | Acesso negado (permissões insuficientes) |
| 404 | Boleto não encontrado |
| 500 | Erro interno do servidor |

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do servidor
2. Consulte o Bull Dashboard para status das filas
3. Execute os scripts de teste para diagnóstico
4. Entre em contato com a equipe de desenvolvimento

---

*Documentação atualizada em: Janeiro 2024*
*Versão da API: 1.0*