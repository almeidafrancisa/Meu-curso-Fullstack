//Função assincrona para fazer o uso do await
async function busca(){
  //await para (stop) a execução do programa agurdando
  //o resultado do comando fecth().
  let busca = await fetch("exemplo-04.json")
  let produtos= await busca.json()

  let divLista = document.getElementById("lista-card")

  for(let produto of produtos){
   divLista.innerHTML +=`
     <div class="card">
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
}
busca()