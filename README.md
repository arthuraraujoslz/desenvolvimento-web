# Desenvolvimento Web — Atividades Acadêmicas

Este repositório contém as soluções dos desafios e projetos desenvolvidos para a disciplina de Desenvolvimento Web, cobrindo desde a estruturação semântica de páginas com HTML5, estilização com CSS (incluindo Flexbox), introdução aos fundamentos e controle de fluxo com JavaScript, até manipulação avançada de Arrays, DOM e Eventos.

## Sobre o Projeto

O objetivo deste repositório é consolidar o aprendizado prático em desenvolvimento front-end, aplicando boas práticas estruturais, visuais e lógicas exigidas nas atividades da disciplina.

## Etapas do Projeto

### Semana 01 — Estrutura Base e Formulário de Inscrição (HTML)
*Projeto prático desenvolvido com a temática de um Blog.*
- **Estrutura Base:** `<!DOCTYPE html>`, tag `<html>` com `lang="pt-BR"`, `<head>` e `<body>`.
- **Tags Semânticas:** Uso correto de `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>` e `<footer>`.
- **Formulário NATIVO (`<aside>`):** Submissão via método `GET`, agrupamento com `<fieldset>` e validações nativas.

### Semana 02 — Estilização do Formulário de Inscrição (CSS)
*Projeto prático desenvolvido com a temática de um Blog.*
- **Container e Layout:** Configuração com largura máxima, *padding* e uso de `display: flex` com `flex-direction: column` e `gap`.
- **Estilização e Interatividade:** Formatação de inputs, selects e criação de efeitos visuais como `button:hover`.
- **Bônus Flexbox:** Organização lado a lado para os campos de Nome e E-mail utilizando `justify-content: space-between`.

### Semana 03 — Introdução ao JavaScript
Resolução dos desafios práticos cobrindo os três blocos fundamentais de lógica com ES6+.
- **Bloco 1 (Fundamentos e Variáveis):** Uso de `let` e `const`, verificação de tipos primitivos com `typeof`, tratamento do bug histórico do `null`, e comparação entre *Template Literals* e concatenação clássica.
- **Bloco 2 (Funções):** Estudo prático de *hoisting* em funções declaradas versus o comportamento de expressões de função e *arrow functions*, além de parâmetros com valores padrão.
- **Bloco 3 (Controle de Fluxo):** Tomadas de decisão com `if/else` e `switch`, além de laços de repetição (`for` e `while`) aplicados a tabuadas, contagens e verificação de números pares/ímpares.

### Semana 04 — Arrays, DOM e Eventos
Resolução dos desafios práticos integrando manipulação de dados em arrays, interação dinâmica com o DOM e gestão avançada de eventos.
- **Bloco 1 (Arrays e Métodos):** Aplicação de `forEach` para percurso, `map` para transformação de dados, `filter` para filtragem condicional e `reduce` para acumulação e somatórios.
- **Bloco 2 (Manipulação do DOM):** Seleção de elementos via `querySelector`/`querySelectorAll`, alteração de conteúdos com `textContent`/`innerHTML`, criação dinâmica com `createElement` e manipulação de classes com `classList`.
- **Bloco 3 (Eventos e Event Delegation):** Gestão de escuta com `addEventListener`, prevenção de comportamentos padrão (`e.preventDefault()`) em formulários e otimização de performance utilizando *Event Delegation* para elementos dinâmicos.

## Arquivos do Repositório

- `semana_01_e_02/index.html`: Código-fonte consolidado com HTML5 semântico e CSS3 incorporado.
- `entregavel_semana03.js`: Código-fonte com a resolução completa dos desafios de Introdução ao JavaScript.
- `semana_04/index.html`: Página HTML estruturada para a integração com os scripts de manipulação de DOM e eventos.
- `semana_04/app.js`: Script JavaScript com a implementação dos métodos de arrays, manipulação de elementos e delegação de eventos.
- `README.md`: Documentação e estrutura explicativa completa do repositório.
