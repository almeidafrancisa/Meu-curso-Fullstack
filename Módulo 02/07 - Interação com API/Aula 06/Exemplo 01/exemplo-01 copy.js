async function people(){
  let busca = await fetch("exemplo-01.json");
  let pessoas = await busca.json();

  let listaDiv = document.getElementById("lista-card");

  for(let pessoa of pessoas){
   listaDiv.innerHTML +=`
     <div class = "card"data-id"${produto.id}">
     <h3>${produto.nome}</H3>
     <div class="grupo-img">

        <img src="${pessoa.img}"alt="Não renderizou" width="auto" height="auto">
        <p>${pessoa.nome}</P>
        div class="valorCom">${pessoa.sobrenome}
        <span class="valorSem">${pessoa.idade}

      </div>
    
       <h1>${pessoa.nome}</h1>
       <p>${pessoa.sobrenome}</p>
       <p>${pessoa.idade}</p>
       <p>${pessoa.cor}</p>
     </div>
    `
  }
  let divsCards = document.getElementsByClassName("card")
  for (let card of divsCards){
          card.addEventListener("click",clicou)
  }

}
people()
function clicou(){

}