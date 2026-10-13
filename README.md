# Desenvolvimento Web — Atividades Acadêmicas

Este repositório contém as soluções dos desafios e projetos desenvolvidos para a disciplina de Desenvolvimento Web, cobrindo desde a estruturação semântica de páginas com HTML5, estilização com CSS (Flexbox), introdução ao JavaScript, manipulação avançada de Arrays, DOM e Eventos, até o consumo assíncrono de APIs com `fetch` e `async/await`.

## Sobre o Projeto

O objetivo deste repositório é consolidar o aprendizado prático em desenvolvimento front-end, aplicando boas práticas estruturais, visuais, lógicas e assíncronas exigidas nas atividades da disciplina.

## Etapas do Projeto

### Semana 01 — Estrutura Base e Formulário de Inscrição (HTML)
*Projeto prático desenvolvido com a temática de um Blog.*
- **Estrutura Base:** `<!DOCTYPE html>`, tags semânticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`) e formulário nativo com validações.

### Semana 02 — Estilização do Formulário de Inscrição (CSS)
*Projeto prático desenvolvido com a temática de um Blog.*
- **Container e Layout:** Uso de `display: flex`, espaçamentos, customização de inputs/botões e organização lado a lado com Flexbox.

### Semana 03 — Introdução ao JavaScript
Resolução dos desafios práticos cobrindo os três blocos fundamentais de lógica com ES6+.
- **Fundamentos e Variáveis:** Uso de `let`/`const`, verificação de tipos com `typeof`, tratamento do bug do `null` e Template Literals.
- **Funções e Controle de Fluxo:** Estudo de *hoisting*, funções de expressão, *arrow functions*, estruturas condicionais (`if/else`, `switch`) e laços de repetição (`for`, `while`).

### Semana 04 — Arrays, DOM e Eventos
Resolução integrando manipulação de dados em arrays e interação dinâmica com o DOM.
- **Métodos de Arrays e DOM:** Aplicação de `forEach`, `map`, `filter`, `reduce`, seleção de elementos via `querySelector`, criação dinâmica com `createElement` e gestão de escuta com *Event Delegation*.

### Semana 05 — Objetos, Dados e Assincronismo
Implementação de consumo de APIs externas, gestão de fluxo assíncrono e tratamento robusto de interfaces.
- **Validação e Redução de Dados:** Processamento de arrays de objetos e filtragem avançada de faturamento.
- **Buscador de CEP:** Integração com a API ViaCEP utilizando `fetch` e `async/await`, estruturada sob os quatro estados de tela (*Carregando*, *Erro*, *Vazio*, *Sucesso*) e histórico persistido.
- **Desafio Mini Pokédex:** Consulta à PokéAPI com tratamento adequado de erros HTTP (404) e exibição segura de sprites e tipos.
- **Reflexão Técnica:** Compreensão do funcionamento do Event Loop, microtarefas e do paralelismo otimizado com `Promise.all`.

---

### Reflexão: Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?
O uso de `await` de forma sequencial força o JavaScript a aguardar a resolução de uma promessa antes de iniciar a execução da requisição seguinte (bloqueando o fluxo em cascata). Em contrapartida, o `Promise.all` dispara todas as promessas em paralelo, permitindo que as requisições ocorram simultaneamente na rede. O programa aguarda apenas o término da operação mais lenta do lote, otimizando drasticamente o tempo total de resposta.

## Arquivos do Repositório

- `semana_01_e_02/index.html`: Código-fonte consolidado com HTML5 semântico e CSS3 incorporado.
- `entregavel_semana03.js`: Código-fonte com os fundamentos de JavaScript e controle de fluxo.
- `semana_04/index.html` e `semana_04/app.js`: Estrutura e lógica de Arrays, DOM e Event Delegation.
- `semana_05/index.html` e `semana_05/app.js`: Interfaces do Buscador de CEP e Mini Pokédex integradas com consumo assíncrono de APIs e tratamento de estados de tela.
- `README.md`: Documentação e estrutura explicativa completa do repositório.
