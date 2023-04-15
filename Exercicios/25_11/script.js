let nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade");
let cnh = prompt("Você possui CNH? (S/N)");



if (idade < 18 || cnh.length > 1 || cnh != 'S') {
    console.log("Você não possui todos os requisitos!")
} else {
    console.log("Está todo bien, podes seguir")
}


