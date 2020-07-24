const app =  () => {
    let pscore = 0;
    let cscore = 0;

    const startGame = () => {
        const playBt = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBt.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");

        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const compHand = document.querySelector(".computer-hand");
        const hannds = document.querySelectorAll(".hands img");

        hannds.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });

        const compOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                const compNum = Math.floor(Math.random() * 3);
                const compChoice = compOptions[compNum];
                
                setTimeout(() =>  {
                    
                compareHands(this.textContent, compChoice);


                playerHand.src = `./${this.textContent}.png`;
                compHand.src = `./${compChoice}.png`;

                }, 2000)


                playerHand.style.animation = "shakePlayer 2s ease";
                compHand.style.animation = "shakeComputer 2s ease";


            });
            
        });

    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const compScore = document.querySelector(".computer-score p");
        playerScore.textContent = pscore;
        compScore.textContent = cscore;
    }

    const compareHands = (playerChoice, compChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice=== compChoice) {
            winner.textContent = "It Is A Tie!";
            return;
        }

        if(playerChoice === "rock") {
            if(compChoice === "scissors") {
                winner.textContent = "You Win!";
                pscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "You Loose!";
                cscore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "paper") {
            if(compChoice === "rock") {
                winner.textContent = "You Win!";
                pscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "You Loose!";
                cscore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "scissors") {
            if(compChoice === "paper") {
                winner.textContent = "You Win!";
                pscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "You Loose!";
                cscore++;
                updateScore();
                return;
            }
            
        }

    };
    

    startGame();
    playMatch();
};


app();