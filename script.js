const dice = document.querySelector(".container-dice");
const adviceId = document.querySelector(".container-id");
const adviceText = document.querySelector(".container-text");

function showAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => data.slip)
        .then(data => {
            adviceId.textContent = `ADVICE #${data.id}`;
            adviceText.textContent = data.advice
        })
        .catch(err => alert(`Error ${err}!`))

}

window.onload = showAdvice()
dice.addEventListener("click", showAdvice)