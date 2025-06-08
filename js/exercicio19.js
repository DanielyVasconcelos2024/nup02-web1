function calcularPersistenciaMultiplicativa() {
    const input = document.getElementById("inputNumero");
    const numero = parseInt(input.value);

    const outputNumero = document.getElementById("outputNumeroOriginal");
    const outputPersistencia = document.getElementById("outputPersistencia");
    const outputPassos = document.getElementById("outputPassos");

    if (isNaN(numero) || numero < 0) {
        outputNumero.textContent = '';
        outputPersistencia.textContent = '';
        outputPassos.textContent = 'Digite um número inteiro positivo válido.';
        return;
    }

    outputNumero.textContent = numero;

    let passos = [];
    let persistencia = 0;
    let atual = numero;

    while (atual >= 10) {
        const digitos = atual.toString().split('').map(Number);
        const produto = digitos.reduce((acc, d) => acc * d, 1);

        passos.push(`${digitos.join(' x ')} = ${produto}`);
        atual = produto;
        persistencia++;
    }

    outputPersistencia.textContent = persistencia;
    outputPassos.innerHTML = passos.map((p, i) => `${i + 1}. ${p}`).join('<br>');
}
