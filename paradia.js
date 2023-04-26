let classe = []
let quantidade = []
let preco = []

let total = document.getElementById('total')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{
    let produto = document.getElementById('produto')
    let qtd_produto = document.getElementById('qtd_produto').value
    let preco_produto = document.getElementById('preco_produto').value
    let soma = 0.0

    classe.push(produto)
    quantidade.push(qtd_produto)
    preco.push(preco_produto)
    
    console.log(produto)
    console.log(quantidade)
    console.log(preco)

    for(i=0; i<preco.length; i++){
        soma = soma + (quantidade[i] * preco[i])
    }
        total.innerHTML = 'Total da compra: R$' + soma
})