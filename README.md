# Fabiana Lopes - Spa Brow & Face

Este é o código-fonte completo do projeto "Spa Brow & Face", pronto para ser publicado no GitHub e executado no seu computador. Ele foi construído com as melhores e mais modernas tecnologias do mercado frontend: **React**, **Vite** e **Tailwind CSS**, além de integrar o **Firebase** para gerenciamento de dados dinâmicos.

Todas as imagens, vídeos embebedados e estilos foram mantidos exatamente como na versão original.

## 🚀 Como baixar e subir no GitHub

Como você já tem o **Visual Studio Code**, **Node.js** e **Git** instalados no seu PC, siga os passos abaixo:

### 1. Exportando do AI Studio
No canto superior direito da tela do AI Studio, onde você está desenvolvendo, clique em **Settings (Configurações)** > **Export to GitHub** (ou **Export as ZIP**).
* Se escolher **Export as ZIP**: descompacte a pasta no seu computador.
* Em seguida, abra a pasta descompactada no seu **Visual Studio Code**.

### 2. Rodando o projeto localmente (Visual Studio Code)

Abra o terminal integrado do VS Code (`Ctrl + '` ou `Exibir > Terminal`) e digite os seguintes comandos:

```bash
# Instala todas as dependências do projeto
npm install

# Roda o projeto em modo de desenvolvimento
npm run dev
```

Você verá que o site abrirá na porta `http://localhost:3000` (ou semelhante, mostrada no terminal). Segure `Ctrl` e clique no link no terminal para ver no navegador.

### 3. Subindo o código no GitHub

Ainda no terminal do VS Code, rode os seguintes comandos para subir seu repositório:

```bash
# Inicializa o git no seu projeto (caso não tenha vindo com a pasta oculta .git)
git init

# Adiciona todos os arquivos
git add .

# Cria o primeiro commit
git commit -m "Meu primeiro commit - Projeto Spa Face & Brow"

# Mude a branch para main
git branch -M main

# Vá no github.com, crie um novo repositório vazio, e cole o comando que eles te derem:
# Algo do tipo:
# git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
# git push -u origin main
```

## 🔥 Como o projeto funciona

### Dados e Painel Admin (Firebase)
O banco de dados Firebase já está configurado. Os arquivos `firebase-applet-config.json` e as regras de segurança já estão no projeto de forma segura:
* A aba `/admin` do seu site lhe pedirá para fazer **Login do Google** com seu email cadastrado para acessar o painel de forma segura.
* Nele, você pode adicionar, editar ou ocultar fotos e depoimentos e eles serão atualizados **em tempo real** no site de todos os pacientes.
* Os depoimentos em vídeo mantêm o comportamento de iFrame embebedado (ex: YouTube Embed).

### Edição de Textos ou Configurações Estáticas
* Qualquer ajuste nos textos que não estão no painel Admin (como as FAQs, endereço ou missão) pode ser alterado diretamente dentro da pasta `src/components/`, em arquivos como `FAQ.tsx`, `Hero.tsx` ou `Footer.tsx`.
* A pasta `public/` possui todas as suas imagens e logos salvas e organizadas.

## ✨ Scripts disponíveis

- `npm run dev`: Inicia o servidor local para desenvolvimento.
- `npm run build`: Cria uma versão super otimizada do site (na pasta `dist/`) que está pronta para ser colocada em qualquer lugar da internet (Vercel, Netlify, Firebase Hosting, etc).

Fique à vontade para estilizar e escalar o projeto! Em caso de dúvidas, o código é todo documentado e segue o padrão padrão do mercado de programação moderno.
