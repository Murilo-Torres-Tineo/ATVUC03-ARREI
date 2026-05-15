const Nomes = [], Lanches = [], Bebidas = [];

alert("Vamos começar seu pedido?")

let Contador = 0, QTDPedidos = 0.

QTDPedidos = Number(prompt("Quantos Pedidos serão feitos hoje?"))

do {
    Nomes[Contador] = prompt("Qual o nome que deve ser chamado?")
    Lanches[Contador] = prompt("Qual o lanche que gostaria de pedir?")
    Bebidas[Contador] = prompt("Qual bebida vai querer?")
    Contador++
} while (Contador != QTDPedidos);

Contador = 0

do {
    alert(Nomes[Contador] + " seu pedido anotado foi " + Lanches[Contador] + " e sua bebida foi " + Bebidas[Contador] + ".")
    Contador++
} while (Contador != QTDPedidos);   

// const clientes = [], lanches = [], bebidas = [];
 
// let contador = 0;
// do {
//    clientes[contador] = prompt("Digite o nome do cliente:");
//    lanches[contador] = prompt("Digite o lanche escolhido:");
//    bebidas[contador] = prompt("Digite a bebida escolhida:");
//    contador++;
// } while (confirm("Mais algum pedido?"));
 
// let lista = "Pedido realizados: \n\n"
 
// contador = 0;
 
// do {
//    lista += clientes [contador] + " - "
//    + lanches [contador] + " - "
//    + bebidas [contador] + "\n";
//    contador++;
   
// } while (contador < clientes.length); //length retorna a quantidade de itens do array
 
// alert(lista);