function encritar(){
    let texto = document. getElementById("texto").ariaValueMax;
    let titulo mensaje=document. getElementById('titulo mensaje');

    let textoCifrado = texto
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/o/gi,"ober")
    .replace(/a/gi,"ai")
    .replace(/u/gi,"yibd")

    if (texto.length ! =0){
        texto = textoCifrado;
        tituloMensaje. textContent= "texto encritado con exito";
        parrafo.textContent=""
    } else{
        alert"Desbes ingresar algun texto"
    }
} 
