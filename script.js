const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }
}
