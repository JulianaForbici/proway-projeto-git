# Sakura Coffee & Sushi ☕🍣

Projeto simples criado para praticar **Git**, **GitHub**, **branches** (`main` / `developer`), 
**features**, **hotfix** e **versionamento automático com GitHub Actions**.

## 🎯 Objetivo do projeto

Simular um pequeno sistema de front-end para uma cafeteria que também serve sushi, 
com o foco em:

- Organização de branches (`main` e `developer`)
- Criação de features e hotfix diretamente na `developer`
- Versionamento automático via GitHub Actions (tags semânticas)
- Documentação básica em README

## 🧱 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Git & GitHub
- GitHub Actions

## 🌳 Estrutura de branches

- `main`  
  Branch principal. Nesta simulação, **não recebe commits diretos**.
  Serve apenas como base “limpa” do projeto.

- `developer`  
  Branch onde todo o desenvolvimento é feito: features, ajustes e hotfixes.

Fluxo utilizado:

1. Criar/ajustar código na branch `developer`.
2. Adicionar arquivos e commitar com mensagem padronizada (`feat: ...`, `fix: ...`, etc.).
3. Dar `push` para a branch `developer`.
4. GitHub Actions roda e cria uma nova tag de versão automaticamente.

## 🔁 Versionamento automático

O arquivo de workflow está em:

```text
.github/workflows/autoversion.yml