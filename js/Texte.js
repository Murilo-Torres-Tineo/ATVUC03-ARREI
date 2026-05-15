const estudante1 = {
    nome: 'Michael Jackson',
    nota1sem: 8,
    nota2sem: 4,
    media: 0
};

const estudante2 = {};

estudante2.nome = 'Maria';
estudante2.nota1sem = 7;
estudante2.nota2sem = 4;
estudante2.media = (estudante2.nota1sem + estudante2.nota2sem) / 2;
estudante2.curso = "TI";

estudante1.media = (estudante1.nota1sem + estudante1.nota2sem) / 2;

alert(estudante1.curso);
alert(estudante2.curso);