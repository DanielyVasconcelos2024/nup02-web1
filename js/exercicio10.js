function calcularFatorial() {
    const numero = parseInt(document.getElementById("inputNumeroFatorial").value);
    const outputNumero = document.getElementById("outputNumeroOriginal");
    const outputFatorial = document.getElementById("outputFatorial");

    if (isNaN(numero) || numero < 0) {
        outputNumero.textContent = "";
        outputFatorial.textContent = "Insira um número inteiro positivo.";
        return;
    }

    outputNumero.textContent = numero;
    outputFatorial.textContent = fatorial(numero);
}

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}
