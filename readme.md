# 🤖 Chat IA Fullstack (Local + Sem Custos)

Uma aplicação completa de chat com inteligência artificial, inspirada no ChatGPT, utilizando IA local (offline), backend em Node.js e frontend em React com TypeScript.

---

# 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar arquitetura fullstack moderna
* Integrar IA em aplicações reais
* Criar uma experiência de chat semelhante ao ChatGPT
* Utilizar IA local sem custos ou dependência de APIs externas

---

# 🚀 Tecnologias utilizadas

### Backend

* Node.js
* Express
* Supabase (armazenamento de histórico)

### Frontend

* React
* TypeScript
* TailwindCSS (estilização)

### Inteligência Artificial

* Ollama
* Modelo: `llama3`

---

# 🧠 Como funciona

Fluxo da aplicação:

```
Usuário → Frontend → Backend → Ollama → Resposta → Frontend
```

### Etapas:

1. Usuário envia mensagem no frontend
2. Backend recebe via API REST (`/chat`)
3. Backend envia prompt para o Ollama (IA local)
4. IA processa e retorna resposta
5. Backend salva no banco (opcional)
6. Frontend exibe a resposta

---

# 🔥 Funcionalidades

* 💬 Chat em tempo real
* 🤖 IA local (offline)
* 🇧🇷 Respostas em português
* 💾 Persistência de mensagens (Supabase)
* 🎨 Interface moderna estilo ChatGPT
* ⚡ UX fluida (limpa input, scroll automático)

---

# 📁 Estrutura do projeto

## Backend

```
src/
  config/
    supabase.js
  controllers/
    chat.controller.js
  routes/
    chat.routes.js
  services/
    ai.service.js
  app.js
  server.js
```

## Frontend

```
src/
  App.tsx
  types.ts
  index.css
```

---

# ⚙️ Como rodar o projeto

## 🔹 1. Clonar o repositório

```bash
git clone <repo-url>
cd project-manager-ai
```

---

## 🔹 2. Rodar o Backend

```bash
cd backend
npm install
npm run dev
```

Servidor estará em:

```
http://localhost:3000
```

---

## 🔹 3. Rodar o Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse:

```
http://localhost:5173
```

---

## 🔹 4. Instalar e rodar a IA (Ollama)

### Instalar:

https://ollama.com/download

### Baixar modelo:

```bash
ollama pull llama3
```

### Rodar:

```bash
ollama run llama3
```

---

# 🧪 Testando

1. Abra o frontend
2. Digite uma mensagem
3. Veja a resposta da IA aparecer

---

# 🔐 Variáveis de ambiente

## Backend `.env`

```env
SUPABASE_URL=...
SUPABASE_KEY=...
```

---

# 🎯 Objetivo técnico

Este projeto demonstra:

* Arquitetura em camadas (controller, service, routes)
* Integração com IA
* Uso de APIs REST
* Gerenciamento de estado no frontend
* Tipagem com TypeScript
* Separação clara de responsabilidades

---

# 💡 Diferenciais

* IA 100% offline (sem custo)
* Estrutura profissional de backend
* Frontend moderno e responsivo
* Fácil expansão (multi-chat, login, etc.)

---

# 🚀 Possíveis melhorias

* 🧠 Memória de contexto (conversa contínua)
* ⚡ Streaming de resposta (digitando)
* 🔐 Autenticação de usuários
* 💬 Múltiplas conversas
* 🧾 Suporte a Markdown (código formatado)
* 🌐 Deploy em produção

---

# 📌 Conclusão

Este projeto é uma base sólida para aplicações modernas com IA, podendo evoluir para um produto real.

---

# 👨‍💻 Autor

Desenvolvido para estudo e prática de desenvolvimento fullstack com IA.
