let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

const genComp = () => {
    const option = ["rock", "paper", "scissor"];
    const ranidx = Math.floor(Math.random() * 3);
    console.log(ranidx);
    return option[ranidx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play again";
    msg.style.backgroundColor = "blue";
};

const playGame = (userchoice) => {
    const compChoice = genComp();
    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
};

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Dark/Light mode toggle
let mb1 = document.querySelector("#mode");
let cm = "light";
let body = document.querySelector("body");

mb1.addEventListener("click", () => {
    if (cm === "light") {
        cm = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        cm = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
