function verificarPrisioneirosFaltando() {
    const entrada = document.getElementById("inputListaPrisioneiros").value;
    const lista = entrada.split(',');
    const numeros = lista.map(prisioneiro => parseInt(prisioneiro));
    const n = Math.max(...numeros);
    const todos = [];
    for (let i = 1; i <= n; i++) {
        todos.push(i);
    }
    const faltando = todos.filter(num => !numeros.includes(num));
    const faltandoFormatado = faltando.map(num => num.toString().padStart(4, '0'));
    document.getElementById("outputListaRecebida").textContent = lista.join(', ');
    document.getElementById("outputFaltando").textContent = faltandoFormatado.length > 0
        ? faltandoFormatado.join(', ')
        : "Nenhum";
}