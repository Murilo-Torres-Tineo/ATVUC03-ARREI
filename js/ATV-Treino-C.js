alert("Bom dia! Por favor preencha as seguintes informações para cadastro.")

const Login1 = {};

Login1.Nome = prompt("Qual o nome que deve ser registrado?")
Login1.CPF = prompt("Qual o CPF?")
Login1.Idade = Number(prompt("Qual a idade?"))
Login1.Celular = prompt("Qual o número que deve ser registrado?")
Login1.Nickname = prompt("Qual o seu nickname?")
Login1.Senha = prompt("Qual a senha?")

alert("Tudo certo, obrigado!")

const Login2 = {
    Nome: "Rafael Monteiro Alves",
    CPF: "000.000.000-00",
    Idade: "27 anos",
    Celular: "(13) 99999-1234",
    Nickname: "Raf1nh4_270",
    Senha: "Rf@2026!ZX9"
}

alert("Ambos Logins a frente. " + "\nLogin de :" + Login1.Nome + "\nCPF: " + Login1.CPF + "\nIdade: " + Login1.Idade + "\nNúmero: " + Login1.Celular + "\nNick: " + Login1.Nickname + "\nSenha: " + Login1.Senha + "\nLogin de :" + Login2.Nome + "\nCPF: " + Login2.CPF + "\nIdade: " + Login2.Idade + "\nNúmero: " + Login2.Celular + "\nNick: " + Login2.Nickname + "\nSenha: " + Login2.Senha)