async function superar(){
   let lugar = await fetch("exemplo-02.json")
   let motor= await lugar.json();

   let listaDiv = document.getElementById("lista-card");

  for(let moto of motor){
   listaDiv.innerHTML +=`
     <div class = "card">
     <div class="grupo-img">

        <img src="${moto.img}"alt="Não renderizou" width="auto" height="auto">
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
