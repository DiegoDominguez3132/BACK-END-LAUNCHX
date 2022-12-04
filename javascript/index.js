const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');


const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperador.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})

