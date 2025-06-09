function gerarCoordenadas() {
    const x = parseInt(document.getElementById("inputX").value);
    const y = parseInt(document.getElementById("inputY").value);

    const outputOriginal = document.getElementById("outputCoordenadaOriginal");
    const outputLista = document.getElementById("outputCoordenadasGeradas");

    if (isNaN(x) || isNaN(y) || x < 0 || y < 0) {
        outputOriginal.textContent = "";
        outputLista.textContent = "Insira valores inteiros positivos para X e Y.";
        return;
    }

    outputOriginal.textContent = `(${x}, ${y})`;

    const coordenadas = [];

    for (let j = 0; j <= x; j++) {
        for (let i = 0; i <= y; i++) {
            coordenadas.push(`(${j}, ${i})`);
        }
    }

    outputLista.textContent = coordenadas.join(", ");
}
