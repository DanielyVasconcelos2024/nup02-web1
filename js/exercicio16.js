function getText(){
    return document.getElementById('inputStringCifrada').value;
}

function getShifts(){
    return document.getElementById('inputChave').value;
}

function getDisplayText(){
    return document.getElementById("outputStringOriginal");
}

function getDisplayShift(){
    return document.getElementById('outputChave');
}

function getDisplayResult(){
    return document.getElementById('outputDescriptografada');
}

function ceaser(){
    let  alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let texto = getText();
    let texto_final = "";
    let shift = getShifts() * -1;

    for (let letra of texto.toLowerCase()){
        if (alfabeto.includes(letra)){
            let posicao_letra = alfabeto.indexOf(letra);
            let nova_posicao = (posicao_letra + shift) % 26;

            if(nova_posicao < 0){
                nova_posicao += 26;
            }

            texto_final += alfabeto[nova_posicao];
        }
        else {
            texto_final += letra;
        }
    }

    let display_texto = getDisplayText();
    let display_shift = getDisplayShift();
    let display_result = getDisplayResult();

    if(display_texto){
        display_texto.textContent = texto;
    } else {
        console.error(`Elemento com ID: 'outputStringOriginal' não foi encontrado`);
    }

    if(display_shift){
        display_shift.textContent = getShifts();
    } else {
        console.error(`Elemento com ID: 'outputChave' não foi encontrado`)
    }

    if(display_result){
        display_result.textContent = texto_final;
    } else {
        console.error(`Elemento com ID: 'outputDescriptografada' não foi encontrado`)
    }
}

