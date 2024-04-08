async function buscarDetalhes(){
    let busca = await fetch("exemplo-04.json")
    let produtos = await busca.json()

    //new urlsearchparms faz uma procura no URL
    let parametros = new URLSearchParams(window.location.search)//search é procurar em ingles 
    // cria a variavel que recebe  novo urlSearchparams(window.location.search)
    let parametroID = parametros.get("produto-id")
    
    let indiceProd
    for (let x in produtos){
        
        if(produtos[x].id == parametroID){
            // Atribui à variável vazia, o valor de X, que contém
            // o indice do produto que corresponde ao ID da URL
            indiceProd = x
        }
    }

    // Adiciona na TAG BODY do HTML, um código HTML concatenado
    // com valores do objeto produto encontrado
    document.body.innerHTML = `
        <h3>${produtos[indiceProd].nome}</h3>
        <img src="${produtos[indiceProd].img}" width="250" height="250">

    `
}

buscarDetalhes()
    

    