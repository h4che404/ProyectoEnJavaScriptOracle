let listaNumerosGenerados = [];
let numeroMaximo = 10;


function TitulosPaginas(elemento, texto){
    let ElementoTexto = document.querySelector(elemento);
    ElementoTexto.innerHTML = texto;
}

TitulosPaginas("h1", "Bienvenidos al juego")
TitulosPaginas("p", "Ingrese un numero")

function generarNumerosAleatorios(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; 

    console.log(listaNumerosGenerados)
    if (listaNumerosGenerados.length == numeroMaximo) {
        TitulosPaginas("p", "Se supero capacidad de la memoria")
    } else {
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumerosAleatorios();
        } else {
            listaNumerosGenerados.push(numeroGenerado)
            return numeroGenerado;    
        }        
    }

}

let NumeroSecreto = generarNumerosAleatorios();
let contador = 1;
console.log(NumeroSecreto)

function intentoDeUsuario(){
    let NumeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);
    if (NumeroDeUsuario === NumeroSecreto) {
        TitulosPaginas("p", `adivinaste!! \n Intentaste: ${contador} ${contador === 1 ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("Intentar").setAttribute("disabled", "true");
    
    } else {
        if (NumeroDeUsuario < NumeroSecreto) {
            TitulosPaginas("p", `El numero secreto es mayor \n Intentaste: ${contador} ${contador === 1 ? "vez" : "veces"}`)
            
        } else {
            TitulosPaginas("p", `El numero secreto es menor \n Intentaste: ${contador} ${contador === 1 ? "vez" : "veces"}`)
        
        }
    }
    contador ++;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector("#ValorUsuario").value = ""; 
}

function reiniciarJuego(){
    NumeroSecreto = generarNumerosAleatorios();
    TitulosPaginas("p", "Se genero un nuevo numero secreto. \n Ingrese un nuevo numero");
    contador = 1;
    console.log(NumeroSecreto)
    document.getElementById("reiniciar").setAttribute("disabled", "false");
    document.getElementById("Intentar").removeAttribute("disabled");
}











