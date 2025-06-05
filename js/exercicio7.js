function organizarResultados() {
    const arrayBidimensional = [
        [10, 3, 8],
        [1, 9],
        [5, 7, 2]
    ];

    const unificado = arrayBidimensional.flat();

    const ordenado = unificado.sort((a, b) => a - b);

    document.getElementById("outputOriginal").innerText = JSON.stringify(arrayBidimensional);
    document.getElementById("outputOrdenado").innerText = ordenado.join(", ");
}
