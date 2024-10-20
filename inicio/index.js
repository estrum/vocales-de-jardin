const buttons = document.querySelectorAll('.btn');

// Función para generar un color pastel aleatorio
function getRandomPastelColor() {
    const red = Math.floor(Math.random() * 128 + 128);  // Valores entre 128 y 255
    const green = Math.floor(Math.random() * 128 + 128);  // Valores entre 128 y 255
    const blue = Math.floor(Math.random() * 128 + 128);  // Valores entre 128 y 255
    return `rgb(${red}, ${green}, ${blue})`;
}

// Asignar un color pastel aleatorio a cada botón
buttons.forEach(button => {
    button.style.backgroundColor = getRandomPastelColor();
});



document.getElementById("btn1").addEventListener("click", function() {
    window.location.href = '../ejercicio/ejercicio.html?letra=A';
});

document.getElementById("btn2").addEventListener("click", function() {
    window.location.href = '../ejercicio/ejercicio.html?letra=E';
});

document.getElementById("btn3").addEventListener("click", function() {
    window.location.href = '../ejercicio/ejercicio.html?letra=I';
});

document.getElementById("btn4").addEventListener("click", function() {
    window.location.href = '../ejercicio/ejercicio.html?letra=O';
});

document.getElementById("btn5").addEventListener("click", function() {
    window.location.href = '../ejercicio/ejercicio.html?letra=U';
});