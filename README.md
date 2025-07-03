# 🌐 Jonas' Fullstack Portfolio (Back-End Focus)

Este é um portfólio profissional desenvolvido com **React** e **TailwindCSS**, com suporte a múltiplos idiomas e focado na apresentação de projetos e habilidades back-end.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

## 🌍 Multilíngue

O site suporta os idiomas:

- 🇧🇷 Português
- 🇺🇸 Inglês

Você pode alternar entre os idiomas usando os botões no topo da página.

## 📸 Pré-visualização

![Preview do site](./preview.png)

## 🛠️ Como rodar localmente

```bash
git clone https://github.com/seu-usuario/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Abra no navegador: `http://localhost:5173`

## 🧾 Estrutura

```bash
src/
├── components/         # Componentes reutilizáveis
├── i18n/               # Arquivos de tradução (pt/en)
├── pages/              # Páginas principais (Home)
├── App.tsx             # Componente principal
└── main.tsx            # Entrada da aplicação
```

## 🌐 Deploy no GitHub Pages

1. Instale o pacote:

```bash
npm install gh-pages --save-dev
```

2. Atualize o `package.json`:

```json
"homepage": "https://seu-usuario.github.io/my-portfolio",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Rode o deploy:

```bash
npm run deploy
```

⚠️ Substitua `seu-usuario` pelo seu nome de usuário no GitHub.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
