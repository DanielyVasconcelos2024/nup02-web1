function calcularMedia(...numeros) {
    if (numeros.length === 0) return 0;
    
    let soma = numeros.reduce((acc, valor) => acc + valor, 0);
    return soma / numeros.length;
}

console.log(calcularMedia(10, 9, 6, 8, 9, 1, 5, 7));
console.log(calcularMedia(2, 5, 7, 1, -2)); 
console.log(calcularMedia(10, 10, 10, 10, 9)); 
console.log(calcularMedia(25, 75)); 
