let idade = prompt("Qual a sua idade?:")

if (idade >= 18) {
    console.log("Seja Bem-Vindo");


} else {
    console.log("Entrada Negada!");
}

let senha = prompt("Digite a senha:");

if (senha == 2005) {
    console.log("Acesso permitido:");
} else {
    console.log("Acesso negado!")
}


let nome = "Vitor Hugo"
let vip = true

if ((nome == "Vitor Hugo" && senha == 2005) || vip == true) {
    console.log("Tudo certo !")
}

