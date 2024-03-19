async function superar(){
   let lugar = await fetch("exemplo-02.json")
   let motor= await lugar.json();

   let listaDiv = document.getElementById("lista-card");

  for(let moto of motor){
   listaDiv.innerHTML +=`
     <div class = "card">
     <div class="grupo-img" data-id="${produto.id}">
     <h3>${produto.nome}</H3>
     
     <img src="${moto.img}"alt="Não renderizou" width="auto" height="auto">
     <p>${produto.nome}</p>
     <div class=valores=">
     <span> class
      </div>
    
       <h3>${moto.nome}</h3>
       <p>${moto.marca}</p>
       <p>R$${moto.valor}</p>
       <p>${moto.cor}</p>
     </div>
    `
  }

}
superar()
