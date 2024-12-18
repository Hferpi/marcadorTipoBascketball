
// Selección de elementos del DOM
const homeScoreElement = document.getElementById('mHome');
const guestScoreElement = document.getElementById('mGuest');
const newGameButton = document.getElementById('newGame');

// Inicialización de los puntajes
let homeScore = 0;
let guestScore = 0;

// Función para actualizar el puntaje en el DOM
function updateScoreboard() {
    homeScoreElement.textContent = homeScore.toString().padStart(2, '0');
    guestScoreElement.textContent = guestScore.toString().padStart(2, '0');
}

// Función para sumar puntos al marcador
function addPoints(team, points) {
    if (team === 'home') {
        homeScore += points;
    } else if (team === 'guest') {
        guestScore += points;
    }
    updateScoreboard();
}

// Función para reiniciar el marcador
function resetGame() {
    homeScore = 0;
    guestScore = 0;
    updateScoreboard();
}

// Agregar eventos a los botones de HOME
document.getElementById('home+1').addEventListener('click', () => addPoints('home', 1));
document.getElementById('home+2').addEventListener('click', () => addPoints('home', 2));
document.getElementById('home+3').addEventListener('click', () => addPoints('home', 3));

// Agregar eventos a los botones de GUEST
document.getElementById('guest+1').addEventListener('click', () => addPoints('guest', 1));
document.getElementById('guest+2').addEventListener('click', () => addPoints('guest', 2));
document.getElementById('guest+3').addEventListener('click', () => addPoints('guest', 3));

// Evento para el botón de NEW GAME
newGameButton.addEventListener('click', resetGame);

// Inicializar marcador al cargar la página
updateScoreboard();
