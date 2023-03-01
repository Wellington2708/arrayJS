let ordenarPorPreco = document.getElementById("btnOrdenarPorPreco");
ordenarPorPreco.addEventListener("click" , ordenarLivroPorPreco);

function ordenarLivroPorPreco(){
    let livrosOrdenados = livros.sort((livro1, livro2) => livro1.preco - livro2.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}