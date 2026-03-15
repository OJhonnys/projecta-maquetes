# Projecta Maquetes — Site Institucional

Site institucional da **Projecta Maquetes**, empresa especializada em maquetes arquitetônicas de alta precisão. Desenvolvido em HTML, CSS e JavaScript puro, sem frameworks ou dependências.

---

## Estrutura de Pastas

```
projecta-maquetes/
│
├── index.html              → Página principal
│
├── pages/
│   ├── galeria.html        → Galeria de projetos
│   ├── projeto.html        → Página dinâmica de projeto individual
│   └── sobre.html          → Página sobre a empresa
│
├── css/
│   ├── style.css           → Estilos globais e variáveis
│   ├── responsive.css      → Media queries (tablet e mobile)
│   ├── galeria.css         → Estilos da galeria e cards
│   ├── projeto.css         → Estilos da página de projeto
│   └── sobre.css           → Estilos da página sobre
│
├── js/
│   ├── script.js           → Navbar scroll + menu mobile
│   └── projeto.js          → Dados dos projetos + carrossel
│
└── assets/
    ├── images/
    │   ├── projecta-logo.png         → Logo branca (hero)
    │   ├── projecta-logo-black.png   → Logo preta (navbar)
    │   └── projects/                 → Fotos dos projetos
    └── fonts/                        → Fontes locais (opcional)
```

---

## Páginas

### `index.html` — Home
- Navbar fixa que transiciona de transparente para branca ao rolar
- Hero com logo animada sobre foto de fundo
- Lista de projetos em destaque com hover de imagem
- Seção Quem Somos com textos e estatísticas
- Seção Contato com telefone, e-mail e WhatsApp clicável
- Footer

### `pages/galeria.html` — Galeria
- Grade de 3 colunas com todos os projetos
- Hover escurece a foto e destaca o nome
- Cards com nome do projeto e ano

### `pages/projeto.html` — Projeto Individual
- Página dinâmica — carrega o projeto correto pelo `?id=` na URL
- Header com nome, tipo, escala, ano e descrição
- Foto principal widescreen
- Grid de 6 fotos — ao clicar abre carrossel
- Carrossel com overlay escuro, setas, contador e navegação por teclado (← → ESC)
- Seção de outros projetos ao final

### `pages/sobre.html` — Sobre
- História da empresa em duas colunas com imagem
- Diferenciais do serviço em grid de 4 itens
- Processo de trabalho em 4 etapas
- CTA para orçamento via WhatsApp

---

## Como Adicionar um Projeto

Abre o arquivo `js/projeto.js` e adiciona um novo objeto no array `PROJETOS`:

```js
{
  id: 9,
  titulo: "Nome do Projeto",
  tipo: "RESIDENCIAL",
  escala: "ESCALA 1:100",
  ano: "2025",
  descricao: "Descrição do projeto com até 300 caracteres.",
  fotoPrincipal: "assets/images/projects/nome-capa.jpg",
  fotos: [
    "assets/images/projects/nome-1.jpg",
    "assets/images/projects/nome-2.jpg",
    "assets/images/projects/nome-3.jpg",
    "assets/images/projects/nome-4.jpg",
    "assets/images/projects/nome-5.jpg",
    "assets/images/projects/nome-6.jpg",
  ],
},
```

Depois adiciona o card na `galeria.html` e o link na `index.html`.

---

## Responsividade

| Breakpoint | Dispositivo |
|---|---|
| `max-width: 1024px` | Tablet |
| `max-width: 768px` | Mobile |
| `max-width: 480px` | Mobile pequeno |

No mobile o menu de navegação vira um **hamburguer** que expande ao clicar.

---

## Tecnologias

- HTML5
- CSS3 (variáveis, grid, flexbox, animações)
- JavaScript vanilla (sem frameworks)
- Google Fonts — [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville)

---

## Como Rodar Localmente

Não precisa instalar nada. Basta abrir o `index.html` no navegador ou usar o **Live Server** do VSCode:

1. Instala a extensão **Live Server** no VSCode
2. Clica com botão direito no `index.html`
3. Seleciona **"Open with Live Server"**
4. Acessa `http://127.0.0.1:5500`

---

## Contato

**Projecta Maquetes**
- Site: [projectamaquetes.com.br](https://projectamaquetes.com.br)
- Instagram: [@projectamaquetes](https://instagram.com/projectamaquetes)
- WhatsApp: (41) 99661-4750
- E-mail: contato@projectamaquetes.com.br
