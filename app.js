let letterAsub = 'ai';
let letterEsub = 'enter';
let letterIsub = 'imes';
let letterOsub = 'ober';
let letterUsub = 'ufat';


function criptografar() {
    let campoTexto = document.querySelector('textarea').value;

    campoTexto = campoTexto.toLowerCase();

    if (campoTexto.includes('e') != 'E') {
        campoTexto = campoTexto.replaceAll(/e/g, letterEsub);
        /* campoTexto = campoTexto.replace(/e/g, letterEsub) */
    }
    if (campoTexto.includes('i') != 'I') {
        /* campoTexto = campoTexto.replace(/i/g, letterIsub) */
        campoTexto = campoTexto.replaceAll(/i/g, letterIsub);
    }

    if (campoTexto.includes('a') != 'A') {
        campoTexto = campoTexto.replaceAll(/a/g, letterAsub);
    }

    if (campoTexto.includes('o') != 'O') {
        campoTexto = campoTexto.replaceAll(/o/g, letterOsub);
    }
    if (campoTexto.includes('u') != 'U') {
        campoTexto = campoTexto.replaceAll(/u/g, letterUsub);
    }

    document.getElementById('content_sec2_oculta_paragrafo').innerHTML = campoTexto;


    esconderElementos('ocultar');
    esconderElementos('ocultar1');

    exibirElementos('content_sec2_oculta');

}

function descriptografar() {
    let campoTexto = document.querySelector('textarea').value;


    if (campoTexto.includes(letterEsub)) {
        campoTexto = campoTexto.replaceAll(letterEsub, 'e');
    }
    if (campoTexto.includes(letterIsub)) {
        campoTexto = campoTexto.replaceAll(letterIsub, 'i');
    }

    if (campoTexto.includes(letterAsub)) {
        campoTexto = campoTexto.replaceAll(letterAsub, 'a');
    }

    if (campoTexto.includes(letterOsub)) {
        campoTexto = campoTexto.replaceAll(letterOsub, 'o');
    }
    if (campoTexto.includes(letterUsub)) {
        campoTexto = campoTexto.replaceAll(letterUsub, 'u');
    }

    document.getElementById('content_sec2_oculta_paragrafo').innerHTML = campoTexto;

    esconderElementos('ocultar');
    esconderElementos('ocultar1');

    exibirElementos('content_sec2_oculta');

}

function esconderElementos(el) {
    document.getElementById(el).style.display = 'none';
}

function exibirElementos(el) {
    document.getElementById(el).style.display = 'block';
}

function copiar() {
    let textoACopiar = document.getElementById('content_sec2_oculta_paragrafo').innerHTML;

    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            alert('Texto copiado!');
        })
        .catch((error) => {
            console.error('Erro ao copiar', error);
        })
}
