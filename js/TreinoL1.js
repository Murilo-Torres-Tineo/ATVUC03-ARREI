const Produto = [];

let Contador = 0, QTDProdutos = 0;

QTDProdutos = Number(prompt("Quantos produtos a serem comprados hoje?"))

do {
    Produto[Contador] = prompt("Qual o produto comprado?")
    alert("Ok. Anotado!")
    Contador++
} while (Contador != QTDProdutos);

Contador = 0

alert("Os produtos anotados foram: " + Produto + ".")   