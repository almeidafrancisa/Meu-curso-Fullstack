async function verDetalhe(){
    let buscar = await fetch("exemplo-10.json")
    let produtos = await buscar.json()

    let parametrosURL = new URLSearchParams(window.location.search)
    let idProduto = parametrosURL.get("produtoid")

    let inProduto = null
    for(let x in produtos){
        if(produtos[x].id == idProduto){
            inProduto = x
        }
    }
    document.title = produtos[inProduto].nome

    document.getElementById("detalhes").innerHTML = `
        <div class="linkCard">
            <h2 class="titulo1">${produtos[inProduto].nome}</h2>
            <img src="${produtos[inProduto].img[0]}" id="img-frame" width="450" height="450" style="border: 1px solid #000; border-radius:10px; box-shadow:2px 2px 2px 0px black;">
            <div class="mini-img" id="mini-img">
            
            </div>
            <p>${produtos[inProduto].descricao}</p>
            <div class="grupoValores">
                <span class="valorCom">R$ ${(produtos[inProduto].valorComDesconto).toFixed(2).replace(".",",")}</span>
                <span class="valorSem">R$ ${(produtos[inProduto].valorSemDesconto).toFixed(2).replace(".",",")}</span>
                <p></p>
            </div>
            <a href="carrinho.html"><button class="buttonCard">Adicionar ao carrinho</button></a>

        </div>
    `

    let divmini = document.getElementById("mini-img")
    for(let i of produtos[inProduto].img){
        divmini.innerHTML +=`<img src="${i}" class="miniatura" height="80" width="80" style="border: 1px solid #000; border-radius: 5px">`
    }
    let miniCards= document.querySelectorAll(".miniatura")
    for(let card of miniCards){
        card.addEventListener("mouseover",alteraImg)
    }

    function alteraImg(){
        let frame = document.getElementById("img-frame")
        frame.src= this.getAttribute("src")
    }

}
verDetalhe()

