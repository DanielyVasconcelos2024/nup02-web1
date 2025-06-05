function calcularFibonacci() {
    const input = document.getElementById('inputNumero').value.trim();
    const output = document.getElementById('outputValido');

    try {
        const num = BigInt(input);
        if (num < 0n) {
            output.textContent = "Por favor, digite um número inteiro não-negativo.";
            return;
        }
    } catch (e) {
        output.textContent = "Por favor, digite um número inteiro não-negativo.";
        return;
    }

    const n = BigInt(input);

    let fib = fibonacci(n)

    output.textContent = fib.toString();
}
function fibonacci(num) {
    if (num === 0n) return 0n;
    if (num === 1n) return 1n;
    let a = 0n, b = 1n;
    for (let i = 2n; i <= num; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}