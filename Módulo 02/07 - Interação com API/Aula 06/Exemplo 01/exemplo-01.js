async function people(){
  let busca = await fetch("exemplo-01.json");
  let pessoas = await busca.json();

  let listaDiv = document.getElementById("lista-card");

  for(let pessoa of pessoas){
   listaDiv.innerHTML +=`
     <div class = "card">
     <div class="grupo-img">

        <img src="${pessoa.img}"alt="Não renderizou" width="auto" height="auto">
      </div>
    
       <h1>${pessoa.nome}</h1>
       <p>${pessoa.sobrenome}</p>
       <p>${pessoa.idade}</p>
       <p>${pessoa.cor}</p>
     </div>
    `
  }

}
people()