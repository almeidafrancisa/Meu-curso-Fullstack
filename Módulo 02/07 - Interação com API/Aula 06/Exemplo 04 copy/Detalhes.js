async function buscarDetalhes(){
    let busca = await fetch("exemplo-04.json")
    let produto = await busca.json()

    //new urlsearchparms faz uma procura no URL
    let parãmentros = new URLSearchParams(window.location.search)//search é procurar em ingles 
    // cria a variavel que recebe  novo urlSearchparams(window.location.search)
    let parãmentroID = parãmentros.get("produto-id")
    alert(parãmentroID=3)
}
buscarDetalhes()