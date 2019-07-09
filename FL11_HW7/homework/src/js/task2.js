let offer = confirm('Do you want to play a game?');
let maxInterval = 8;
let prizeChange = 1;
let userNumber;
const numTmp = 1;
const divider = 2;
let totalPrize = 0;
const maxChange = 4;
let randomNumber;
if (!offer) {
    alert('You did not become a billionaire, but can.');
} else {
    while (offer) {
        let attempts=3;
        randomNumber = Math.floor(Math.random() * (maxInterval + numTmp));
        let prize = 100;
        prize *= prizeChange;
        for (; attempts > 0;) {
            userNumber = +prompt(`Choose a roulette pocket number from 0 to ${maxInterval}
Attempts left: ${attempts}
Total prize: ${totalPrize}$
Possible prize for current attempt: ${prize}$`);
            if (userNumber === randomNumber) {
                totalPrize += prize;
                offer = confirm(`Congratulation your won! Your prize is: ${totalPrize}$. Do you want to continue?`);
                break;
            }
            attempts--;
            prize /= divider;
        } if (offer && userNumber === randomNumber) {
            prizeChange *= divider;
            maxInterval += maxChange;
        }
        if (!offer && userNumber === randomNumber) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            offer = confirm('Do you want to play again?');
            if (offer) {
                prizeChange = 1;
                maxInterval = divider * divider * divider;
                totalPrize = 0;
            }
        }
        if (userNumber !== randomNumber) {
            alert('Thank you for your participation. Your prize is: 0$');
            offer = confirm('Do you want to play again?');
            if (offer) {
                prizeChange = 1;
                maxInterval = divider * divider * divider;
                totalPrize = 0;
            }
        }
    }
}
