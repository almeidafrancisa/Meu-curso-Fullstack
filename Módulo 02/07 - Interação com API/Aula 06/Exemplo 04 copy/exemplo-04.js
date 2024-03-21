//Função assincrona para fazer o uso do await
async function busca(){
  //await para (stop) a execução do programa agurdando
  //o resultado do comando fecth().
  let busca = await fetch("exemplo-04.json")
  let produtos= await busca.json()

  let divLista = document.getElementById("lista-card")

  for(let produto of produtos){
    divLista.innerHTML +=`
        <div class="card" data-id="${produto.id}">

        <div class="grupo-img">
        <img src="${produto.img}"alt="Não renderizou" width="250" height="250">
        </div class="freme-div">
        <h3>${produto.nome}</h3>
        <P>${produto.descricao}</P>
        <div clss="valores">
        <span class="valorCom">R$${produto.valorComDesconto.toFixed(2).replace(".",",")}</span>
        <span class="valorSem">R$${produto.valorSemDesconto.toFixed(2).replace(".",",")}</span>
        </div>

        </div>
      `
 }
   // Busca por todos elemento html que contén"card"
   //como valor do parãmentro"class"
   let divsCards = document.getElementsByClassName("card")//foi criado 4 divis por que 
   //diviscard recebe h3 que tiver a classe card
   //add em cada div card um evento que esculta quando 
   //o usuario clica nele,e chama uma funcao
  for(let card of divsCards){
    //o for criou essa variavel vai pecorrer todo elemnto do card e contem  div por completo
    card.addEventListener("click",clicou)//é uma acao:adicionando objeto de esculta exemplo (click) ao card esculta.
    //o usuario clica nele,e chama uma funcao
    // chama a funcao clicou.
    //é uma acao:adicionando objeto de esculta exemplo (click) ao card esculta.
   
 }
}

// é chamada essa funcao quando o usuario clica em card que contem o evento de escuta
function clicou(){
  //console.log chama div 
  let elementoId = this.getAttribute("data-id")//coleta o valor do atributo"data-id"do elemento html que acionou o evento de esculta
  //criou uma variavel ,this esta se referindo a div que chamou ele a funçao. como this recebe a div que foi clicada  a div clicou,por que 
  //só a div tem uma esculta
  
  window.location.href="detalhes.html?produto-id=" + elementoId
  //aparece o  endereço atual do URL

  
  
}

busca()
