let nome = "Vitor"
for (let i = 0; i < 10; i = i + 1) {


    if (i == 3) {
        nome = "Hugo";
    }
    if (i == 5 && nome == "Hugo") {
        console.log("O nome é Vitor");
        break;
    }
    console.log(i);
}