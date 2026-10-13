"use strict";

/*
 * ================================================================
 * BLOCO 1 - ARRAYS E MÉTODOS
 * ================================================================
 */

// Array de nomes.
const nomes = ["Ana", "Bruno", "Carla"];

// forEach percorre cada nome e executa uma ação.
nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`);
});

// map cria um novo array com os nomes em letras maiúsculas.
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());

console.log(`Nomes originais: ${nomes.join(", ")}`);
console.log(`Nomes em maiúsculas: ${nomesMaiusculos.join(", ")}`);

// Array de preços.
const precos = [10, 25, 40, 5, 60];

// filter cria um novo array apenas com preços maiores que 20.
const precosAcimaDeVinte = precos.filter((preco) => preco > 20);

// reduce soma todos os valores do array.
const somaPrecos = precos.reduce(
    (acumulador, preco) => acumulador + preco,
    0
);

console.log(`Preços acima de 20: ${precosAcimaDeVinte.join(", ")}`);
console.log(`Soma de todos os preços: R$ ${somaPrecos}`);

// Array de objetos representando produtos.
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 45 },
];

// map extrai somente os nomes dos produtos.
const nomesProdutos = produtos.map((produto) => produto.nome);

// filter seleciona produtos com preço inferior a 50.
const produtosMenoresQueCinquenta = produtos.filter(
    (produto) => produto.preco < 50
);

// reduce calcula a soma dos preços dos produtos.
const totalProdutos = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco,
    0
);

// forEach imprime informações de cada produto.
produtos.forEach((produto) => {
    console.log(`Nome: ${produto.nome} | R$ ${produto.preco}`);
});

console.log(`Nomes dos produtos: ${nomesProdutos.join(", ")}`);

console.log(
    `Produtos abaixo de R$ 50: `
    + `${produtosMenoresQueCinquenta.map((produto) => produto.nome).join(", ")}`
);

console.log(`Valor total dos produtos: R$ ${totalProdutos}`);

/*
 * ================================================================
 * BLOCO 2 - MANIPULAÇÃO DO DOM
 * ================================================================
 */

// querySelector seleciona o primeiro elemento que corresponde ao seletor.
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Aluno";

// querySelectorAll seleciona todos os parágrafos com a classe "texto".
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach((paragrafo) => {
    console.log(`Texto do parágrafo: ${paragrafo.textContent}`);
});

// Seleciona a lista principal.
const lista = document.querySelector("#lista");

// innerHTML insere dois novos itens na lista.
lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;

// createElement cria um novo elemento li dinamicamente.
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";

// append adiciona o novo item ao final da lista.
lista.append(terceiroItem);

// classList.add adiciona a classe destaque ao item criado.
terceiroItem.classList.add("destaque");

console.log(
    `O terceiro item possui a classe destaque? `
    + `${terceiroItem.classList.contains("destaque")}`
);

// Array de tarefas que será transformado em itens da lista.
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa, indice) => {
    const itemTarefa = document.createElement("li");
    itemTarefa.textContent = tarefa;

    // A primeira tarefa criada recebe a classe "feito".
    if (indice === 0) {
        itemTarefa.classList.add("feito");
    }

    lista.append(itemTarefa);
});

// Conta todos os elementos li existentes dentro da lista.
const quantidadeItens = lista.querySelectorAll("li").length;

console.log(`Quantidade total de itens na lista: ${quantidadeItens}`);

/*
 * ================================================================
 * BLOCO 3 - EVENTOS E EVENT DELEGATION
 * ================================================================
 */

// Seleção dos elementos necessários para os eventos.
const botao = document.querySelector("#botao");
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

// Evento de clique no botão.
botao.addEventListener("click", () => {
    console.log(`Clicou!`);
});

// Evento ao passar o mouse sobre o botão.
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// Evento keyup: mostra o valor atual digitado no campo.
campoTarefa.addEventListener("keyup", () => {
    console.log(`Texto digitado: ${campoTarefa.value}`);
});

/*
 * Event Delegation:
 * Apenas um listener é adicionado à lista. Ele identifica qual li foi
 * clicado usando event.target, inclusive nos itens criados dinamicamente.
 */
lista.addEventListener("click", (evento) => {
    if (evento.target.tagName === "LI") {
        evento.target.classList.toggle("feito");

        console.log(
            `Item clicado: ${evento.target.textContent} | `
            + `Está concluído? ${evento.target.classList.contains("feito")}`
        );
    }
});

/*
 * Evento submit do formulário:
 * preventDefault impede que a página seja recarregada.
 */
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    // Não adiciona itens vazios ou compostos apenas por espaços.
    if (!textoTarefa) {
        console.log(`Digite uma tarefa válida antes de adicionar.`);
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;

    lista.append(novaTarefa);

    console.log(`Nova tarefa adicionada: ${textoTarefa}`);

    // Limpa o campo e devolve o foco para facilitar um novo cadastro.
    campoTarefa.value = "";
    campoTarefa.focus();
});
