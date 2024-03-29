let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("msg");

const genComputerChoice= () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math,random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
};

const showWinner = (userWin) =>{
    if(userWin){
        console.log("you win")
        msg.innerText = ("You win!");
        msg.computedStyleMap.backgroundcolor = "green"
    }else {
        console.log("you lose");
        msg.innerText = ("you lose");
        msg.computedStyleMap.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const comChoice = genComChoice();
    console.log("comp choice = ",CompChoice);
};

if (userChoice === compChoice) {
    drawGame();
}else {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false: true;
    }else if(userChoice === "paper") {
        userWin = comChoice === "scissors" ? false: true;
    }else{
       userWin = compChoice === "rock" ? false : true;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("Id");
        console.log("choices was clicked",userChoice);
    });
});