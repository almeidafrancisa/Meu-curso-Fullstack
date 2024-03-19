async function solar(){
  let sol = await fetch("exemplo-03.json")
  let luar= await sol.json();

  let listaDiv = document.getElementById("lista-card");

 for(let lua of luar){
  listaDiv.innerHTML +=`
    <div class = "card">
    <div class="grupo-img">

       <img src="${lua.img}"alt="Não renderizou" width="auto" height="auto">
     </div>
   
      <h3>${lua.nome}</h3>
      <p>${lua.marca}</p>
      <p>${lua.valor}</p>
      <p>${lua.cor}</p>
    </div>
   `
 }

}
solar()