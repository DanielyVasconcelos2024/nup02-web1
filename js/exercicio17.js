function getTexto(){
    return document.getElementById('inputFraseOriginal').value;
}

function getPalavra(){
    return document.getElementById('inputPalavra').value;
}

function getIndices() {
    let string_indices = document.getElementById('inputIndices').value;
    let lista_indices = string_indices.split(',');
    let indices = [];

    for (let indice of lista_indices) {
        indice = indice.trim();
        let num = parseInt(indice);
        if (!isNaN(num) && num >= 0) {
            indices.push(num);
        }
    }

    return indices;
}

function getDisplayTexto(){
    return document.getElementById('outputFraseOriginal');
}

function getDisplayPalavraIndices(){
    return document.getElementById('outputPalavraIndices');
}

function getDisplayResultado(){
    return document.getElementById('outputFraseModificada');
}

function inserirPalavra(){
    let texto = getTexto();
    let texto_antigo = texto;
    let palavra = getPalavra();
    let indices = getIndices();

    indices.sort((a, b) => b - a);
 
    for(let indice of indices){
        
        if(indice > texto.length){
            continue;
        }
        texto = texto.slice(0, indice) + palavra + " " + texto.slice(indice);
    }

    let displayTexto = getDisplayTexto();
    let displayPalavraIndices = getDisplayPalavraIndices();
    let displayResultado = getDisplayResultado();

    displayTexto.textContent = texto_antigo;
    displayPalavraIndices.textContent = "Palavra: '" +  palavra + "' e índice(s): " + indices;
    displayResultado.textContent = texto;
}