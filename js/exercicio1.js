function calcularMedia(...numeros) {
    if (numeros.length === 0) return 0;
    
    let soma = numeros.reduce((acc, valor) => acc + valor, 0);
    return soma / numeros.length;
}
