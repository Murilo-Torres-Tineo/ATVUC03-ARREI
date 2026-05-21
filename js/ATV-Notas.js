const Notas = [], Alunos = [];

let Contador = 0, QTDNotas = 0, Aprovado = 0, Recuperacao = 0, Reprovado = 0, Total = 0;

QTDNotas = Number(prompt("Quantas notas de alunos serão registrados?"))

do {
    Alunos[Contador] = prompt("Qual o nome do aluno?")

    Notas[Contador] = Number(prompt("Qual é a nota do aluno?"))

    Total += Notas[Contador]

    if (Notas[Contador] >= 7) {
        alert("Aprovado, parabéns!!!")
        Aprovado++
    } else {
        if (Notas[Contador] >= 5 && Notas[Contador] <= 6) {
            alert("Recuperação, viisshh....")
            Recuperacao++
        } else {
            alert("Reprovado, quem mandou não estudar?")
            Reprovado++
        }
    }

    Contador++

} while (Contador != QTDNotas);

let Media = Total / QTDNotas

alert(
    "Ordem respectiva de nome e nota:\n" +
    Alunos + "\n" +
    Notas +
    "\n\nE a média da sala é: " + Media
)