//MATERIAL DE ESTUDO

let livros = []  //para fazer uma array
const requisicao = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'   //para pegar os objetos JS.
getBuscarLivrosDaAPI() //chamando função assincrona. 

//criando função assincrona 
async function getBuscarLivrosDaAPI() {
    const res = await fetch(requisicao)
    livros = await res.json()
    let  livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}

