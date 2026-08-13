const produtos_grid = document.querySelector('.todosprodutos-grid')



const todos_produtos = [
    {id: 1, titulo:'Necessaire Rosa Beauté', descricao: 'Kit com urso de pelúcia rosa, toalha e cosméticos essenciais em embalagem transparente.', preco: 'R$ 70,90'},
    {id: 2, titulo:'Kit Especial Laço Holográfico', descricao: 'Bolsa transparente elegante com pelúcia, produtos de cuidados corporais e espelho.', preco: 'R$ 100,88'},
    {id: 3, titulo:'Cesta Florir & Aromas', descricao: 'Cesta de madeira rústica com vasinho de flor natural e home spray perfumado.', preco: 'R$ 40,99'},
    {id: 4, titulo:'Cesta Especial Dia das Mães', descricao: 'Cesta completa de presentes com balão metalizado em formato de coração e laço vermelho.', preco: 'R$ 123,90'},
    {id: 5, titulo:'Cesta Orquídea & Chocolates', descricao: 'Delicada cesta com mini orquídea, ursinho de pelúcia e chocolates finos.', preco: 'R$ 99,99'},
    {id: 6, titulo:'Kit Granado & Cuidados', descricao: 'Bolsa com laço lilás contendo produtos de cuidados corporais da linha Granado.', preco: 'R$ 89,90'},
    {id: 7, titulo:'Kit Spa & Relaxamento', descricao: 'Conjunto de sabonete líquido, hidratante e sabonetes artesanais para um momento relax.', preco: 'R$ 65,50'},
    {id: 8, titulo:'Cesta Doce Encanto', descricao: 'Cesta recheada de guloseimas, bombons e uma pelúcia colecionável.', preco: 'R$ 115,00'},
    {id: 9, titulo:'Kit Mimos de Algodão', descricao: 'Toalha de rosto aveludada, sabonete em barra artesanal e hidratante perfumado.', preco: 'R$ 54,90'},
    {id: 10, titulo:'Caixa Surpresa Bem Te Quero', descricao: 'Combinação exclusiva com itens variados de papelaria fofa e autocuidado.', preco: 'R$ 79,90'},
]
let linha_produtos = ''
let quantidade = 0


todos_produtos.forEach(produto => {
    quantidade++
    let conteudo = 
    `
    <a href="produto.html?id=${produto.id}" class="card-produto">
        <div class="card-produto-imagem">
            <img src="static/img/produtos/produto${produto.id}.webp" alt="${produto.descricao}">
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