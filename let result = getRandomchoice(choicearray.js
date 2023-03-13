function playround(userchoice, computerchoice) {
    if (userchoice=="rock" , computerchoice=="paper") {
        let finalresult = "comp wins";
        return finalresult;
    } else if (userchoice=="paper" , computerchoice=="paper") {
        let finalresult = "tied";
        return finalresult;
    } else if (userchoice=="scissor" , computerchoice=="paper") {
        let finalresult = "user wins";
        return finalresult;
    } else if (userchoice=="rock" , computerchoice=="rock") {
        let finalresult = "tied";
        return finalresult;
    } else if (userchoice=="paper" , computerchoice=="rock") {
        let finalresult = "user wins";
        return finalresult;
    } else if (userchoice=="scissor" , computerchoice=="rock") {
        let finalresult = "comp wins";
        return finalresult;
    } else if (userchoice=="rock" , computerchoice=="scissor") {
        let finalresult = "user wins";
        return finalresult;
    } else if (userchoice=="paper" , computerchoice=="scissor") {
        let finalresult = "comp wins";
        return finalresult;
    } else if (userchoice=="scissor" , computerchoice=="scissor") {
        let finalresult = "user wins";
        return finalresult;
    }
}
function game(playround) {
for (let i = 0; i < 5; i++) {

let choicearray = [
    'rock',
    'paper',
    'scissor'
    ];
function getRandomchoice(choicearray) {
    let randomIndex = Math.floor(Math.random() * choicearray.length);
    let item = choicearray[randomIndex];
    return item;
}
let computerchoice = getRandomchoice(choicearray);
let userchoice = prompt("Its Your Turn, Please Enter rock, paper, or scissors below");
console.log(playround(userchoice, computerchoice));
}
}
console.log(game(playround));