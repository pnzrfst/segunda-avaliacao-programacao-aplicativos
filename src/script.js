let veiculos = []


function criarVeiculo(){
    const modeloVeiculo = document.getElementById('nomeCarro').value;
    const corVeiculo = document.getElementById('corCarro').value;
    const anoCarro = document.getElementById('anoCarro').value;
    const precoVeiculo = document.getElementById('precoVeiculo').value;
    const fotoVeiculo = document.getElementById('fotoVeiculo').value;
    

    const veiculo = {
        modelo: modeloVeiculo,
        cor: corVeiculo,
        ano: anoCarro,
        preco: precoVeiculo,
        foto: fotoVeiculo
    }
    
    veiculos.push(veiculo);
    mostrarVeiculos()
}

function mostrarVeiculos(){
    const listaDeVeiculos = document.getElementById('elementsList');
    listaDeVeiculos.innerHTML = "";


    for(let i = 0; i< veiculos.length; i++){

        console.log('entrou')
        const li = document.createElement("li");
        li.classList.add("veiculo")


        console.log('entrou')
        const imgCarro = document.createElement("div");
        imgCarro.classList.add("imgCarro");
        imgCarro.innerHTML = `<img src="${veiculos[i].foto}" alt="${veiculos[i].modelo}">`


        console.log('entrou')
        const infosVeiculo = document.createElement("div");
        infosVeiculo.classList.add("infosVeiculo");

        const caracteristicas = document.createElement("span")
        console.log('entrou')
        caracteristicas.innerHTML = `
            <h1>${veiculos[i].modelo}</h1>
            <p>Cor: ${veiculos[i].cor}</p>
            <p>Ano: ${veiculos[i].ano}</p>
            <p>Preço: ${veiculos[i].preco}</p>
            <p>Vendido: ${veiculos[i].vendido ? 'Sim' : 'Não'}</p>
        `;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = 'Remover'
        btnRemover.classList.add("removeVeiculo");



        console.log('entrou')
        infosVeiculo.appendChild(caracteristicas);
        infosVeiculo.appendChild(btnRemover);
        li.appendChild(imgCarro);
        li.appendChild(infosVeiculo);
        listaDeVeiculos.appendChild(li);
    }
}