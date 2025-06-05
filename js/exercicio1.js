function gerarChunks(n) {
    if (n <= 0) return "";
    if (n === 1) return "chunk";
    return "chunk-" + gerarChunks(n - 1);
}

function executarRecursao() {
    const valor = parseInt(document.getElementById("numeroChunks").value);
    const resultado = gerarChunks(valor);
    document.getElementById("output").innerText = resultado;
}
