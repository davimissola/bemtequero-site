const imagem = document.querySelector('.div-imgproduto img')
const titulo = document.querySelector('.div-textoproduto h3')
const descricao = document.querySelector('.div-textoproduto p')
const preco = document.querySelector('.div-textoproduto h2')




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
const parametro_url = new URLSearchParams(window.location.search)
const id_produto = parametro_url.get('id')


if (id_produto) {
    const produto_encontrado = todos_produtos.find(produto => produto.id == Number(id_produto))

    if (produto_encontrado) {
        imagem.src = `static/img/produtos/produto${produto_encontrado.id}.png`
        titulo.innerHTML = produto_encontrado.titulo
        descricao.innerHTML = produto_encontrado.descricao
        preco.innerHTML = produto_encontrado.preco
    }
}


