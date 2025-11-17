# Sakura Coffee & Sushi ☕🍣

Projeto simples criado para praticar **Git**, **GitHub**, **branches** (`main` / `developer`), 
**features**, **hotfix** e **versionamento automático com GitHub Actions**.

---

## 🎯 Objetivo do projeto

Simular um pequeno sistema de front-end para uma cafeteria que também serve sushi, 
com foco em:

- Organização de branches (`main` e `developer`)
- Criação de features e hotfixes (partindo sempre da `developer`)
- Versionamento automático via **GitHub Actions** (tags semânticas)
- Documentação básica do fluxo de trabalho no README

---

## 🧱 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (vanilla)**
- **Git & GitHub**
- **GitHub Actions** (workflow de versionamento automático)

---

## 🌳 Estrutura de branches

- `main`  
  - Branch principal (estável).  
  - Nesta simulação, **não recebe commits diretos**.  
  - Serve apenas como base “limpa” do projeto.

- `developer`  
  - Branch onde todo o desenvolvimento é feito.  
  - Aqui entram: **features**, **ajustes** e **hotfixes**.

### Fluxo utilizado

1. Criar/ajustar código na branch `developer` (ou em uma branch derivada dela).
2. Adicionar arquivos e commitar com mensagem padronizada (`feat: ...`, `fix: ...`, etc.).
3. Dar `push` para a branch `developer`.
4. O **GitHub Actions** é executado e cria uma nova **tag de versão semântica** automaticamente.

---

## 🔁 Versionamento automático

O arquivo de workflow está em:

```text
.github/workflows/autoversion.yml
```

Comportamento esperado (exemplo de configuração comum):

- A cada mudança integrada na `developer`, o workflow:
  - Analisa as mensagens de commit.
  - Define se o *bump* será de **major**, **minor** ou **patch**.
  - Cria (ou atualiza) uma tag do tipo `vX.Y.Z` no repositório.

> Observação: O funcionamento exato depende da configuração do `autoversion.yml`.  
> Verifique o arquivo para entender os gatilhos (`on:`) e a lógica de cálculo de versão.

---

## ✉️ Convenção de commits (sugerida)

Para que o versionamento automático funcione bem, recomenda-se seguir o padrão **Conventional Commits**.

Exemplos:

- `feat: adicionar seção de sobremesas`
- `fix: corrigir alinhamento do card de bebidas`
- `docs: atualizar instruções no README`
- `chore: ajustar configuração do workflow`

Regras básicas:

- Use um dos tipos principais: `feat`, `fix`, `docs`, `chore`, etc.
- Sempre no formato:  
  `tipo: descrição curta e objetiva`

---

## ▶️ Como executar o projeto localmente

1. **Clonar o repositório**

   ```bash
   git clone git@github.com:SEU_USUARIO/SEU_REPO.git
   cd SEU_REPO
   ```

2. **Trocar para a branch de desenvolvimento**

   ```bash
   git checkout developer
   ```

3. **Abrir o projeto no navegador**

   - Abrir diretamente o arquivo `index.html`, **ou**
   - Subir um servidor simples, por exemplo com Python 3:

     ```bash
     python -m http.server 8000
     ```

     E acessar em: `http://localhost:8000`

---

## 🧪 Fluxo de desenvolvimento sugerido

1. Atualizar a branch `developer`:

   ```bash
   git checkout developer
   git pull
   ```

2. Criar uma branch de trabalho baseada em `developer`:

   - Para features:  
     ```bash
     git checkout -b feature/nome-da-feature
     ```
   - Para hotfixes:  
     ```bash
     git checkout -b hotfix/descricao-do-hotfix
     ```

3. Implementar as alterações e commitar:

   ```bash
   git add .
   git commit -m "feat: descrição da mudança"
   git push -u origin feature/nome-da-feature
   ```

4. Abrir um **Pull Request** apontando para `developer`.

5. Após o merge na `developer`, o **GitHub Actions** executa o workflow e gera/atualiza a tag de versão.

---

## 📚 Próximos passos (idéias de evolução)

- Criar páginas separadas para **cardápio de café** e **cardápio de sushi**
- Adicionar responsividade mais avançada (mobile-first)
- Incluir testes básicos de interface (ex.: Jest + Testing Library, caso evolua o projeto)
- Publicar a aplicação no **GitHub Pages** ou outro serviço de hosting estático

---
