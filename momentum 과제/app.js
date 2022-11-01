const generateForm = document.getElementById("generate-number")
const generateInput = generateForm.querySelector("input")
const guessForm = document.getElementById("guess-number")
const guessInput = guessForm.querySelector("input")
const answer = document.querySelector("#answer");
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden"

function clickBtn(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * parseInt(generateInput.value) + 1);
    //event.preventDefault();
    
    /* if (guessInput.value > generateInput.value) {
        alert("범위 내 숫자가 아닙니다.")
        location.reload();
    }; */

    answer.classList.remove(HIDDEN_CLASSNAME);
    answer.innerText = `You chose ${guessInput.value}, the machine chose ${randomNumber}`;

    if (randomNumber === guessInput.value) {
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You won!"
    } else {
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You lost!"
    };
};


guessForm.addEventListener("submit", clickBtn);