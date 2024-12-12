const diceApp = document.getElementById("app");

function renderDiceApp(username) {
    diceApp.innerHTML = `
        <h1 class="app-container-title">¡Bienvenido, ${username}!</h1>
        <img id="diceImage" src="https://example.com/dice1.png" alt="Dado" />
        <button id="rollButton" class="button">Tirar Dado</button>
        <p id="result">Resultado acumulado: <span id="total">0</span></p>
    `;

    let total = 0;

    const diceImage = document.getElementById("diceImage");

    document.getElementById("rollButton").onclick = () => {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        total += rollResult;
        document.getElementById("total").textContent = total;

        // Actualizar la imagen usando un switch
        switch (rollResult) {
            case 1:
                diceImage.src = "https://example.com/dice1.png";
                break;
            case 2:
                diceImage.src = "https://example.com/dice2.png";
                break;
            case 3:
                diceImage.src = "https://example.com/dice3.png";
                break;
            case 4:
                diceImage.src = "https://example.com/dice4.png";
                break;
            case 5:
                diceImage.src = "https://example.com/dice5.png";
                break;
            case 6:
                diceImage.src = "https://example.com/dice6.png";
                break;
        }
    };
}

// Inicializa la aplicación de dados
function initDiceApp() {
    const username = localStorage.getItem("username");
    if (username) {
        renderDiceApp(username);
    } else {
        alert("Usuario no logueado");
    }
}

initDiceApp();