alert("Vamos começar?")

const Tarefas = [];
let Contador = 0, QTDF = 0;

QTDF = prompt("Quantas tarefas serão feitas hoje?")

do {
    Tarefas[Contador] = prompt("Qual a tarefa a ser registrada?")
    alert("Tudo bem, anotado!")
    Contador++
} while (Contador != QTDF);

Contador = 0

alert("As tarefas de hoje são:" + "\n" + Tarefas + ".")