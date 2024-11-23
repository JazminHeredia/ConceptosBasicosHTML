// Lista de palabras aleatorias para el CAPTCHA
const palabras = ['gato', 'perro', 'auto', 'sol', 'luna', 'cielo', 'flor', 'arbol', 'puerta', 'nube'];

// Función para generar una palabra aleatoria del arreglo
function generarPalabra() {
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

// Dibuja el CAPTCHA en un lienzo (canvas) con distorsión
function dibujarCaptcha(palabra) {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpia el lienzo
    ctx.font = '36px Arial';
    ctx.fillStyle = 'black';

    // Añadir distorsión
    const noiseCount = 30;
    for (let i = 0; i < noiseCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillRect(x, y, 2, 2);  // Añadir ruido (píxeles aleatorios)
    }

    // Añadir el texto de CAPTCHA al lienzo
    ctx.fillStyle = 'blue';
    ctx.save();
    ctx.translate(Math.random() * 10, Math.random() * 10);
    ctx.rotate(Math.random() * 0.2 - 0.1);  // Rotación aleatoria del texto
    ctx.fillText(palabra, 50, 50);
    ctx.restore();
}

// Verificar si el CAPTCHA es correcto
document.getElementById('captchaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const captchaIngresado = document.getElementById('userInput').value;
    const captchaGenerado = document.getElementById('captchaTextContainer').dataset.captcha;

    if (captchaIngresado === captchaGenerado) {
        document.getElementById('captchaResult').textContent = '¡CAPTCHA verificado correctamente!';
        document.getElementById('captchaResult').style.color = 'green';
    } else {
        document.getElementById('captchaResult').textContent = 'Captcha incorrecto. Intenta de nuevo.';
        document.getElementById('captchaResult').style.color = 'red';
    }
});

// Recargar el CAPTCHA
document.getElementById('reloadCaptcha').addEventListener('click', function() {
    const nuevaPalabra = generarPalabra();
    document.getElementById('captchaTextContainer').dataset.captcha = nuevaPalabra;
    dibujarCaptcha(nuevaPalabra);
    document.getElementById('userInput').value = '';
    document.getElementById('captchaResult').textContent = '';
});

// Inicializar el CAPTCHA cuando se carga la página
window.onload = function() {
    const nuevaPalabra = generarPalabra();
    document.getElementById('captchaTextContainer').dataset.captcha = nuevaPalabra;
    dibujarCaptcha(nuevaPalabra);
};
