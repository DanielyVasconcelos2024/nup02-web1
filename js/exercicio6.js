function inverterPalavras() {
    const frase = document.getElementById("inputFrase").value.toLowerCase().trim();

    if (frase.length === 0) {
        document.getElementById("outputOriginal").innerText = "Nenhuma frase inserida.";
        document.getElementById("outputPalavrasInvertidas").innerText = "-";
        return;
    }

    const palavras = frase.split(" ");
    const invertidas = palavras.map(palavra => palavra.split("").reverse().join(""));
    const resultado = invertidas.join(" ");

    document.getElementById("outputOriginal").innerText = frase;
    document.getElementById("outputPalavrasInvertidas").innerText = resultado;
}
