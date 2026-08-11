const produtos_grid = document.querySelector('.todosprodutos-grid')



todos_produtos = [
    {id: 1, titulo:'Produto 01', descricao: 'Produto 01 0101010101101', preco: 'R$ 129,99'},
    {id: 2, titulo:'Produto 02', descricao: 'Produto 02 0101010101101', preco: 'R$ 129,99'},
    {id: 3, titulo:'Produto 03', descricao: 'Produto 03 0101010101101', preco: 'R$ 129,99'}
]


todos_produtos.forEach(produto => {
    conteudo = 
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

    produtos_grid.innerHTML += conteudo
});