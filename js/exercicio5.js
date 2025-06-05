function encontrarMaiorLetra() {
    const texto = document.getElementById("inputString").value.toLowerCase().replace(/\s/g, "");
    
    if (texto.length === 0) {
        document.getElementById("outputOriginal").innerText = "Nenhum texto inserido.";
        document.getElementById("outputMaiorLetra").innerText = "-";
        return;
    }

    let maior = texto[0];

    for (let i = 1; i < texto.length; i++) {
        if (texto[i] > maior) {
            maior = texto[i];
        }
    }

    document.getElementById("outputOriginal").innerText = texto;
    document.getElementById("outputMaiorLetra").innerText = maior;
}
