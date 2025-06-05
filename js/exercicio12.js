function calcularMoedas() {
    let valor = parseInt(document.getElementById("inputValor").value);
    const outputOriginal = document.getElementById("outputValorOriginal");
    const outputMoedas = document.getElementById("outputMoedas");

    if (isNaN(valor) || valor < 0) {
        outputOriginal.textContent = "";
        outputMoedas.textContent = "Digite um número inteiro positivo.";
        return;
    }

    outputOriginal.textContent = `${valor} créditos`;

    const moedas = [500, 100, 25, 10, 5, 1];
    const resultado = {};

    for (let moeda of moedas) {
        resultado[moeda] = Math.floor(valor / moeda);
        valor %= moeda;
    }

    const textoResultado = moedas
        .map(moeda => `${resultado[moeda]} moeda(s) de ${moeda} crédito(s)`)
        .join(", ");

    outputMoedas.textContent = textoResultado;
}
