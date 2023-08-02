const randomNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function updateAttemptsDisplay() {
    const attemptsDisplay = document.getElementById('intentos');
    attemptsDisplay.innerHTML = `Número de intentos: ${intentos}`;
}

function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    
    intentos++;

    if (guess < -1) {
        result.innerHTML = 'Valor ingresado es incorrecto. Debes ingresar un número mayor a 0.';
    } else if (guess > 100) {
        result.innerHTML = 'Valor ingresado es incorrecto. Debes ingresar un número menor a 100.';
    } else if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }

    updateAttemptsDisplay();
}
