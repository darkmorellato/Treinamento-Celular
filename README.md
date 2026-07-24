# Treinamento Interativo de Smartphones

Software de treinamento visual e interativo para novos funcionários sobre o funcionamento técnico de smartphones.

## 🚀 Tecnologias

- **React 19** + **TypeScript** - Interface e tipagem
- **Vite** - Build tool ultrarrápida
- **Tailwind CSS v4** - Estilização moderna
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones

## 📦 Estrutura do Projeto

```text
src/
├── data/
│   ├── types.ts # Tipos TypeScript
│   └── components.ts # Conteúdo dos componentes
├── components/
│   ├── SmartphoneDiagram.tsx # Diagrama SVG interativo
│   ├── DetailPanel.tsx # Painel de explicações
│   ├── Sidebar.tsx # Navegação lateral
│   ├── IntroOverlay.tsx # Tela inicial
│   └── CompletionScreen.tsx # Tela de conclusão
├── hooks/
│   └── useTraining.ts # Estado e regras de treinamento
├── test/
│   ├── setup.ts # Configuração de testes
│   └── useTraining.test.ts # Testes unitários do hook
├── App.tsx # Componente principal
├── main.tsx # Ponto de entrada
└── index.css # Estilos globais + design tokens
```

## 🛠️ Instalação

```bash
npm install
```

## 💻 Execução

```bash
npm run dev
```

Acesse: http://localhost:5173

## 🧪 Testes

```bash
npm run test
```

ou

```bash
npm run test:run
```

## 🏗️ Build para produção

```bash
npm run build
```

## 📚 Conteúdo do Treinamento

1. ✅ **Processadores** - Arquitetura ARM, CPU, GPU, NPU
2. ✅ **Sistema de Câmeras** - Sensores CMOS, lentes, OIS/EIS
3. ✅ **Bateria** - Tecnologias Li-ion, carregamento rápido
4. ✅ **Tela** - OLED, AMOLED, LTPO, taxa de atualização
5. ✅ **NFC** - Funcionamento, modos de operação, aplicações
6. ✅ **Durabilidade** - IP64, IP67, IP68, IP69K

## 🎨 Funcionalidades

- [x] Diagrama SVG interativo animado
- [x] Clique em componentes para revelar explicações detalhadas
- [x] Sistema de progresso visual
- [x] Animações suaves (Framer Motion)
- [x] Interface moderna com tema escuro
- [x] Responsivo (mobile + desktop)
- [x] Acessível (keyboard, ARIA labels)
- [x] Fechar painel com tecla ESC

## 📖 Como Usar

1. Clique em qualquer componente destacado no diagrama
2. Leia as explicações detalhadas no painel lateral
3. Acompanhe seu progresso na barra superior
4. Pressione ESC para fechar o painel de explicação

## 🎯 Objetivo

Capacitar novos funcionários com conhecimento técnico sólido sobre smartphones, facilitando o atendimento ao cliente e suporte técnico.
