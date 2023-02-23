//MATERIAL DE ESTUDO

let livros = []  //para fazer uma array
const requisicao = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'   //para pegar os objetos JS.
getBuscarLivrosDaAPI() //chamando função assincrona. 
const elementoParaInserirLivros = document.getElementById('livros')  //criar constante buscando o elemento no HTML

//criando função assincrona 
async function getBuscarLivrosDaAPI() {
    const res = await fetch(requisicao)
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}