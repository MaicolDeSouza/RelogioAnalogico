const handSeconds = document.querySelector('.hand.seconds');
const handMinutes = document.querySelector('.hand.minutes');
const handHours = document.querySelector('.hand.hours');

// Funcao que altera a variavel '--rotation' criada no CSS
const setRotation = (element, rotationPercentage) => {
    // Pegamos a porcentagem dos elmentos (0 a 1) e multiplicamos pelo circulo(360°)
    element.style.setProperty('--rotation', rotationPercentage * 360)
}

const setClock = () => {
    const currentDate = new Date();

    // Extraimos os segundo em porcentagem ex:45seg/60seg=0.75%
    const secondsPercentage = currentDate.getSeconds() / 60;
    // Extraimos os minutos em porcentagem
    // Somamos a porcentagem dos segundos para que o ponteiro de minutos mova vagarosamente
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
    // Extraimos as horas em porcentagem
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(handSeconds, secondsPercentage);
    setRotation(handMinutes, minutesPercentage);
    setRotation(handHours, hoursPercentage);
}

// Usamos set interval para renderizar(atualizar relogio) a cada intervalo de tempo
setInterval(() => {
    setClock();
}, 100);