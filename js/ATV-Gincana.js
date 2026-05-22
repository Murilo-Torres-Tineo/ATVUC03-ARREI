const Produtos = [];

let Contador = 0, QTDObjetos = 0, Total = Produtos[Contador].Preco * Produtos[Contador].Quantidade

QTDObjetos = Number(prompt("Quantos na lista de hoje?"))

do {
    const Produto = {
        Nome: prompt("Qual o nome do produto?"),
        Preco: Number(prompt("Qual é o valor do produto?")),
        Quantidade: Number(prompt("Quantos tem desse produto?")),
    }
    Produtos.push(Produto)
    Contador++
} while (Contador != QTDObjetos);

Contador = 0

do {
    let total = Produtos[Contador].Preco * Produtos[Contador].Quantidade

    if (Produtos[Contador].Quantidade > 0) {
        alert(`${Produtos[Contador].Nome}: Tem estoque!`)
    } else {
        alert(`${Produtos[Contador].Nome}: Fora de estoque!`)
    }

    alert(`${Produtos[Contador].Nome} - Total em valor: R$ ${total}`)

    Contador++

} while (Contador != QTDObjetos)

let totalLoja = 0

Contador = 0

do {
    totalLoja += Produtos[Contador].Preco * Produtos[Contador].Quantidade
    Contador++
} while (Contador != QTDObjetos)

alert("Valor total do estoque da loja: R$ " + totalLoja)