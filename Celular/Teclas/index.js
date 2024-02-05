function insert(letra) {
    var letras = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = letras + letra;
}

function clean() {
    document.getElementById('tela').innerHTML = "";
}

function back() {
    var limpa = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = limpa.substring(0, limpa.length -1);
}

function space() {
    var espaço = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = espaço + '  '
}

function enviar() {
    var resetar = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML 
}

function corTema() {
    var body = document.body;
    body.style.backgroundColor = 'white'
}