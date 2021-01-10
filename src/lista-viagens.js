
const table = document.querySelector(".lista-viagens__itens");

// criar função para adicionar linha na tabela

function criaLinha(dataSaida, origem, destino){
    const tr = document.createElement('tr');

    conteudoTr = `
                    <td class="lista-viagens__item__data-saida">${dataSaida}</td>
                    <td class="lista-viagens__item__origem">${origem}</td>
                    <td class="lista-viagens__item__destino">${destino}</td>
                    <td class="lista-viagens__item__bt-comprar"><button>Comprar</button></td>
                `;

    tr.innerHTML = conteudoTr;

    return tr;

}

listarViagens().then(viagens => {
    viagens.forEach(viagem => {
        table.appendChild(criaLinha(viagem.dataSaida, viagem.origem, viagem.destino));
    });
})