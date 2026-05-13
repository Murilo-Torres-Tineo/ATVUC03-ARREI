const Nome = [], Lanche = [], Bebida = [];

alert("Vamos começar seu pedido?")

let Contador = 0, QTDPedidos = 0.

QTDPedidos = Number(prompt("Quantos Pedidos serão feitos hoje?"))

do {
    Nome[Contador] = prompt("Qual o nome que deve ser chamado?")
    Lanche[Contador] = prompt("Qual o lanche que gostaria de pedir?")
    Bebida[Contador] = prompt("Qual bebida vai querer?")
    Contador++
} while (Contador != QTDPedidos);

Contador = 0

do {
    alert(Nome[Contador] + " seu pedido anotado foi " + Lanche[Contador] + " e sua bebida foi " + Bebida[Contador] + ".")
    Contador++
} while (Contador != QTDPedidos);