"use strict";

/*
 * app.js
 * Entregável de Desenvolvimento Web – Introdução ao JavaScript – Semana 03
 *
 * O código pode ser executado no console do navegador ou com Node.js.
 */

/* ================================================================
 * BLOCO 1 – FUNDAMENTOS E VARIÁVEIS
 * ================================================================ */

// "let" é usado porque o valor de pontos será alterado.
let pontos = 50;
pontos += 10;
console.log(`Pontuação atual: ${pontos}`);

// "const" é usada para valores que não devem ser reatribuídos.
const MAX_PONTOS = 100;

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log(
        `Erro ao reatribuir MAX_PONTOS: ${erro.name}. `
        + `Constantes não podem receber um novo valor após a declaração.`
    );
}

// Declaração de variáveis para cada tipo primitivo solicitado.
const nomeAluno = "Mariana";
const idadeAluno = 20;
const alunoMatriculado = true;
const cursoNaoDefinido = undefined;
const valorNulo = null;

console.log(`typeof nomeAluno: ${typeof nomeAluno}`);
console.log(`typeof idadeAluno: ${typeof idadeAluno}`);
console.log(`typeof alunoMatriculado: ${typeof alunoMatriculado}`);
console.log(`typeof cursoNaoDefinido: ${typeof cursoNaoDefinido}`);

// Bug histórico do JavaScript: typeof null retorna "object".
console.log(`typeof valorNulo: ${typeof valorNulo}`);

const nome = "João";
const curso = "JavaScript";

// Template Literal utiliza crases e permite inserir variáveis com ${}.
const fraseTemplateLiteral = `${nome} está estudando ${curso}.`;
console.log(`Frase com Template Literal: ${fraseTemplateLiteral}`);

// Concatenação clássica utiliza o operador +.
const fraseConcatenacao = nome + " está estudando " + curso + ".";
console.log(`Frase com concatenação: ${fraseConcatenacao}`);

/* ================================================================
 * BLOCO 2 – FUNÇÕES
 * ================================================================ */

/*
 * Funções declaradas sofrem hoisting: podem ser chamadas antes da
 * posição em que foram escritas no código.
 */
console.log(
    `Resultado antes da declaração da função: ${ehMaiorDeIdade(18)}`
);

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

console.log(`Pessoa com 16 anos é maior de idade? ${ehMaiorDeIdade(16)}`);
console.log(`Pessoa com 21 anos é maior de idade? ${ehMaiorDeIdade(21)}`);

/*
 * Funções de expressão declaradas com const não podem ser chamadas
 * antes de sua inicialização, pois estão na Temporal Dead Zone.
 */
try {
    console.log(
        `Teste antes da declaração: ${ehMaiorDeIdadeExpressao(18)}`
    );
} catch (erro) {
    console.log(
        `Erro ao chamar função de expressão antes da declaração: `
        + `${erro.name}. A constante ainda não foi inicializada.`
    );
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    `Função de expressão para idade 19: `
    + `${ehMaiorDeIdadeExpressao(19)}`
);

// Função dobro na forma de função declarada.
function dobroDeclarado(numero) {
    return numero * 2;
}

// Função dobro na forma de expressão.
const dobroExpressao = function (numero) {
    return numero * 2;
};

// Função dobro na forma de arrow function.
const dobroArrow = (numero) => numero * 2;

// Parâmetro padrão: caso não seja informado, numero receberá 1.
const dobroComPadrao = (numero = 1) => numero * 2;

console.log(`Dobro com função declarada: ${dobroDeclarado(5)}`);
console.log(`Dobro com função de expressão: ${dobroExpressao(5)}`);
console.log(`Dobro com arrow function: ${dobroArrow(5)}`);
console.log(`Dobro com parâmetro padrão: ${dobroComPadrao()}`);

/* ================================================================
 * BLOCO 3 – CONTROLE DE FLUXO
 * ================================================================ */

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    }

    return "Reprovado";
}

console.log(`Aluno com nota 8: ${classificarNota(8)}`);
console.log(`Aluno com nota 4: ${classificarNota(4)}`);

const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log(`Semáforo vermelho: Pare.`);
        break;
    case "amarelo":
        console.log(`Semáforo amarelo: Atenção.`);
        break;
    case "verde":
        console.log(`Semáforo verde: Siga.`);
        break;
    default:
        console.log(`Cor de semáforo inválida.`);
}

console.log(`\nTabuada do 5:`);

for (let multiplicador = 1; multiplicador <= 10; multiplicador += 1) {
    console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
}

console.log(`\nContagem regressiva:`);

let contadorRegressivo = 5;

while (contadorRegressivo >= 1) {
    console.log(`${contadorRegressivo}`);
    contadorRegressivo -= 1;
}

console.log(`\nNúmeros de 1 a 20 com for:`);

for (let numero = 1; numero <= 20; numero += 1) {
    const tipoNumero = numero % 2 === 0 ? "par" : "ímpar";
    console.log(`${numero} é ${tipoNumero}.`);
}

console.log(`\nNúmeros de 1 a 20 com while:`);

let numeroWhile = 1;

while (numeroWhile <= 20) {
    const tipoNumero = numeroWhile % 2 === 0 ? "par" : "ímpar";
    console.log(`${numeroWhile} é ${tipoNumero}.`);
    numeroWhile += 1;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Informe um valor entre 1 e 7.";
    }
}

console.log(`Dia 1: ${diaDaSemana(1)}`);
console.log(`Dia 4: ${diaDaSemana(4)}`);
console.log(`Dia 7: ${diaDaSemana(7)}`);
console.log(`Dia 9: ${diaDaSemana(9)}`);
