# Markdown Links

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Instalação](#2-instalacao)
* [4. Comandos e funcionalidades](#4-comandos-e-funcionalidades)
* [5. Critérios de aceitação mínimos do projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
* [6. Entregáveis](#6-entregáveis)
* [7. Hacker edition](#7-hacker-edition)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)
* [10. Dividindo o problema - babies steps](#10-dividindo-o-problema)

***

## 1. Resumo do projeto

Este projeto consiste em uma API executada pelo Node.js e composta por uma ferramenta de linha de comando `(CLI)`, que permite ao usuário executar uma biblioteca diretamente pelo terminal. A API realiza a leitura de arquivos no formato `Markdown`, identificando os links contidos no arquivo e seus respectivos status https.

***

## 2. Instalação

* `npm install md-links-osikmelina`

***

## 3. Comandos e funcionalidades

A API permite a execução de quatro formas:

* `md-links caminho-do-arquivo`

Imprime no terminal o caminho do arquivo, a URL encontrada e o texto correspondente ao nome do link:

* `md-links caminho-do-arquivo --validate`

Acrescenta à listagem anterior o respectivo status https de cada link, indicando quais estão válidos, quais estão quebrados e quais não existem:

* `md-links caminho-do-arquivo --stats`

Entrega o número total de links encontrados e quantos deles são únicos, ou seja, contabiliza links repetidos uma única vez:

* `md-links caminho-do-arquivo --stats --validate`

Acrescenta à listagem anterior a quantidade de links válidos/ativos:

* Tratamento de erros

***

## 4. Critérios de aceitação mínimos do projeto

Para começar este projeto você deverá fazer um _fork_ e _clonar_ este
repositório.

Antes de começar o código, é necessário criar um plano de ação. Ele deve estar
detalhado no `README.md` do seu repositório e em uma série de _issues_ e
_milestones_ para priorizar e organizar o trabalho, e para fazer um
acompanhamento do seu progresso.

Dentro de cada _milestone_ serão criados e atribuidos as _issues_
que considerar necessários.

## 5. Considerações técnicas

* `README.md` com descrição do módulo, instruções de instalação e uso,
  documentação da API e exemplos. Tudo que for relevante para qualquer
  desenvolvedora saber como utilizar a sua biblioteca sem inconvenientes.
* `index.js`: este arquivo deve exportar a função `mdLinks`.
* `package.json` deve possuir o nome, versão, descrição, autor, licença,
  dependências e scripts (pretest, test e etc).
* `.editorconfig` com a configuração para o editor de texto. Este arquivo não
  deve ser alterado.
* `.eslintrc` com a configuração para o linter. Este arquivo contém uma
configuração básica para ESLint, se quiser colocar regras adicionais
como Airbnb, você deverá modificar este arquivo.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não devem
  ser incluídas no controle de versão (`git`).
* `test/md-links.spec.js` deve conter os testes unitários para a função
  `mdLinks()`. A sua implementação deve rodar estes testes.

## 6. Testes

## 7. Checklist

### General

* [ ] Poder instalar via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog das implementações da sua biblioteca
* [ ] Documentação técnica da sua biblioteca
* [ ] Guia de uso e instalação da biblioteca

### API `mdLinks(path, opts)`

* [ ] O módulo exporta uma função com a interface (API) esperada
* [ ] Implementa suporte para arquivo individual
* [ ] Implementa suporte para diretórios
* [ ] Implementa `options.validate`

### CLI

* [ ] Possuir o executável `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado
* [ ] Implementar `--validate`
* [ ] Implementar `--stats`

### Testes

* [ ] Os testes unitários devem cobrir no mínimo 70% dos statements, functions,
  lines e branches.
* [ ] Rodar os testes e linter (`npm test`).

## 8. Ferramentas utilizadas

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="30px";/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" height="30px";/>
</div>  
