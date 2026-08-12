const produtos_grid = document.querySelector('.todosprodutos-grid')



const todos_produtos = [
    {id: 1, titulo:'Produto 01', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 2, titulo:'Produto 02', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 3, titulo:'Produto 03', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 4, titulo:'Produto 04', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 5, titulo:'Produto 05', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 6, titulo:'Produto 06', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 7, titulo:'Produto 07', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 8, titulo:'Produto 08', descricao: '--------------------', preco: 'R$ 000,00'},
    {id: 9, titulo:'Produto 09', descricao: '--------------------', preco: 'R$ 000,00'},
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