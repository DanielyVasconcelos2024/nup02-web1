function getTexto(){
    return document.getElementById('inputFraseOriginal').value;
}

function getPalavra(){
    return document.getElementById('inputPalavra').value;
}

function getIndices(){
    string_indices = document.getElementById('inputIndices').value;
    lista_indices = string_indices.split(',');
    let indices = []

    for(let indice of lista_indices){
        indices.push(parseInt(indice));
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
        texto = texto.slice(0, indice) + palavra + texto.slice(indice);
    }

    let displayTexto = getDisplayTexto();
    let displayPalavraIndices = getDisplayPalavraIndices();
    let displayResultado = getDisplayResultado();

    displayTexto.textContent = texto_antigo;
    displayPalavraIndices.textContent = "Palavra: '" +  palavra + "' e índice(s): " + indices;
    displayResultado.textContent = texto;
}