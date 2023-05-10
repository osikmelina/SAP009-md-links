# Markdown Links

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Instalação](#2-instalação)
* [3. Comandos e funcionalidades](#3-comandos-e-funcionalidades)
* [4. Considerações técnicas](#6-considerações-técnicas)
* [5. Testes](#5-testes)
* [6. Ferramentas utilizadas](#7-ferramentas-utilizadas)

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

![caminho](https://github.com/osikmelina/SAP009-md-links/assets/107154514/b1b613b1-e49b-4417-877b-66231640183d)

Imprime no terminal o caminho do arquivo, a URL encontrada e o texto correspondente ao nome do link:

* `md-links caminho-do-arquivo --validate`

![validate](https://github.com/osikmelina/SAP009-md-links/assets/107154514/eaa3d3d9-f23d-4579-a977-8c617112d4a3)

Acrescenta à listagem anterior o respectivo status https de cada link, indicando quais estão válidos, quais estão quebrados e quais não existem:

* `md-links caminho-do-arquivo --stats`

![stats](https://github.com/osikmelina/SAP009-md-links/assets/107154514/94426d9a-aae3-4c6c-b8fb-e6643c8be6a0)

Entrega o número total de links encontrados e quantos deles são únicos, ou seja, contabiliza links repetidos uma única vez:

* `md-links caminho-do-arquivo --stats --validate`

![stats-validate](https://github.com/osikmelina/SAP009-md-links/assets/107154514/01b1813d-fb19-4980-be3f-283f2b902c5a)

Acrescenta à listagem anterior a quantidade de links válidos/ativos:

* Tratamento de erros

***

## 4. Considerações técnicas

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

## 5. Testes

***

## 6. Ferramentas utilizadas

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
