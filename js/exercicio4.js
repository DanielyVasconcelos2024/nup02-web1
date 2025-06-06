function calcularElevacaoQuadratica() {
    const numero = document.getElementById("inputNumero").value;
    const numeroStr = numero.toString();

    let resultado = "";

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i]);
        if (!isNaN(digito)) {
            const quadrado = digito * digito;
            resultado += quadrado.toString();
        }
    }

    document.getElementById("outputOriginal").innerText = numero;
    document.getElementById("outputQuadradoConcatenado").innerText = parseInt (resultado);
}
