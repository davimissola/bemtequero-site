const produtos_grid = document.querySelector('.todosprodutos-grid')



const todos_produtos = [
    {id: 1, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 70,90'},
    {id: 2, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 100,88'},
    {id: 3, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 40,99'},
    {id: 4, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 123,90'},
    {id: 5, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 99,99'},
    {id: 6, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 99,99'},
    {id: 7, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 99,99'},
    {id: 8, titulo:'Kit Cuidado & Carinho', descricao: 'Esse é um teste de texto de produtos card', preco: 'R$ 99,99'},
]
let linha_produtos = ''
let quantidade = 0


todos_produtos.forEach(produto => {
    quantidade++
    let conteudo = 
    `
    <a href="#" class="card-produto">
        <div class="card-produto-imagem">
            <img src="static/img/produtos/produto${produto.id}.png" alt="${produto.descricao}">
        </div>
        <p class="card-produto-titulo">${produto.titulo}</p>
        <p class="card-produto-texto">${produto.descricao}</p>
        <p class="card-produto-preco">${produto.preco}</p>
    </a>
    `
    linha_produtos += conteudo

    if (quantidade == 3) {
        console.log('aqui')
        produtos_grid.innerHTML += `<div class="produtos-grid">${linha_produtos}</div>`
        quantidade = 0
        linha_produtos = ''
    }
});