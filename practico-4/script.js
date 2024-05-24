const selector = document.querySelector('#parrafo')

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF'
    let color = '#'
    for (let i =0; i<6; i++){
        color += letras [Math.floor(Math.random()*16)];
    }
    return color;
}

function cambiarColor(){
    selector.setAttribute('style', `background-color: ${generarColorAleatorio()}`);
}