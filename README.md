# Kamila AH Digital — Landing Page

Landing page moderna e responsiva da **Kamila Siqueira**, Estrategista Digital especializada em crescimento (growth), posicionamento de marca e tráfego pago para pequenos e médios negócios.

## 🎯 Sobre

Kamila é uma **estrategista digital** que acredita que o marketing é, acima de tudo, uma troca entre pessoas. Seu trabalho une análise técnica com criatividade, construindo estratégias personalizadas onde a tecnologia é o suporte, mas a inteligência humana é o motor.

### Especialidades

- **Marketing Completo 360 Estrutura de Crescimento** — Growth, posicionamento e processos comerciais que convertem
- **Social Media, Posicionamento & Conteúdo** — Construção de autoridade digital e narrativas estratégicas
- **Tráfego Pago, Landing Pages & Dados** — Campanhas de performance, páginas de conversão e inteligência de dados

## ✨ Funcionalidades

- 🎨 **Design responsivo** — Adaptado para mobile, tablet e desktop
- 🌓 **Tema claro/escuro** — Alternância automática com suporte SVG em grades de fundo
- 📊 **Dashboard interativo** — Gráficos de barras e linhas integrados para visualização de impacto
- 💬 **Formulário de proposta** — Captcha reCAPTCHA v3 e integração com WhatsApp/email
- ⚡ **Performance otimizada** — Code-splitting, lazy loading de componentes, animações eficientes
- ♿ **Acessibilidade** — Semântica HTML5, contraste adequado, navegação por teclado
- 📱 **SEO-friendly** — Meta tags dinâmicas, sitemap, robots.txt

## 🛠️ Tech Stack

| Aspecto             | Tecnologia                                    |
| ------------------- | --------------------------------------------- |
| **Framework**       | React 19.2 + TypeScript                       |
| **Build & Dev**     | Vite (HMR rápido)                             |
| **Estilos**         | Styled Components + Tema personalizado        |
| **Animações**       | Framer Motion                                 |
| **Formulários**     | React Hook Form                               |
| **Ícones**          | Lucide React                                  |
| **Routing**         | React Router v7                               |
| **Observabilidade** | React Intersection Observer (lazy animations) |

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Hero/           # Seção hero com CTA
│   ├── About/          # Quem é Kamila
│   ├── Services/       # Entregas (estratégia, social media, tráfego)
│   ├── Stats/          # Números em destaque
│   ├── Dashboard/      # Gráficos de impacto (barras e linhas)
│   ├── Testimonials/   # Depoimentos de clientes
│   ├── Proposal/       # Formulário de proposta
│   ├── Navbar/         # Navegação
│   ├── Footer/         # Rodapé
│   ├── ContactCTA/     # CTA de contato
│   └── Button/         # Componente botão base
│
├── lib/
│   ├── data/          # Dados estáticos (serviços, testimoniais, dashboard)
│   └── types/         # Interfaces TypeScript
│
├── pages/
│   ├── Home/          # Página principal
│   └── Proposal/      # Página de proposta detalhada
│
├── styles/
│   ├── global.ts      # Estilos globais
│   ├── theme.ts       # Temas (dark/light)
│   ├── ThemeContext.tsx # Contexto de tema
│   └── styled.d.ts    # Tipagem para styled-components
│
├── assets/            # Imagens, fontes, etc
├── App.tsx            # Componente raiz
└── main.tsx           # Entry point

```

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Instalação

```bash
# Clonar repositório
git clone <seu-repo>
cd lading-page-kamila

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

O site estará disponível em `http://localhost:5173`

## 📊 Componentes Principais

### Dashboard

- **Gráfico de barras** — Comparativo de receita antes/depois
- **Gráfico de linhas** — Análise por indicador com abas interativas
- **Tabelas por cliente** — Detalhamento de métricas (receita, leads, conversão, CAC, ROAS)

### Formulário de Proposta

- Validação em tempo real
- Integração com reCAPTCHA v3
- Envio para WhatsApp ou email
- Múltiplas opções de interesse

### Seções

1. **Hero** — Headline, subtítulo, CTA principal + vídeo YouTube
2. **About** — Bio de Kamila + valores
3. **Services** — 3 principais entregas com detalhes expandidos
4. **Stats** — KPIs em destaque (230+ projetos, 4+ anos, 100% sob medida)
5. **Dashboard** — Impacto real com 3 cases
6. **Testimonials** — Carrossel auto-play de depoimentos
7. **Proposal** — Formulário completo com integração

## 🎨 Paleta de Cores

- **Primary:** `#C48B9F` (rosa rosado)
- **Secondary:** `#D4A574` (bege quente)
- **Primary Light:** `#E8B4B8` (rosa claro)
- **Temas:** Dark mode e Light mode com suporte a system preference

## 📱 Responsive Design

- **Mobile** — `30rem` (480px)
- **Tablet** — `48rem` (768px)
- **Desktop** — `64rem` (1024px)
- **Wide** — `75rem` (1200px)

## 📈 Performance

- ✅ Lazy loading de componentes
- ✅ Animações de entrada com Framer Motion
- ✅ SVG puro para gráficos (sem dependências externas)
- ✅ Otimização de imagens
- ✅ Code-splitting automático do Vite

## 🔗 Links Úteis

- **Site ao vivo:** [kamila-ah-digital.com](https://kamila-ah-digital.com)
- **Instagram:** [@kamila_ahdigital](https://www.instagram.com/kamila_ahdigital/)
- **LinkedIn:** [Kamila Siqueira](https://www.linkedin.com/in/kamila-siqueira-41596b30a/)

## 📝 Linting & Formatting

```bash
# Rodar ESLint
npm run lint
```

## 🤝 Contribuição

Caso encontre bugs ou tenha sugestões, abra uma issue ou PR.

## 📄 Licença

Projeto propriedade de Kamila AH Digital. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando React + TypeScript + Vite**
