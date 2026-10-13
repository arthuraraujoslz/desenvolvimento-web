"use strict";

/*
 * ================================================================
 * PARTE 1 - MANIPULAÇÃO E VALIDAÇÃO DE DADOS
 * ================================================================
 */

const pedidos = [
    { cliente: "Ana", valor: 150.75, status: "pago" },
    { cliente: "Bruno", valor: 89.90, status: "pendente" },
    { cliente: "Carla", valor: 220.50, status: "pago" },
    { cliente: "", valor: 100.00, status: "pago" },
    { cliente: "Daniel", valor: -10, status: "pago" },
    { cliente: "Elisa", valor: 75.25, status: "pago" },
];

/*
 * Um pedido é válido quando possui cliente não vazio e valor numérico
 * maior que zero.
 */
const pedidosValidos = pedidos.filter((pedido) => {
    const clienteValido = (
        typeof pedido.cliente === "string"
        && pedido.cliente.trim() !== ""
    );

    const valorValido = (
        typeof pedido.valor === "number"
        && Number.isFinite(pedido.valor)
        && pedido.valor > 0
    );

    return clienteValido && valorValido;
});

const pedidosPagos = pedidosValidos.filter(
    (pedido) => pedido.status === "pago"
);

const totalFaturado = pedidosPagos.reduce(
    (acumulador, pedido) => acumulador + pedido.valor,
    0
);

console.log(`Total de pedidos simulados: ${pedidos.length}`);
console.log(`Total de pedidos válidos: ${pedidosValidos.length}`);
console.log(`Total de pedidos pagos: ${pedidosPagos.length}`);
console.log(`Total faturado: R$ ${totalFaturado.toFixed(2)}`);

pedidosPagos.forEach((pedido) => {
    console.log(
        `Cliente: ${pedido.cliente} | `
        + `Status: ${pedido.status} | `
        + `Valor: R$ ${pedido.valor.toFixed(2)}`
    );
});

/*
 * ================================================================
 * PARTE 2 - BUSCADOR DE CEP COM A API VIACEP
 * ================================================================
 */

const formularioCep = document.querySelector("#formulario-cep");
const campoCep = document.querySelector("#campo-cep");
const botaoCep = document.querySelector("#botao-cep");
const estadoCep = document.querySelector("#estado-cep");
const dadosCep = document.querySelector("#dados-cep");
const historicoCepsElemento = document.querySelector("#historico-ceps");

const historicoCeps = [];

/*
 * Atualiza a área de estado do buscador de CEP.
 * replaceChildren remove o conteúdo anterior com segurança.
 */
function exibirEstadoCep(mensagem, classe = "") {
    const mensagemEstado = document.createElement("p");
    mensagemEstado.textContent = mensagem;

    estadoCep.replaceChildren(mensagemEstado);
    estadoCep.className = `estado ${classe}`;
}

/*
 * Cria uma linha do elemento dl usando dt e dd.
 * textContent evita a interpretação de conteúdo externo como HTML.
 */
function criarLinhaEndereco(rotulo, valor) {
    const termo = document.createElement("dt");
    const descricao = document.createElement("dd");

    termo.textContent = rotulo;
    descricao.textContent = valor || "Não informado";

    return [termo, descricao];
}

/*
 * Exibe os dados retornados pela ViaCEP.
 * Nenhum dado externo é inserido com innerHTML.
 */
function exibirEndereco(dadosEndereco) {
    const elementosEndereco = [
        ...criarLinhaEndereco("Rua:", dadosEndereco.logradouro),
        ...criarLinhaEndereco("Bairro:", dadosEndereco.bairro),
        ...criarLinhaEndereco("Cidade:", dadosEndereco.localidade),
        ...criarLinhaEndereco("UF:", dadosEndereco.uf),
    ];

    dadosCep.replaceChildren(...elementosEndereco);
}

/*
 * Renderiza na tela o histórico salvo no array de objetos.
 */
function renderizarHistoricoCeps() {
    const itensHistorico = historicoCeps.map((pesquisa) => {
        const item = document.createElement("li");

        item.textContent = (
            `${pesquisa.cep} - ${pesquisa.cidade}/${pesquisa.uf}`
        );

        return item;
    });

    historicoCepsElemento.replaceChildren(...itensHistorico);
}

/*
 * Busca e trata os dados de um CEP usando async/await.
 */
async function buscarCep(cep) {
    try {
        exibirEstadoCep(`Carregando dados do CEP ${cep}...`);
        dadosCep.replaceChildren();
        botaoCep.disabled = true;

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        if (!resposta.ok) {
            throw new Error(
                `Falha HTTP ${resposta.status} ao consultar a ViaCEP.`
            );
        }

        const dadosEndereco = await resposta.json();

        if (dadosEndereco.erro === true) {
            exibirEstadoCep(
                `CEP não encontrado. Verifique o número informado.`,
                "erro"
            );
            return;
        }

        exibirEndereco(dadosEndereco);

        exibirEstadoCep(
            `CEP encontrado com sucesso.`,
            "sucesso"
        );

        historicoCeps.push({
            cep,
            cidade: dadosEndereco.localidade,
            uf: dadosEndereco.uf,
        });

        renderizarHistoricoCeps();
    } catch (erro) {
        dadosCep.replaceChildren();

        exibirEstadoCep(
            `Erro ao buscar o CEP: ${erro.message}`,
            "erro"
        );

        console.error(`Erro na consulta de CEP: ${erro.message}`);
    } finally {
        botaoCep.disabled = false;
    }
}

/*
 * O submit é interceptado para que a página não seja recarregada.
 */
formularioCep.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const cep = campoCep.value.trim();
    const padraoCep = /^\d{8}$/;

    if (!padraoCep.test(cep)) {
        dadosCep.replaceChildren();

        exibirEstadoCep(
            `Informe um CEP válido com exatamente 8 dígitos numéricos.`,
            "erro"
        );

        return;
    }

    buscarCep(cep);
});

/*
 * ================================================================
 * PARTE 3 - MINI POKÉDEX COM A POKÉAPI
 * ================================================================
 */

const formularioPokemon = document.querySelector("#formulario-pokemon");
const campoPokemon = document.querySelector("#campo-pokemon");
const botaoPokemon = document.querySelector("#botao-pokemon");
const estadoPokemon = document.querySelector("#estado-pokemon");
const dadosPokemon = document.querySelector("#dados-pokemon");

/*
 * Atualiza o estado visual da Mini Pokédex.
 */
function exibirEstadoPokemon(mensagem, classe = "") {
    const mensagemEstado = document.createElement("p");
    mensagemEstado.textContent = mensagem;

    estadoPokemon.replaceChildren(mensagemEstado);
    estadoPokemon.className = `estado ${classe}`;
}

/*
 * Exibe os dados recebidos da PokéAPI usando elementos seguros do DOM.
 */
function exibirPokemon(pokemon) {
    const tituloPokemon = document.createElement("h3");
    const imagemPokemon = document.createElement("img");
    const tituloTipos = document.createElement("h4");
    const listaTipos = document.createElement("ul");

    tituloPokemon.textContent = `Nome: ${pokemon.name}`;
    imagemPokemon.src = pokemon.sprites.front_default || "";
    imagemPokemon.alt = `Imagem do Pokémon ${pokemon.name}`;

    tituloTipos.textContent = "Tipos:";

    pokemon.types.forEach((tipoPokemon) => {
        const itemTipo = document.createElement("li");
        itemTipo.textContent = tipoPokemon.type.name;
        listaTipos.append(itemTipo);
    });

    dadosPokemon.replaceChildren(
        tituloPokemon,
        imagemPokemon,
        tituloTipos,
        listaTipos
    );
}

/*
 * Consulta a PokéAPI e trata inclusive a resposta HTTP 404.
 */
async function buscarPokemon(nomePokemon) {
    try {
        exibirEstadoPokemon(`Carregando informações de ${nomePokemon}...`);
        dadosPokemon.replaceChildren();
        botaoPokemon.disabled = true;

        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nomePokemon)}`
        );

        if (!resposta.ok) {
            if (resposta.status === 404) {
                throw new Error(`Pokémon não encontrado.`);
            }

            throw new Error(
                `Falha HTTP ${resposta.status} ao consultar a PokéAPI.`
            );
        }

        const pokemon = await resposta.json();

        exibirPokemon(pokemon);

        exibirEstadoPokemon(
            `Pokémon encontrado com sucesso.`,
            "sucesso"
        );
    } catch (erro) {
        dadosPokemon.replaceChildren();

        exibirEstadoPokemon(
            `Erro ao buscar Pokémon: ${erro.message}`,
            "erro"
        );

        console.error(`Erro na consulta de Pokémon: ${erro.message}`);
    } finally {
        botaoPokemon.disabled = false;
    }
}

/*
 * Captura e valida o nome informado no formulário da Pokédex.
 */
formularioPokemon.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomePokemon = campoPokemon.value.trim().toLowerCase();

    if (!nomePokemon) {
        dadosPokemon.replaceChildren();

        exibirEstadoPokemon(
            `Digite o nome de um Pokémon para realizar a busca.`,
            "erro"
        );

        return;
    }

    buscarPokemon(nomePokemon);
});
